-- Mamrex Learn: run this ONCE in Supabase -> SQL Editor -> New query -> Run.
-- Accounts are handled by Supabase Auth. Learner names are saved with the account.

create table if not exists public.enrolments (
  user_id uuid not null references auth.users (id) on delete cascade,
  course text not null,
  enrolled_at timestamptz not null default now(),
  primary key (user_id, course)
);

create table if not exists public.lesson_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  course text not null,
  lesson text not null,
  score int not null default 0,
  total int not null default 0,
  completed_at timestamptz not null default now(),
  primary key (user_id, course, lesson)
);

-- Each learner can only see and change their own rows.
alter table public.enrolments enable row level security;
alter table public.lesson_progress enable row level security;

create policy "own enrolments read" on public.enrolments for select using (auth.uid() = user_id);
create policy "own enrolments add" on public.enrolments for insert with check (auth.uid() = user_id);
create policy "own enrolments edit" on public.enrolments for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own progress read" on public.lesson_progress for select using (auth.uid() = user_id);
create policy "own progress add" on public.lesson_progress for insert with check (auth.uid() = user_id);
create policy "own progress edit" on public.lesson_progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- For you (the admin): a simple report of who joined and how far they got.
-- View it in Supabase -> Table Editor -> learner_report (not readable by learners).
create or replace view public.learner_report as
select
  u.email,
  coalesce(u.raw_user_meta_data ->> 'full_name', '') as full_name,
  u.created_at as registered_at,
  (select count(*) from public.enrolments e where e.user_id = u.id) as courses_enrolled,
  (select count(*) from public.lesson_progress p where p.user_id = u.id) as lessons_completed
from auth.users u;
revoke all on public.learner_report from anon, authenticated;

-- ───────── Admin access (run once, after the section above) ─────────
-- Only users listed in public.admins can use the admin page (/learn/admin/).
-- To make someone an admin: they register on the site first, then run:
--   insert into public.admins (user_id) select id from auth.users where email = 'their@email.com';
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  added_at timestamptz not null default now()
);
alter table public.admins enable row level security; -- no policies: not readable through the API

create or replace function public.is_admin() returns boolean language sql security definer stable set search_path = public
as $$ select exists (select 1 from public.admins where user_id = auth.uid()); $$;

create or replace function public.admin_learners()
returns table (user_id uuid, email text, full_name text, registered_at timestamptz, last_sign_in timestamptz, courses_enrolled bigint, lessons_completed bigint)
language sql security definer stable set search_path = public, auth
as $$
  select u.id, u.email::text, coalesce(u.raw_user_meta_data ->> 'full_name', '')::text, u.created_at, u.last_sign_in_at,
         (select count(*) from public.enrolments e where e.user_id = u.id),
         (select count(*) from public.lesson_progress p where p.user_id = u.id)
  from auth.users u where public.is_admin() order by u.created_at desc;
$$;

create or replace function public.admin_enrolments()
returns table (user_id uuid, email text, full_name text, course text, enrolled_at timestamptz, lessons_done bigint, last_activity timestamptz)
language sql security definer stable set search_path = public, auth
as $$
  select e.user_id, u.email::text, coalesce(u.raw_user_meta_data ->> 'full_name', '')::text, e.course, e.enrolled_at,
         (select count(*) from public.lesson_progress p where p.user_id = e.user_id and p.course = e.course),
         (select max(p.completed_at) from public.lesson_progress p where p.user_id = e.user_id and p.course = e.course)
  from public.enrolments e join auth.users u on u.id = e.user_id
  where public.is_admin() order by e.enrolled_at desc;
$$;

revoke all on function public.is_admin() from public, anon;
revoke all on function public.admin_learners() from public, anon;
revoke all on function public.admin_enrolments() from public, anon;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.admin_learners() to authenticated;
grant execute on function public.admin_enrolments() to authenticated;

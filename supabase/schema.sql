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

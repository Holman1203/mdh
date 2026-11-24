import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="font-heading text-6xl font-semibold text-brand">404</p>
      <h1 className="mt-4 font-heading text-3xl font-semibold text-brand">Page not found</h1>
      <p className="mt-3 text-black/70">The page you are looking for does not exist or has moved.</p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </div>
  );
}

import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className="min-h-full px-6 py-20">
      <div className="flex-center flex-col text-center gap-10">
        <p className="text-base font-semibold text-sky-600">404</p>

        <h1 className="text-5xl font-semibold tracking-tight text-balance text-black/75 text-shadow-xs text-shadow-stone-800">
          Page not found
        </h1>

        <p className="text-lg font-medium text-pretty text-zinc-500">
          Sorry, we couldn&rsquo;t find what you&rsquo;re looking for.
        </p>

        <div className="flex justify-center">
          <Link
            to="/"
            className="text-sm border-2 border-stone-800 rounded-md hover:bg-stone-800 px-3.5 py-2.5 text-white/55"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

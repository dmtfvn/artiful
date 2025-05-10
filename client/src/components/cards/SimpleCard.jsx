import { Link } from 'react-router';

export default function SimpleCard({
  _id,
  title,
  imageUrl,
}) {
  return (
    <section className="flex flex-col max-w-[12em] w-full h-[17em]">
      <h1 className="w-full text-center whitespace-nowrap truncate overflow-hidden text-[var(--color-yt-ish)] px-3">
        {title}
      </h1>

      <div className="border-1 border-[var(--color-gy-ish)] rounded-lg overflow-hidden mt-auto">
        <img
          className="h-48 w-full object-cover"
          src={imageUrl}
          alt={title}
        />

        <Link to={`/details/${_id}`}>
          <p className="text-center border-t border-[var(--color-gy-ish)] text-[var(--color-yt-ish)] py-3 hover:bg-black/55">
            Details
          </p>
        </Link>
      </div>
    </section>
  );
}

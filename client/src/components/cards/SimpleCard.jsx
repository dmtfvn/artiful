import { Link } from 'react-router';

export default function SimpleCard({
  image,
}) {
  return (
    <div className="max-w-[12em] w-full">
      <h1 className="max-w-full whitespace-nowrap truncate overflow-hidden text-[var(--color-yt-ish)] px-3 pb-1">
        Really amazing image name
      </h1>

      <div className="border-1 border-[var(--color-gy-ish)] rounded-lg overflow-hidden">
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt="Home in Countryside"
        />

        <Link to="#">
          <p className="text-center border-t border-[var(--color-gy-ish)] text-[var(--color-yt-ish)] py-3 hover:bg-black/55">
            Details
          </p>
        </Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router';

export default function HomeCard({
  image,
}) {
  return (
    <div className="group relative w-[12em]">
      <h3 className="card-hover-show-text">
        Art name of some really cool images
      </h3>

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

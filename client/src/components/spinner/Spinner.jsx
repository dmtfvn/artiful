import { FadeLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="absolute flex-center inset-10">
      <FadeLoader
        color="rgb(68, 64, 60)"
        speedMultiplier={2}
      />
    </div>
  );
}

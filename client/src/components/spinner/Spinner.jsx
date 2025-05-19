import { ScaleLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="absolute flex-center inset-10">
      <ScaleLoader
        color="rgb(68, 64, 60)"
        width={6}
      />
    </div>
  );
}

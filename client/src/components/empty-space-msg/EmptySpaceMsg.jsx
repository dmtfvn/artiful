export default function EmptySpaceMsg({
  message
}) {
  return (
    <div className="absolute flex-center inset-10">
      <h1 className="text-2xl text-center font-bold h1-shadow">{message}</h1>
    </div>
  );
}

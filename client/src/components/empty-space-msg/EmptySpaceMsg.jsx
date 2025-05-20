export default function EmptySpaceMsg({
  message
}) {
  return (
    <div className="absolute flex-center inset-10">
      <h1 className="text-2xl text-center font-bold txt-shadow">{message}</h1>
    </div>
  );
}

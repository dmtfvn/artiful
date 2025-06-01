export default function ServiceErrorMsg({
  message
}) {
  return (
    <div className="absolute flex-center inset-10">
      <h1 className="text-2xl text-center text-red-400">{message}</h1>
    </div>
  );
}

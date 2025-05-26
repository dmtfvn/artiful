export default function SubmitButton({
  pending,
  error,
  style,
  label,
}) {
  const isApproved = pending || error;

  return (
    <button
      type="submit"
      disabled={isApproved}
      className={`${style} ${isApproved ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      {label}
    </button>
  );
}

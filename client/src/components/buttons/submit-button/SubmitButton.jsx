export default function SubmitButton({
  pending,
  style,
  label,
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={`${style} ${pending ? 'cursor-not-allowed opacity-50' : ''}`.trim()}
    >
      {label}
    </button>
  );
}

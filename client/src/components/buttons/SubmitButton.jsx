export default function SubmitButton({
  label,
  pending,
}) {
  return (
    <button
      type="submit"
      className={`submit-button-style ${pending ? 'cursor-not-allowed opacity-50' : ''}`.trim()}
      disabled={pending}
    >
      {label}
    </button>
  );
}

export default function SubmitButton({
  label,
  pending,
}) {
  return (
    <button
      type="submit"
      className="submit-button-style"
      disabled={pending}
    >
      {label}
    </button>
  );
}

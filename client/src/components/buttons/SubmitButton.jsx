export default function SubmitButton({
  label
}) {
  return (
    <button
      type="submit"
      className="submit-button-style"
    >
      {label}
    </button>
  );
}

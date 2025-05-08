export default function MainInput({
  identifier,
  hint,
}) {
  return (
    <input
      id={identifier}
      type="text"
      name={identifier}
      placeholder={hint}
      autoComplete="off"
      className="main-input-style"
    />
  );
}

export default function FormInput({
  identifier,
  hint,
}) {
  return (
    <input
      id={identifier}
      type={identifier === "password" || identifier === "re-password" ? "password" : 'text'}
      name={identifier}
      placeholder={hint}
      className="form-input-style"
      autoComplete="off"
    />
  );
}

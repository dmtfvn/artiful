export default function FormInput({
  identifier,
  hint,
}) {
  return (
    <input
      id={identifier}
      name={identifier}
      type={identifier === "password" || identifier === "re-password" ? "password" : 'text'}
      placeholder={hint}
      className="input-style"
    />
  );
}

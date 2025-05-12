export default function MainInput({
  identifier,
  hint,
  value,
}) {
  return (
    <input
      id={identifier}
      type="text"
      name={identifier}
      placeholder={hint}
      autoComplete="off"
      defaultValue={value}
      className="main-input-style"
    />
  );
}

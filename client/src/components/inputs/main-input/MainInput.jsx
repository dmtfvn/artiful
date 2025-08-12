export default function MainInput({
  label,
  hint,
  inputValue,
  changeValue,
}) {
  return (
    <input
      id={label}
      type="text"
      name={label}
      placeholder={hint}
      autoComplete="off"
      value={inputValue}
      onChange={changeValue}
      className="general-input-style"
    />
  );
}

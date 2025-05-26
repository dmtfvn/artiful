export default function MainInput({
  identifier,
  hint,
  inputValue,
  changeValue,
}) {
  return (
    <input
      id={identifier}
      type="text"
      name={identifier}
      placeholder={hint}
      autoComplete="off"
      value={inputValue}
      onChange={changeValue}
      className="main-input-style"
    />
  );
}

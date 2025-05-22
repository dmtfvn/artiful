export default function AuthInput({
  identifier,
  hint,
  inputValue,
  onTyping,
  error,
}) {
  return (
    <input
      id={identifier}
      type={identifier === "password" || identifier === "rePassword"
        ?
        "password"
        :
        'text'
      }
      name={identifier}
      placeholder={hint}
      autoComplete="off"
      value={inputValue}
      onChange={onTyping}
      className={`auth-style ${error ? "outline-pink-900" : ''}`.trim()}
    />
  );
}

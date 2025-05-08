export default function AuthInput({
  identifier,
  hint,
}) {
  return (
    <input
      id={identifier}
      type={identifier === "password" || identifier === "re-password"
        ?
        "password"
        :
        'text'
      }
      name={identifier}
      placeholder={hint}
      autoComplete="off"
      className="auth-style"
    />
  );
}

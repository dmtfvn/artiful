export default function FormInput({
  identifier
}) {
  return (
    <input
      id={identifier}
      name={identifier}
      type={identifier}
      placeholder={`Enter ${identifier} here`}
      className="input-style"
    />
  );
}

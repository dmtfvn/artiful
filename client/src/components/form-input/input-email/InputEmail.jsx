export default function InputEmail() {
  return (
    <input
      id="email"
      name="email"
      type="email"
      required
      autoComplete="email"
      placeholder="Enter email here"
      className="input-style"
    />
  );
}

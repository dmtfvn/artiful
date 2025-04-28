export default function InputPassword() {
  return (
    <input
      id="password"
      name="password"
      type="password"
      required
      autoComplete="current-password"
      placeholder="Enter password here"
      className="input-style"
    />
  );
}

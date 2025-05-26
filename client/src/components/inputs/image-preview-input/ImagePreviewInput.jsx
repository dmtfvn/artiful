export default function ImagePreviewInput({
  identifier,
  valueUrl,
  changeUrl,
}) {
  return (
    <input
      id={identifier}
      type="text"
      name={identifier}
      value={valueUrl}
      onChange={changeUrl}
      placeholder="Paste image URL here"
      autoComplete="off"
      className="main-input-style"
    />
  );
}

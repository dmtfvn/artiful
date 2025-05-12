export default function ImagePreviewInput({
  identifier,
  valueUrl,
  onChangeUrl,
}) {
  return (
    <input
      id={identifier}
      type="text"
      name={identifier}
      defaultValue={valueUrl}
      onChange={onChangeUrl}
      placeholder="Paste image URL here"
      autoComplete="off"
      className="main-input-style"
    />
  );
}

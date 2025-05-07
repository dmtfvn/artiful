export default function ImagePreviewInput({
  urlValue,
  onChangeUrl,
}) {
  return (
    <input
      type="text"
      value={urlValue}
      onChange={onChangeUrl}
      placeholder="Paste image URL here"
      className="form-input-style"
    />
  );
}

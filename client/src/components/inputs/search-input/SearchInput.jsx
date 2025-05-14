export default function SearchInput({
  searchValue,
  setState,
}) {
  return (
    <input
      type="text"
      name="search"
      value={searchValue}
      onInput={(e) => setState(e.target.value)}
      placeholder="Type here to search"
      autoComplete="off"
      className="search-style"
    />
  );
}

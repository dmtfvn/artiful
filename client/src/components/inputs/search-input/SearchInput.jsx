import { XMarkIcon } from '@heroicons/react/24/outline';

export default function SearchInput({
  searchValue,
  setSearchValue,
}) {
  const clearInput = () => {
    setSearchValue('');
  }

  return (
    <div className="relative w-full">
      <input
        type="text"
        name="search"
        value={searchValue}
        onInput={(e) => setSearchValue(e.target.value)}
        placeholder="Type here to search"
        autoComplete="off"
        className={`search-style ${searchValue ? 'pr-10.5' : 'pr-3'}`}
      />

      {searchValue &&
        <button
          onClick={clearInput}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-600 hover:bg-stone-900 rounded-sm cursor-pointer">
          <XMarkIcon className="size-6" />
        </button>
      }
    </div>
  );
}

import { useActionState, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import SearchInput from '../inputs/search-input/SearchInput.jsx';
import CustomSelect from '../select/CustomSelect.jsx';
import ServiceErrorMsg from '../service-error-msg/ServiceErrorMsg.jsx';

import { useSearch } from '../../api/extraApi.js';

export default function SearchForm({
  artState,
  searchState,
}) {
  const [selectOption, setSelectOption] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [criteria, setCriteria] = useState(false);
  const [noSearch, setNoSearch] = useState('');

  const { search } = useSearch();

  const searchHandler = async () => {
    const option = selectOption.value;

    if (!option) {
      return;
    }

    try {
      const searchResult = await search(option, inputValue);

      if (!searchResult.length) {
        artState([]);
        searchState(true);
        return;
      }

      artState(searchResult);
      searchState(false);
    } catch (err) {
      setNoSearch(err.message);
    }
  }

  const [, actionSearch, isPending] = useActionState(searchHandler);

  return (
    <div className="relative max-w-[29em] w-full flex flex-col self-center">
      <form action={actionSearch} className="flex-center flex-wrap mt-20 mb-4 gap-11">
        <div className="flex max-w-3xs w-full">
          <SearchInput
            searchValue={inputValue}
            setSearchValue={setInputValue}
          />

          <button
            disabled={isPending}
            className={`flex-center -ml-1.5 bg-stone-800 rounded-r-md text-zinc-600 ${isPending ? 'cursor-not-allowed' : 'cursor-pointer'} hover:text-zinc-400 px-2 py-1.5 z-5`}
          >
            <MagnifyingGlassIcon
              className="size-6"
            />
          </button>
        </div>

        <CustomSelect
          setState={setSelectOption}
          onSelect={setCriteria}
        />
      </form>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        {isPending && criteria &&
          <BarLoader color="rgb(68, 64, 60)" width={420} />
        }

        {noSearch &&
          <ServiceErrorMsg
            message={noSearch}
          />
        }
      </div>
    </div>
  );
}

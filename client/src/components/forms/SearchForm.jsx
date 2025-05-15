import { useActionState, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import SearchInput from '../inputs/search-input/SearchInput.jsx';
import CustomSelect from '../select/CustomSelect.jsx';

import { useSearchArt } from '../../api/queryApi.js';

export default function SearchForm({
  artState,
  searchState,
}) {
  const [selectOption, setSelectOption] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [criteria, setCriteria] = useState(false);

  const { search } = useSearchArt();

  const searchHandler = async () => {
    const option = selectOption.value;

    if (!option) {
      return;
    }

    const searchResult = await search(option, inputValue);

    if (!searchResult.length) {
      artState([]);
      searchState(true);
      return;
    }

    artState(searchResult);
    searchState(false);
  }

  const [, actionSearch, isPending] = useActionState(searchHandler);

  return (
    <div className="flex flex-col gap-4">
      <form action={actionSearch} className="flex-center flex-wrap mt-20 gap-11">
        <div className="flex">
          <SearchInput
            searchValue={inputValue}
            setSearchValue={setInputValue}
          />

          <button
            disabled={isPending}
            className={`flex-center -ml-1.5 bg-stone-800 rounded-r-md text-zinc-600 ${isPending ? 'cursor-not-allowed' : 'cursor-pointer'} hover:text-zinc-400 px-2 py-1.5 z-5`}>
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

      <div className="flex justify-center min-h-2 h-full">
        {isPending && criteria &&
          <BarLoader color="rgb(68, 64, 60)" />
        }
      </div>
    </div>
  );
}

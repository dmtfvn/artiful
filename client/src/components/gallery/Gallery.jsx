import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import SearchInput from '../inputs/search-input/SearchInput.jsx';
import SimpleCard from '../cards/SimpleCard.jsx';
import CustomSelect from '../select/CustomSelect.jsx';

import { useArts } from '../../api/crudApi.js';

import Spinner from '../spinner/Spinner.jsx';
import EmptySpaceMsg from '../empty-space-msg/EmptySpaceMsg.jsx';

export default function Gallery() {
  const { arts, loading } = useArts();
  const [selectOption, setSelectOption] = useState({});

  const searchHandler = (formData) => {
    console.log(Object.fromEntries(formData))
    console.log(selectOption)
  }

  return (
    <section className="section-wrapper">
      <h1 className="text-3xl text-center text-black/75 font-bold mt-20 h1-shadow">
        Check the gallery, or search for something specific.
      </h1>

      <form action={searchHandler} className="flex-center flex-wrap mt-20 mb-4 gap-11">
        <div className="flex">
          <SearchInput />

          <button className="flex-center -ml-1.5 cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="bg-stone-800 text-[1em] rounded-r-md text-zinc-600 hover:text-zinc-400 px-3.5 py-2.5"
            />
          </button>
        </div>

        <CustomSelect setState={setSelectOption} />
      </form>

      <div className="relative grid-gallery">
        {loading &&
          <Spinner />
        }

        {arts.map(a => (
          <SimpleCard
            key={a._id}
            {...a}
          />
        ))}

        {!loading && !arts.length
          ?
          <EmptySpaceMsg
            message="This place is supposed to be full of art"
          />
          :
          null
        }
      </div>
    </section>
  );
}

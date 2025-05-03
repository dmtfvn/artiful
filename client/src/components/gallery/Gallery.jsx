import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// import { FadeLoader } from 'react-spinners';

import SearchInput from '../inputs/search-input/SearchInput.jsx';
import SimpleCard from '../cards/SimpleCard.jsx';

// import { useArts } from '../../api/artApi.js';

export default function Gallery() {
  // const { arts, loading } = useArts();

  return (
    <section className="flex flex-col max-w-[84em] w-full">
      <h1 className="text-3xl text-center text-black/75 font-bold mt-20 text-shadow-xs text-shadow-stone-800">
        Check the gallery, or search for something specific.
      </h1>

      <form className="flex-center flex-wrap mt-20 mb-4 gap-5">
        <div className="flex mx-5">
          <SearchInput />

          <button className="flex-center -ml-1.5 cursor-pointer">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="bg-stone-800 text-[1em] rounded-r-md text-zinc-600 hover:text-zinc-400 px-3.5 py-2.5"
            />
          </button>
        </div>

        <select name="select" className="select-style">
          <option value>choose</option>
          <option value="art-name">ART NAME</option>
          <option value="art-creator">ART CREATOR</option>
        </select>
      </form>

      <div className="grid-gallery">
        <SimpleCard image="https://wallpaperaccess.com/full/1490234.jpg" />

        <SimpleCard image="https://palmettowebdesign.com/wp-content/uploads/2015/08/White-Space.jpg" />

        <SimpleCard image="https://i.pinimg.com/736x/c1/2c/a7/c12ca701ca2fc38111f374336af00b7d.jpg" />

        <SimpleCard image="https://diggingpress.com/wp-content/uploads/2020/02/AdobeStock_276275467-e1581822414196.jpeg" />

        <SimpleCard image="https://freeyork.org/wp-content/uploads/2016/10/cinta-vidal-agullo-1.jpg" />

        <SimpleCard image="https://i.pinimg.com/originals/c7/39/b7/c739b7730694ae54a695655dc4583e14.jpg" />

        <SimpleCard image="https://live.staticflickr.com/65535/52663295353_66d55ca268_b.jpg" />
      </div>
    </section>
  );
}

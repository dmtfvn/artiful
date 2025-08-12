import { useState } from 'react';

import SearchForm from '../forms/SearchForm.jsx';
import SimpleCard from '../cards/SimpleCard.jsx';
import Spinner from '../spinner/Spinner.jsx';
import EmptySpaceMsg from '../empty-space-msg/EmptySpaceMsg.jsx';
import ServiceErrorMsg from '../service-error-msg/ServiceErrorMsg.jsx';

import { useArts } from '../../api/crudApi.js';

export default function Gallery() {
  const [noResult, setNoResult] = useState(false);

  const { arts, setArts, loading, noFetch } = useArts();

  return (
    <section className="section-wrapper-grid">
      <h1 className="text-3xl text-center text-black/75 font-bold txt-shadow mt-20">
        Check the gallery, or search for something specific.
      </h1>

      <SearchForm
        artState={setArts}
        searchState={setNoResult}
      />

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

        {noResult && !arts.length &&
          <EmptySpaceMsg
            message="Oops! We couldn't find what you were looking for."
          />
        }

        {!noResult && !noFetch && !arts.length && !loading &&
          <EmptySpaceMsg
            message="This place is supposed to be full of art"
          />
        }

        {!loading && noFetch &&
          <ServiceErrorMsg
            message={noFetch}
          />
        }
      </div>
    </section>
  );
}

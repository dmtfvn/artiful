import { useParams } from 'react-router';

import { HeartIcon as HeartOutline, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
// import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

import useUserContext from '../../hooks/useUserContext.js';

import { useArtId } from '../../api/crudApi.js';

import Spinner from '../spinner/Spinner.jsx';

export default function Details() {
  const { _id } = useUserContext();

  const { artId } = useParams();
  console.log(artId)

  const { art, loading } = useArtId(artId);
  console.log(art)

  const isOwner = _id === art._ownerId;

  return (
    <section className="relative flex max-w-[25em] min-h-[12em] flex-1 flex-col shadow-card-slot rounded-2xl justify-center my-20 p-4">
      {loading
        ?
        <Spinner />
        :
        <>
          <h1 className="text-center text-3xl font-semibold text-gradient-l my-4">
            {art.title}
          </h1>

          <div>
            <img src={art.imageUrl} alt={art.title} className="rounded-xl" />

            <section className={`flex justify-${isOwner ? 'between' : 'center'} my-4 px-4`}>
              {isOwner &&
                <div className="icon-wrapper-style">
                  <PencilIcon className="icon-style" />
                </div>
              }

              {!isOwner &&
                <div className="icon-wrapper-style">
                  <HeartOutline className="icon-style" />
                </div>
              }

              {isOwner &&
                <div className="icon-wrapper-style">
                  <TrashIcon className="icon-style" />
                </div>
              }
            </section>

            <section className="flex flex-col gap-4 mt-20">
              <p className="text-stone-700">
                Art creator: <span className="text-stone-400 font-semibold">{art.creator}</span>
              </p>

              <p className="text-stone-700">
                Creator email: {art.check
                  ?
                  <span className="text-stone-400 font-semibold">{art.email}</span>
                  :
                  <span className="text-stone-600">N/A</span>
                }
              </p>
            </section>
          </div>
        </>
      }
    </section>
  );
}

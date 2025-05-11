import { Link, useNavigate, useParams } from 'react-router';

import { HeartIcon as HeartOutline, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
// import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

import useUserContext from '../../hooks/useUserContext.js';

import { useArtId } from '../../api/crudApi.js';

import Spinner from '../spinner/Spinner.jsx';

export default function Details() {
  const { artId } = useParams();
  console.log(artId)

  const navigate = useNavigate();

  const { art, loading } = useArtId(artId);
  console.log(art)

  const { _id, accessToken } = useUserContext();

  const isOwner = _id === art._ownerId;

  const likeHandler = () => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    console.log(accessToken)
  }

  return (
    <section className="relative section-wrapper min-h-[12em] p-4">
      {loading
        ?
        <Spinner />
        :
        <>
          <h1 className="text-center text-3xl font-semibold text-gradient-l my-4 word-wrap">
            {art.title}
          </h1>

          <div>
            <img src={art.imageUrl} alt={art.title} className="rounded-xl" />

            <section className={`flex ${isOwner ? 'justify-between' : 'justify-center'} my-4`}>
              {isOwner &&
                <Link to="#" className="icon-wrapper-style">
                  <PencilIcon className="icon-style" />
                </Link>
              }

              {!isOwner &&
                <button className="icon-wrapper-style" onClick={likeHandler}>
                  <HeartOutline className="icon-style" />
                </button>
              }

              {isOwner &&
                <button className="icon-wrapper-style">
                  <TrashIcon className="icon-style" />
                </button>
              }
            </section>

            <section className="flex flex-col gap-4 mt-20">
              <p className="text-stone-700">
                Artist: <span className="text-stone-400 font-bold word-wrap">{art.creator}</span>
              </p>

              {art.check
                ?
                <p className="text-stone-700">
                  Artist&rsquo;s email: <span className="text-stone-400">{art.email}</span>
                </p>
                :
                null
              }

              {art.description
                ?
                <p className="text-stone-600 mt-8">{`"${art.description}"`}</p>
                :
                null
              }

              <p className="text-stone-700 text-center mt-4">
                Likes &#x2771; <span className="text-stone-400">0</span> &#x2770; count
              </p>
            </section>
          </div>
        </>
      }
    </section>
  );
}

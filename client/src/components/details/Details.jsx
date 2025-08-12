import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

import { HeartIcon as HeartOutline, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

import Spinner from '../spinner/Spinner.jsx';
import ConfirmAction from '../modals/ConfirmAction.jsx';
import ServiceErrorMsg from '../service-error-msg/ServiceErrorMsg.jsx';

import { useArt, useDelete } from '../../api/crudApi.js';
import { useLike } from '../../api/likeApi.js';
import useToggleLike from '../../hooks/useToggleLike.js';
import useUserContext from '../../hooks/useUserContext.js';

export default function Details() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { _id } = useUserContext();
  const { artId } = useParams();

  const { art, loading, noFetch } = useArt(artId);
  const { artLike } = useLike(_id, artId);
  const { heart, setHeart, inProcess, likeCount, toggleHandler } = useToggleLike(artId);

  const { del } = useDelete();

  const isOwner = _id === art._ownerId;

  useEffect(() => {
    if (!artLike.length) {
      return;
    }

    setHeart(artLike[0]._id)
  }, [artLike, setHeart]);

  const deleteHandler = async () => {
    try {
      await del(artId);

      setOpen(false);

      navigate('/profile');
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <section className="relative section-wrapper min-h-[12em] p-4">
      <ConfirmAction
        name={art.title}
        state={open}
        change={setOpen}
        onDelete={deleteHandler}
      />

      {loading && <Spinner />}

      {!loading && !noFetch &&
        <>
          <h1 className="text-3xl text-center font-semibold text-gradient-l word-wrap my-4">
            {art.title}
          </h1>

          <div className="flex flex-col">
            <img src={art.imageUrl} alt={art.title} className="rounded-xl" />

            <section className={`flex ${isOwner ? 'justify-between' : 'justify-center'} my-4`}>
              {isOwner &&
                <Link to={`/edit/${artId}`} className="icon-wrapper-style">
                  <PencilIcon className="icon-style" />
                </Link>
              }

              {!isOwner &&
                <button className="icon-wrapper-style" onClick={toggleHandler} disabled={inProcess}>
                  {heart
                    ?
                    <HeartSolid className="icon-style" />
                    :
                    <HeartOutline className="icon-style" />
                  }
                </button>
              }

              {isOwner &&
                <button className="icon-wrapper-style" onClick={() => setOpen(true)}>
                  <TrashIcon className="icon-style" />
                </button>
              }
            </section>

            <section className="flex flex-col mt-20 gap-4">
              <p className="text-stone-700">
                Artist: <span className="text-stone-400 font-bold word-wrap">{art.creator}</span>
              </p>

              {art.check &&
                <p className="text-stone-700">
                  Artist&rsquo;s email: <span className="text-stone-400 word-wrap">{art.email}</span>
                </p>
              }

              {art.depiction &&
                <p className="text-stone-600 word-wrap mt-8">&#x275E; {art.depiction} &#x275E;</p>
              }

              <div className="flex-c-col mt-4">
                <p className="text-stone-700">Likes</p>

                <p className="text-stone-700">
                  &#x2770; <span className="text-stone-400">{likeCount}</span> &#x2771;
                </p>
              </div>
            </section>
          </div>
        </>
      }

      {!loading && noFetch &&
        <ServiceErrorMsg
          message={noFetch}
        />
      }
    </section>
  );
}

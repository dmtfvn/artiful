import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

import { HeartIcon as HeartOutline, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

import Spinner from '../spinner/Spinner.jsx';
import ConfirmAction from '../modals/ConfirmAction.jsx';

import { useArtId, useDelete } from '../../api/crudApi.js';
import { useAddLike, useArtLikeId, useRemoveLike } from '../../api/likeApi.js';
import useUserContext from '../../hooks/useUserContext.js';

export default function Details() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [heart, setHeart] = useState('');
  const [inProcess, setInProcess] = useState(false);

  const { _id, accessToken } = useUserContext();
  const { artId } = useParams();

  const { art, loading } = useArtId(artId);
  const { like } = useAddLike();
  const { unlike } = useRemoveLike();
  const { artLike } = useArtLikeId(_id, artId);

  const { del } = useDelete();

  const isOwner = _id === art._ownerId;

  useEffect(() => {
    if (!artLike.length) {
      return;
    }

    setHeart(artLike[0]._id)
  }, [artLike]);

  const addLikeHandler = async () => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    setInProcess(true);

    try {
      const res = await like({ artId });
      setHeart(res._id);
    } catch (err) {
      console.log(err.message)
    } finally {
      setInProcess(false);
    }
  }

  const removeLikeHandler = async () => {
    setInProcess(true);

    try {
      await unlike(heart);
      setHeart('');
    } catch (err) {
      console.log(err.message)
    } finally {
      setInProcess(false);
    }
  }

  const toggleHandler = () => {
    if (inProcess) {
      return;
    }

    if (heart) {
      removeLikeHandler();
    } else {
      addLikeHandler();
    }
  }

  const deleteHandler = async () => {
    await del(artId);

    setOpen(false);

    navigate('/profile');
  }

  return (
    <section className="relative section-wrapper min-h-[12em] p-4">
      <ConfirmAction
        name={art.title}
        state={open}
        change={setOpen}
        onDelete={deleteHandler}
      />

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

            <section className="flex flex-col gap-4 mt-20">
              <p className="text-stone-700">
                Artist: <span className="text-stone-400 font-bold word-wrap">{art.creator}</span>
              </p>

              {art.check &&
                <p className="text-stone-700">
                  Artist&rsquo;s email: <span className="text-stone-400">{art.email}</span>
                </p>
              }

              {art.depiction &&
                <p className="text-stone-600 mt-8">&#x275E; {art.depiction} &#x275E;</p>
              }

              <div className="flex flex-col items-center mt-4">
                <p className="text-stone-700">Likes</p>

                <p className="text-stone-700">
                  &#x2770; <span className="text-stone-400">0</span> &#x2771;
                </p>
              </div>
            </section>
          </div>
        </>
      }
    </section>
  );
}

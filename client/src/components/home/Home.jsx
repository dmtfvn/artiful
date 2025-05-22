import SimpleCard from '../cards/SimpleCard.jsx';

import Spinner from '../spinner/Spinner.jsx';
import EmptySpaceMsg from '../empty-space-msg/EmptySpaceMsg.jsx';

import { useLatest, useMostLiked } from '../../api/extraApi.js';

export default function Home() {
  const { latest, loading } = useLatest();
  const { mostLiked, processing } = useMostLiked();

  return (
    <section className="flex flex-col items-center max-w-[43em] w-full">
      <div className="flex-center flex-col max-w-[40em] w-full mt-20 px-5">
        <p className="text-4xl text-gradient-l text-center font-light">
          Eager to show your art, but wonder where to put it?
        </p>

        <p className="text-[1em] text-[var(--color-gy-ish)] my-5">&#x2919; &#x291A;</p>

        <h1 className="text-5xl text-center text-gradient-r font-semibold">
          This is the place.
        </h1>

        <p className="text-[2em] text-[var(--color-gy-ish)] my-5">&#x2193;</p>
      </div>

      <div className="w-full my-20">
        <p className="text-center text-2xl text-black/60 font-bold txt-shadow">
          Most liked
        </p>

        <section className="flex justify-center">
          <div className="relative flex-center max-w-[14em] w-full min-h-[19em] shadow-card-slot rounded-2xl px-4">
            {processing &&
              <Spinner />
            }

            {!processing && mostLiked[0]?._likes.length > 0 &&
              <SimpleCard {...mostLiked[0]} />
            }

            {!processing && !mostLiked[0]?._likes.length &&
              < EmptySpaceMsg
                message="For the art with the most likes"
              />
            }
          </div>
        </section>

        <p className="text-center text-2xl text-black/60 font-bold txt-shadow mt-20">
          Latest additions
        </p>

        <section className="flex justify-center">
          <div className="relative flex items-center justify-evenly flex-wrap w-full min-h-[19em] shadow-card-slot rounded-2xl p-4 gap-10">
            {loading &&
              <Spinner />
            }

            {latest.map(a => (
              <SimpleCard
                key={a._id}
                {...a}
              />
            ))}

            {!loading && !latest.length &&
              <EmptySpaceMsg
                message="The latest three additions will show up here"
              />
            }
          </div>
        </section>
      </div>
    </section>
  );
}

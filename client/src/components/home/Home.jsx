import SimpleCard from '../cards/SimpleCard.jsx';

import { useLatest } from '../../api/crudApi.js';

import Spinner from '../spinner/Spinner.jsx';
import EmptySpaceMsg from '../empty-space-msg/EmptySpaceMsg.jsx';

export default function Home() {
  const { latest, loading } = useLatest();

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

      <div className="w-full py-10 divide-y divide-black">
        <section className="flex justify-center py-10">
          <div className="relative flex-center max-w-[14em] w-full min-h-[19em] shadow-card-slot rounded-2xl px-4">
            {/* <SimpleCard image="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/13/64827.jpg" /> */}
            <EmptySpaceMsg
              message="For the one with most likes"
            />
          </div>
        </section>

        <section className="flex justify-center py-10">
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

            {!loading && !latest.length
              ?
              <EmptySpaceMsg
                message="Latest three additions will show up here"
              />
              :
              null
            }
          </div>
        </section>
      </div>
    </section>
  );
}

import SimpleCard from '../cards/SimpleCard.jsx';

export default function Home() {
  return (
    <section className="flex-center flex-col max-w-full">
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

      <div className="max-w-[55em] w-full py-10 divide-y divide-black">
        <section className="flex justify-center py-10">
          <div className="flex-center max-w-[14em] w-full min-h-[19em] shadow-card-slot rounded-2xl px-4">
            <SimpleCard image="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/13/64827.jpg" />
          </div>
        </section>

        <section className="flex justify-center py-10">
          <div className="flex items-center justify-evenly flex-wrap max-w-[44.5em] w-full min-h-[19em] shadow-card-slot rounded-2xl p-4 gap-13">
            <SimpleCard image="https://wallpaperaccess.com/full/1490234.jpg" />

            <SimpleCard image="https://palmettowebdesign.com/wp-content/uploads/2015/08/White-Space.jpg" />

            <SimpleCard image="https://i.pinimg.com/736x/c1/2c/a7/c12ca701ca2fc38111f374336af00b7d.jpg" />
          </div>
        </section>
      </div>
    </section>
  );
}

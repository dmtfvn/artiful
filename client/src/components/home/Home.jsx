import SimpleCard from '../cards/SimpleCard.jsx';

export default function Home() {
  return (
    <section className="flex-center flex-col max-w-full">
      <div className="max-w-[35em] w-full">
        <h1 className="text-4xl text-center text-stone-400 mt-15">
          Eager to show your art?
        </h1>

        <p className="text-4xl text-center text-stone-400 mt-15">
          Wonder where to put it?
        </p>

        <p className="text-4xl text-center text-stone-400 mt-15">
          This is the place.
        </p>
      </div>

      <div className="max-w-[55em] w-full py-10 divide-y divide-black">
        <section className="flex justify-center py-10">
          <div className="flex-center max-w-[14em] w-full min-h-[19em] shadow-card-slot rounded-2xl px-4">
            <SimpleCard image="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/13/64827.jpg" />
          </div>
        </section>

        <section className="flex justify-center py-10">
          <div className="flex items-center justify-evenly flex-wrap max-w-[43em] w-full min-h-[19em] shadow-card-slot rounded-2xl p-4 gap-10">
            <SimpleCard image="https://wallpaperaccess.com/full/1490234.jpg" />

            <SimpleCard image="https://usabilitygeek.com/wp-content/uploads/2018/07/white-space-improve-usability-web-designs-lead.jpg" />

            <SimpleCard image="https://i.pinimg.com/736x/c1/2c/a7/c12ca701ca2fc38111f374336af00b7d.jpg" />
          </div>
        </section>
      </div>
    </section>
  );
}

import HomeCard from '../cards/HomeCard.jsx';

export default function Home() {
  return (
    <div className="flex-center flex-wrap max-w-[55em] w-full gap-5 justify-around overflow-hidden py-10">
      <HomeCard image="https://wallpaperaccess.com/full/1490234.jpg" />

      <HomeCard image="https://usabilitygeek.com/wp-content/uploads/2018/07/white-space-improve-usability-web-designs-lead.jpg" />

      <HomeCard image="https://i.pinimg.com/736x/c1/2c/a7/c12ca701ca2fc38111f374336af00b7d.jpg" />
    </div>
  );
}

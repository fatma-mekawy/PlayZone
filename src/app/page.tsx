import Image from "next/image";

export default function Hero() {
  return (
  <section className="relative w-3/4 mx-auto h-155 rounded-lg overflow-hidden">
  <img
    src="/home.png"
    alt="Sports Court"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">

    <div className="w-full md:w-1/2">
      <h1 className="text-3xl font-bold mb-4 text-[#237cbd]">
        Book Your Favorite Sports Court Anytime
      </h1>

      <p className="text-white">
        Discover premium football, padel, basketball, and tennis courts near
        you. Fast booking, flexible schedules, and the best playing experience
        all in one place.
      </p>

      <button className="bg-[#237cbd] text-white py-2 px-4 rounded mt-4">
        Explore Courts
      </button>
    </div>

  </div>
</section>
  );
}
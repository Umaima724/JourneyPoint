import Button from "./Button";

function Hero() {
  return (
    <section className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Explore the World with JourneyPoint
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Discover breathtaking destinations, unforgettable adventures,
            and customized travel experiences designed just for you.
          </p>

          <div className="mt-8">
            <Button text="Explore Tours" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
            className="rounded-xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
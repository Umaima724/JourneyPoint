import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import TourCard from "../components/TourCard";

import tours from "../data/tours";

function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Popular Tours"
            subtitle="Choose from our most popular travel destinations around the world."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {tours.map((tour) => (
              <TourCard
                key={tour.id}
                image={tour.image}
                title={tour.title}
                location={tour.location}
                duration={tour.duration}
                price={tour.price}
              />
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;
import SectionTitle from "../components/SectionTitle";
import TourCard from "../components/TourCard";
import tours from "../data/tours";

function Tours() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Our Tours"
          subtitle="Explore all of our exciting travel packages."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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
  );
}

export default Tours;
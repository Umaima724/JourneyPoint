import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <SectionTitle
        title="About JourneyPoint"
        subtitle="Creating unforgettable travel experiences for every explorer."
      />

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="About JourneyPoint"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h3 className="text-3xl font-bold mb-4">
            Your Trusted Travel Partner
          </h3>

          <p className="text-gray-600 mb-4">
            JourneyPoint helps travelers discover amazing destinations,
            plan exciting adventures, and create lifelong memories.
          </p>

          <p className="text-gray-600">
            Whether you're looking for mountain escapes, beach vacations,
            or cultural experiences, we have something for everyone.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
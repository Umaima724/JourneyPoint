import SectionTitle from "../components/SectionTitle";
import GalleryCard from "../components/GalleryCard";
import gallery from "../data/gallery";

function Gallery() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Travel Gallery"
          subtitle="Take a look at some of our favorite travel destinations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;
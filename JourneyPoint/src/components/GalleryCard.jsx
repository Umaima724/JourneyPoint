function GalleryCard({ image, title }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover hover:scale-110 transition duration-500"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-center">
          {title}
        </h3>
      </div>

    </div>
  );
}

export default GalleryCard;
function TourCard({
  image,
  title,
  location,
  duration,
  price,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>

        <p className="text-gray-500">
          🕒 {duration}
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="text-blue-600 text-xl font-bold">
            ${price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
}

export default TourCard;
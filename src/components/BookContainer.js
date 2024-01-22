import logo from "../utils/doctor-stethoscope.jpg";

const BookContainer = ({ setToggleBookForm }) => {
  const handleBook = () => {
    console.log("clicked");
    setToggleBookForm(true);
  };
  return (
    <>
      {/* Booking Form  */}
      <div className="absolute z-20">
        <div className="bg-gradient-to-r from-white via-purple-200 to-green-300 bg-clip-text text-transparent font-bold text-4xl my-2 mx-2">
          One Step Closer to a Pain-Free Existence.
        </div>
        <div className="text-white text-lg font-medium p-1 mt-96 mx-2">
          A Journey Towards a Pain-Free Tomorrow
        </div>
        <button
          className=" bg-green-400 px-32 py-3 mt-3 mx-2 rounded-lg text-white justify-center font-semibold text-lg border-2 border-green-700 "
          onClick={handleBook}
        >
          Book Now
        </button>
      </div>
      <img
        className="w-full h-[620px] absolute dark:shadow-md dark:shadow-blue-500"
        src={logo}
        alt="doctor-img"
      />
    </>
  );
};
export default BookContainer;

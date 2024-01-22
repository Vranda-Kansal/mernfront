import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = ({ setToggleBookForm, setToggleMode, toggleMode }) => {
  const handleToggle = () => {
    setToggleMode(!toggleMode);
  };
  return (
    <div className="flex p-4 pt-5  h-20 justify-between relative items-center">
      <img
        className="w-32 items-center ml-48 mt-3"
        src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
        alt="logo"
      />
      <div className="flex w-1/3 justify-around mr-28 items-center">
        <button className="font-bold text-gray-800 dark:text-blue-600">
          Home
        </button>
        <AnchorLink href="#specialist">
          <button className="font-bold text-gray-800 dark:text-blue-600">
            Specialisties
          </button>
        </AnchorLink>
        <AnchorLink href="#testimonials">
          <button className="font-bold text-gray-800 dark:text-blue-600">
            Testimonials
          </button>
        </AnchorLink>
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-2 rounded-lg bg-blue-400 text-white items-center h-8"
          onClick={() => setToggleBookForm(true)}
        >
          <span className="font-semibold text-white">Book Now</span>
        </button>
        <button
          className="w-10 h-10 bottom-10 right-10 p-1 border-2 border-black bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={handleToggle}
        >
          {toggleMode ? "LHT" : "DRK"}
        </button>
      </div>
    </div>
  );
};
export default Header;

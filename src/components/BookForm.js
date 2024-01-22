import leftImage from "../utils/doctor-img.jpg";
import { SUPPORTED_LANGAUGES, checkValidation } from "../utils/constants";
import { useEffect, useState } from "react";
import { getDoctorList } from "../services/api";
import Doctor from "./Doctor";

const BookForm = ({ setToggleBookForm }) => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [filteredData, setfilteredData] = useState([]);
  const [name, setName] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [age, setAge] = useState(40);
  const [company, setCompany] = useState("");
  const [Complaint, setComplaint] = useState("");
  const [exiperence, setExperience] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessfullyBooked, setSuccessfullBooked] = useState("");

  const fetchDoctor = async () => {
    const data = await getDoctorList(selectedCity);
    // console.log(data);
    setfilteredData(data);
  };

  useEffect(() => {
    fetchDoctor();
  }, [selectedCity]);

  const handleChangeCity = async (e) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  };

  const handleValidation = () => {
    const error = checkValidation(
      name,
      age,
      phoneno,
      company,
      Complaint,
      exiperence
    );
    // console.log(error);
    setErrorMessage(error);
    // console.log(errorMessage);
    if (error) return;
    setSuccessfullBooked("Successfully Booked");
    setName("");
    setAge("");
    setPhoneNo("");
    setCompany("");
    setComplaint("");
    setExperience("");
    setErrorMessage("");
    // Todo
    setToggleBookForm(false);
  };

  return (
    <div className="flex bg-white mx-48 h-full rounded-xl dark:bg-neutral-900">
      <div className="w-1/2 shadow-2xl shadow-black">
        <img
          className="w-full h-full rounded-l-xl shadow-2xl shadow-black"
          src={leftImage}
          alt="side conatiner"
        />
      </div>
      <div className="flex flex-col w-1/2 rounded-2xl overflow-y-scroll shadow-black shadow-r-2xl ">
        <div className=" text-center bg-gradient-to-r from-blue-500 via-green-800 to-purple-900 bg-clip-text text-transparent font-bold text-4xl w-full p-4 ">
          Book an Appointment
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-wrap mx-6 p-4"
        >
          {errorMessage && (
            <div className="text-red-500 font-semibold text-lg text-center py-1  w-full">
              {errorMessage}
            </div>
          )}
          {SuccessfullyBooked && (
            <div className="text-green-600 font-semibold text-lg text-center py-1  w-full">
              Successfully Booked
            </div>
          )}
          <span className="flex flex-col mx-1">
            <label className="font-semibold dark:text-white">Name</label>
            <input
              type="name"
              placeholder="Your Name"
              className="px-4 py-2 my-2 bg-slate-600 border-4 border-purple-500 rounded placeholder-white outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span className="flex flex-col mx-1">
            <label className="font-semibold dark:text-white">Phone No</label>
            <input
              type="text"
              placeholder="Phone No"
              className="px-4 py-2 my-2  bg-slate-600 border-4 border-purple-500 rounded placeholder-white outline-none"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </span>
          <span className="flex flex-col mx-1">
            <label className="font-semibold dark:text-white">Age</label>
            <input
              type="text"
              placeholder="Your Age"
              className="px-4 py-2 my-2  bg-slate-600 border-4 border-purple-500 rounded placeholder-white outline-none"
              onChange={(e) => setAge(e.target.value)}
            />
          </span>
          <span className="flex flex-col mx-1">
            <label className="font-semibold dark:text-white">City</label>
            <select
              className="px-14 py-2 my-2  bg-slate-600 border-4 border-purple-500 rounded placeholder-white outline-none"
              onChange={handleChangeCity}
            >
              {SUPPORTED_LANGAUGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          </span>
          <span className="flex flex-col mx-2">
            <label className="font-semibold dark:text-white">Company</label>
            <input
              type="text"
              placeholder="Your Company"
              className="px-4 py-2 my-2  bg-slate-600 border-4 border-purple-500 rounded placeholder-white outline-none"
              onChange={(e) => setCompany(e.target.value)}
            />
          </span>
          <span className="flex flex-col mx-1">
            <label className="font-semibold dark:text-white">Complaint</label>
            <input
              type="text"
              placeholder="Your Complaint"
              className="px-4 py-2 my-2  bg-slate-600 border-4 border-purple-500 rounded placeholder-white outline-none"
              onChange={(e) => setComplaint(e.target.value)}
            />
          </span>
          {Number(age) >= 40 && (
            <div className="flex flex-col mx-1">
              <label className="font-semibold dark:text-white">
                Prior Experience
              </label>
              <input
                type="text"
                placeholder="Your Experience"
                className="px-4 py-2 mt-2  bg-slate-600 border-4 border-purple-500 rounded placeholder-white outline-none"
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          )}
        </form>
        <div className="flex flex-col justify-center items-center">
          {selectedCity && filteredData?.length > 0 ? (
            filteredData?.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <div className="text-red-500 font-semibold dark:text-white">
              Sorry Cuurently No doctor of {selectedCity} available!
            </div>
          )}
        </div>
        <div className="flex w-1/2 m-auto">
          <button
            className="w-full py-2 my-5 justify-center items-center text-sky-700 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            onClick={handleValidation}
          >
            <span className="font-semibold ">Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookForm;

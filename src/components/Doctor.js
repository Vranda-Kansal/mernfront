const Doctor = ({ doctor }) => {
  return (
    <div className="flex flex-wrap w-1/2 bg-pink-100 rounded-xl shadow-lg p-2 m-2 dark:shadow-md dark:shadow-green-300">
      <div className="w-full">
        <span className="font-semibold text-sm p-1">Dr. {doctor.name}-</span>
        <span className="font-semibold text-sm text-red-400">
          {doctor.city}
        </span>
      </div>
      <div className="text-md w-full p-1">
        <span className="text-red-400">Expertise:</span>
        <span className="text-black">{doctor.expertise}</span>
      </div>
    </div>
  );
};
export default Doctor;

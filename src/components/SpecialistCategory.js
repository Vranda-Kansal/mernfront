const SpecialistCategory = ({ url, title, desc }) => {
  return (
    <div className="flex flex-col justify-center m-4 p-2">
      <div>
        <img className="w-52 h-52 rounded-full mr-6" src={url} alt="Category" />
      </div>
      <div>
        <div className="font-bold text-xl text-center dark:text-blue-600">
          {title}
        </div>
        <div className="font-medium text-center text-wrap dark:text-white">
          {desc}
        </div>
      </div>
    </div>
  );
};
export default SpecialistCategory;

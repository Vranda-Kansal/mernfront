import { useState } from "react";
import { categories } from "../utils/constants";
import SpecialistCategory from "./SpecialistCategory";

const Specialists = () => {
  const [startIndx, setstartIndx] = useState(1);
  // console.log(1 * 3 - 3);
  let pageNo = startIndx;

  const handleNextClick = () => {
    pageNo++;
    if (pageNo > 3) setstartIndx(1);
    else setstartIndx(pageNo);
  };

  const handlePrevClick = () => {
    pageNo--;
    if (pageNo <= 1) {
      setstartIndx(3);
    } else {
      setstartIndx(pageNo);
    }
  };

  return (
    <div id="specialist" className="flex flex-col items-center ">
      <div className="p-2">
        <div className="font-bold text-5xl text-blue-500 p-2 dark:text-blue-600">
          30+ Specialities
        </div>
        <div className="font-medium text-lg p-2 dark:text-white">
          Consult with top doctors across specialities
        </div>
      </div>
      <div className="flex justify-center m-4">
        <div className="m-auto">
          <button
            className="px-2 py-1 font-bold rounded-full bg-blue-300 text-white "
            onClick={handlePrevClick}
          >
            {"<"}
          </button>
        </div>
        {categories?.slice(startIndx * 3 - 3, startIndx * 3).map((category) => (
          <SpecialistCategory
            key={category.id}
            url={category.image}
            title={category.title}
            desc={category.desc}
          />
        ))}
        <div className="m-auto">
          <button
            className="px-2 py-1 font-bold rounded-full bg-blue-300 text-white"
            onClick={handleNextClick}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Specialists;

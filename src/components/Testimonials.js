import { useState } from "react";
import { PeopleReviews } from "../utils/constants";
import Review from "./Review";

const Testimonials = () => {
  const [startIndx, setstartIndx] = useState(1);
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
    <div
      id="testimonials"
      className="flex flex-col items-center mt-1 dark:bg-neutral-900"
    >
      <div className="p-2">
        <div className="font-bold text-5xl text-blue-500 p-2 dark:text-blue-600">
          Testimonials
        </div>
        <div className="font-medium text-lg p-2 mx-3 dark:text-white">
          Don't just take our word for it
        </div>
      </div>
      <div className="flex w-10/12 justify-around border-1  border-sky-100 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] p-3 m-3 rounded-full">
        <span>
          <div className="text-blue-600 text-3xl font-bold">2000+</div>
          <div className="font-semibold text-xl dark:text-white">Patients</div>
        </span>
        <span>
          <div className="text-blue-600 text-3xl font-bold">1 Lakh+</div>
          <div className="font-semibold text-xl dark:text-white">Sessions</div>
        </span>
        <span>
          <div className="text-blue-600 text-3xl font-bold">9.6/10</div>
          <div className="font-semibold text-xl dark:text-white">
            Avg. Ratings
          </div>
        </span>
      </div>
      <div className="flex justify-center mx-28 my-4">
        <div className="m-auto">
          <button
            className="px-2 py-1 font-bold rounded-full bg-blue-300 text-white"
            onClick={handlePrevClick}
          >
            {"<"}
          </button>
        </div>
        {PeopleReviews?.slice(startIndx * 3 - 3, startIndx * 3).map(
          (review) => (
            <Review key={review.id} review={review} />
          )
        )}
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
export default Testimonials;

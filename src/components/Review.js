const Review = ({ review }) => {
  return (
    <div className="flex flex-col justify-center m-2 p-2 items-center bg-pink-200 rounded-xl dark:shadow-md dark:shadow-blue-500">
      <div className="text-black font-bold text-lg p-2 text-center dark:text-blue-600">
        {review.name}
      </div>
      <div className="text-gray-500 text-md p-2 text-center">
        {review.review}
      </div>
    </div>
  );
};
export default Review;

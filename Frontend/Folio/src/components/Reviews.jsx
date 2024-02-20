import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const Reviews = ({ slug, reviews }) => {
  const [newReview, setNewReview] = useState("");
  const [updatedReviews, setUpdatedReviews] = useState(reviews);

  const handleReviewSubmit = async () => {
    try {
      const bookId = slug;
      console.log(bookId, newReview);
      await axios.post(
        `http://65.0.168.34/review/createReview/${bookId}/${newReview}`
      );``
      window.location.reload();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div>
      <div className="text-text">
        <div className="pb-2">
          <div className="text-3xl">Reviews</div>
        </div>

        {updatedReviews.map((review) => (
          <div key={review._id} className="border-b py-4 px-20">
            {review.review}
          </div>
        ))}
      </div>
      <div className="py-10 container mx-auto">
        <label
          htmlFor="message"
          className="pb-10 font-medium text-text self-center text-3xl"
        >
          Write A Review
        </label>
        <textarea
          id="message"
          rows="4"
          className="mt-5 p-5 w-full text-sm text-text bg-inputfeild rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <button
          className="px-10 py-3 mt-10 self-center bg-primary rounded-xl"
          onClick={handleReviewSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  slug: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
};

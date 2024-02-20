import review from "/images/review.png";
import personalize from "/images/personalization.png";
export const PageInfo = () => {
  return (
    <div>
      <div className=" p-20 mt-16 font-Poppins text-text">
        <div className=" grid grid-cols-2">
          <div className=" col-span-1">
            <img src={personalize} alt="Personlize.png" className=" w-10/12" />
          </div>
          <div className=" col-span-1 text-5xl font-semibold self-center">
            <div>
              Have{" "}
              <span className="bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent">
                Personalized
              </span>{" "}
              Recommendations For Books
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3 p-16 py-28     text-xl">
          <div className=" col-span-1 text-center">
            Smart Recommendations <br />
            For Smart You
          </div>
          <div className=" col-span-1 text-center">
            Tell How you Feel to AI Add <br />
            Discover a World of Literary Wonders
          </div>
          <div className=" col-span-1 text-center">
            Honest reviews <br />
            From Reader All Around
          </div>
        </div>
        <div className=" grid grid-cols-2 text-5xl font-semibold">
          <div className=" col-span-1 self-center">
            Get <span className=" text-accent">Review</span> Any <br />
            Book You Like
          </div>
          <div className=" col-span-1">
            <img src={review} alt="" className=" w-2/3" />
          </div>
        </div>
        <div className="grid grid-cols-1 text-5xl font-semibold">
          <div></div>
        </div>
      </div>
    </div>
  );
};

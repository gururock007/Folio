import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import heart_outline from "/images/heart-outline.png";
import heart_outline_white from "/images/heart-outline-white.png";
import heart from "/images/heart.png";
import noimage from "/images/no-image.jpg";

export const BookInfo = ({ book }) => {
  const [liked, setLiked] = useState(false);
  const changeLikeHandle = () => {
    setLiked((prevVal) => !prevVal);
  };
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-8">
        <div className="col-span-3">
          <div className="text-5xl font-semibold">
            {book?.volumeInfo.title || "Title Placeholder"}
          </div>
        </div>
        <div className="col-span-2 self-center flex gap-2">
          <div className="flex">
            Ratings: {book?.rating || "Rating Placeholder"}
          </div>
          <div>Star: </div>
        </div>
        <div className="col-span-2 self-center flex gap-2">
          <div className="self-center w-10">
            <button onClick={changeLikeHandle}>
              {liked ? (
                <img src={heart} alt="Liked" />
              ) : isDark ? (
                <img src={heart_outline_white} alt="Like" />
              ) : (
                <img src={heart_outline} alt="Like" />
              )}
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <button className="bg-primary text-text p-3 rounded-lg">
            Add to List
          </button>
        </div>
      </div>
      <div className="ms-48 text-2xl">
        by{" "}
        {book?.volumeInfo.authors
          ? book?.volumeInfo.authors.join(", ")
          : "Unknown Author"}
      </div>
      <div className="grid grid-cols-3 p-20">
        <div className="col-span-1">
          <img src={book.volumeInfo.imageLinks?.thumbnail || noimage} />
        </div>
        <div className="col-span-2">
          <div className="pb-5 text-xl font-semibold">Description</div>
          {book?.volumeInfo.description || "Description Placeholder"}
        </div>
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  book: PropTypes.object.isRequired,
};

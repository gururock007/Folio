import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import noimage from "/images/no-image.jpg";
import { Link } from "react-router-dom";
export const DashBoardHome = () => {
  const [books, setBooks] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState("title");
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCriteriaChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Implement your search logic here based on searchCriteria and searchValue
    console.log(`Searching for ${searchCriteria}: ${searchValue}`);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://65.0.168.34/search/booksByGenre/love"
        );
        console.log(response.data);
        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div className="py-60 font-Poppins">
        <div className="px-60 self-center grid grid-cols-8">
          <div className="col-span-5 grid grid-cols-8 bg-inputfeild py-2 px-5 rounded-full">
            <div className="col-span-2">
              <select
                value={searchCriteria}
                onChange={handleCriteriaChange}
                className="w-full h-12 bg-white self-center rounded-3xl py-2 focus-within:outline-none text-text placeholder:px-10 text-center"
                style={{
                  background: "var(--inputfeild)",
                  color: "var(--text)",
                }}
              >
                <option value="title">Book Name</option>
                <option value="id">Book ID</option>
                <option value="author">Author</option>
                <option value="genre">Genre</option>
              </select>
            </div>
            <div className="col-span-4">
              <input
                type="text"
                placeholder={`Search by ${searchCriteria}`}
                value={searchValue}
                onChange={handleSearchChange}
                className="w-full h-12 bg-transparent focus-within:outline-none text-text placeholder:px-10 text-center"
              />
            </div>
            <div className="col-span-2 self-center bg-white py-2 text-center rounded-3xl">
              <button onClick={handleSearchSubmit}>Submit</button>
            </div>
          </div>
          <div className="col-span-1 text-text py-3 px-10 text-xl">or</div>
          <div className="col-span-2 self-center">
            <div className="text-text py-3 px-5 bg-primary text-center rounded-3xl">
              <a href="">try Out Our Chat</a>
            </div>
          </div>
        </div>
        <div className="py-52 px-24">
          <div className="text-text font-medium p-5">Most People Liked</div>
          <div className="flex overflow-x-scroll py-14">
            {books.map((book) => (
              <Link to={`/book/${book.id}`} key={book.id}>
                <BookCard
                  key={book.id}
                  title={book.volumeInfo.title}
                  author={
                    book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "Unknown Author"
                  }
                  liked={Math.floor(Math.random() * 100)} // Example: Random liked value
                  imageSrc={book.volumeInfo.imageLinks?.thumbnail || noimage} // Use default image URL if thumbnail not available
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

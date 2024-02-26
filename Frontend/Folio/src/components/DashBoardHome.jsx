import React, { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import noimage from "/images/no-image.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ListComponent } from "./ListComponent";

export const DashBoardHome = () => {
  const [result, setResult] = useState([]);
  const [recomm, setRecomm] = useState([]);
  const [recommBooks1, setRecommBooks1] = useState([]);
  const [recommBooks2, setRecommBooks2] = useState([]);
  const { currentUser } = useAuth();
  const [searchCriteria, setSearchCriteria] = useState("title");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCriteriaChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const response = await axios.get(
        `http://localhost/search/${searchCriteria}/${searchValue}`
      );
      console.log(response.data);
      setResult(response.data.items || []);
    } catch (error) {
      console.error("Error searching books:", error);
    }
    console.log(`Searching for ${searchCriteria}: ${searchValue}`);
  };

  useEffect(() => {
    const fetchRecomm = async () => {
      try {
        const response = await axios.get(
          `http://localhost/getuserpreference/${currentUser.email}`
        );
        console.log(response.data);
        setRecomm(response.data || []);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecomm();
  }, [currentUser.email]);

  useEffect(() => {
    const fetchRecommBooks = async () => {
      try {
        for (let preference in recomm) {
          const genre = recomm[preference].genre;
          const response = await axios.get(
            `http://localhost/search/booksByGenre/${genre}`
          );
          console.log(response.data);

          // Store recommendations separately based on preference
          if (preference === "preference1") {
            setRecommBooks1(response.data.items || []);
          } else if (preference === "preference2") {
            setRecommBooks2(response.data.items || []);
          }
        }
      } catch (error) {
        console.error("Error fetching recommendation books:", error);
      }
    };

    if (Object.keys(recomm).length > 0) {
      fetchRecommBooks();
    }
  }, [recomm]);

  return (
    <div>
      <div className="py-60 font-Poppins">
        <div className="px-60 self-center grid grid-cols-8">
          <div className="col-span-8 grid grid-cols-8 bg-inputfeild py-2 px-5 rounded-full">
            <div className="col-span-2">
              <select
                value={searchCriteria}
                onChange={handleCriteriaChange}
                className="w-full h-12 bg-white self-center rounded-3xl py-2 focus-within:outline-none text-text placeholder:px-10 text-center"
                style={{
                  background: "var(--secondary)",
                  color: "var(--text)",
                }}
              >
                <option value="title">Book Title</option>
                <option value="bookAuthor">Author</option>
                <option value="booksByGenre">Genre</option>
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
        </div>

        {result.length > 0 && (
          <div className="pt-52 px-24">
            <div className="text-text font-medium p-5">Search Results</div>
            <div className="flex overflow-x-scroll py-14">
              {result.map((resu) => (
                <Link to={`/book/${resu.id}`} key={resu.id}>
                  <BookCard
                    key={resu.id}
                    title={resu.volumeInfo.title}
                    author={
                      resu.volumeInfo.authors
                        ? resu.volumeInfo.authors.join(", ")
                        : "Unknown Author"
                    }
                    liked={Math.floor(Math.random() * 100)}
                    imageSrc={resu.volumeInfo.imageLinks?.thumbnail || noimage}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {recommBooks1.length > 0 && (
          <div className="pt-52 px-24">
            <div className="text-text font-medium p-5">Preferred Genre 1</div>
            <div className="flex overflow-x-scroll py-14">
              {recommBooks1.map((re) => (
                <Link to={`/book/${re.id}`} key={re.id}>
                  <BookCard
                    key={re.id}
                    title={re.volumeInfo.title}
                    author={
                      re.volumeInfo.authors
                        ? re.volumeInfo.authors.join(", ")
                        : "Unknown Author"
                    }
                    liked={Math.floor(Math.random() * 100)}
                    imageSrc={re.volumeInfo.imageLinks?.thumbnail || noimage}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {recommBooks2.length > 0 && (
          <div className="pt-52 px-24">
            <div className="text-text font-medium p-5">Preferred Genre 2 </div>
            <div className="flex overflow-x-scroll py-14">
              {recommBooks2.map((re) => (
                <Link to={`/book/${re.id}`} key={re.id}>
                  <BookCard
                    key={re.id}
                    title={re.volumeInfo.title}
                    author={
                      re.volumeInfo.authors
                        ? re.volumeInfo.authors.join(", ")
                        : "Unknown Author"
                    }
                    liked={Math.floor(Math.random() * 100)}
                    imageSrc={re.volumeInfo.imageLinks?.thumbnail || noimage}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

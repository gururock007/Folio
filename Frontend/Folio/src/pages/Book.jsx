import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookInfo } from "../components/BookInfo";
import { Reviews } from "../components/Reviews";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Book = () => {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookResponse = await axios.get(
          `http://65.0.168.34/search/bookById/${slug}`
        );
        setBook(bookResponse.data || {});
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await axios.get(
          `http://65.0.168.34/review/getReviews/${slug}`
        );
        setReviews(reviewsResponse.data || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchBook();
    fetchReviews();
  }, [slug]);

  return (
    <div className="font-Poppins text-text p-20">
      {book ? (
        <>
          <Header />
          <BookInfo book={book} />
          <Reviews slug={slug} reviews={reviews} />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <p>Loading...</p>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Book;

import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { SearchResult } from "../components/SearchResult.jsx";
const Result = ({ url, gener }) => {
  return (
    <div>
      <Header />
      <SearchResult url={url} gener={gener} />
      <Footer />
    </div>
  );
};
export default Result;
Result.propTypes = {
  url: PropTypes.string.isRequired,
  gener: PropTypes.string.isRequired,
};

import { ListComponent } from "./ListComponent";
import PropTypes from "prop-types";
export const SearchResult = ({ url, gener }) => {
  return (
    <div className=" text-text">
      <ListComponent url={url} gener={gener} />
    </div>
  );
};

SearchResult.propTypes = {
  url: PropTypes.string.isRequired,
  gener: PropTypes.string.isRequired,
};

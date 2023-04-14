import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as api from "../../api/fetchMovie";
import { StyledList } from "./StyledReviews";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const toNumberedId = Number(movieId);

  useEffect(() => {
    api.getReview(toNumberedId).then((data) => {
      const { results } = data;
      setReviews(results);
    });
  }, [toNumberedId]);

  return (
    <StyledList>
      {reviews &&
        reviews.map((elem) => (
          <li className="review-item" key={elem.id}>
            <h2 className="review-author">Author: {elem.author}</h2>
            <p className="review-descr">{elem.content}</p>
          </li>
        ))}
    </StyledList>
  );
};
Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;

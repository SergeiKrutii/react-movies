import styled from "styled-components";

export const StyledMovieDetails = styled.div`
  .movie-content {
    display: flex;
    align-items: center;
  }

  .movie-img {
    margin-right: 20px;
  }
  .movie-owerview {
    margin-bottom: 10px;
    max-width: 50%;
  }
  .movie-information {
    color: red;
  }

  .movie-paragraph {
    margin-bottom: 15px;
  }
  .movie-list {
    display: flex;
    list-style: none;
  }
  .movie-item {
    margin-right: 10px;
  }
  .additional-list {
    margin-left: 60px;
    list-style: none;
  }
  .additional {
    margin: 20px 0 5px 30px;
    font-size: larger;
    font-weight: 600;
  }
  .additional-link {
    text-decoration: none;
    font-size: larger;
  }
`;

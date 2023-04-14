import { useParams } from "react-router-dom";
import * as api from "../../api/fetchMovie";
import { useEffect, useState } from "react";
import { StyledList } from "./StyledCast";

const Cast = (props) => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const toNumberedId = Number(movieId);
    api.getActors(toNumberedId).then((data) => {
      const { cast } = data;
      setActors(cast);
    });
  }, [movieId]);

  return (
    <div>
      <StyledList>
        {actors &&
          actors.map((actor) => (
            <li className="actors-item" key={actor.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt="actorsPhoto"
              />
              <p className="actors-name">{actor.name}</p>
              <p className="actors-character">Character: {actor.character}</p>
            </li>
          ))}
      </StyledList>
    </div>
  );
};

export default Cast;

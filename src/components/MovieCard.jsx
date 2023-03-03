import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <p className="movie-title">{movie.title}</p>
      {showLink && (
        <Link to={`/movie/${movie.id}`}>
          Saiba mais <BiChevronRight size={24} />
        </Link>
      )}
    </div>
  );
};

export default MovieCard;

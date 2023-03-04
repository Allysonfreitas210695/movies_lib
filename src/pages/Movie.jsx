import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import moment from 'moment';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import "./Movie.css";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <div className="movie-info">
            
            <div className="info">
              <h3>
               Nome do filme: {movie.title}
              </h3>
            </div>

            <div className="info">
              <h3>
               Avaliação: <FaStar /> {movie.vote_average}
              </h3>
            </div>

            <div className="info">
              <h3>
                Data de lançamento: {moment(movie.release_date).format('DD/MM/YYYY')}
              </h3>
            </div>

            <div className="info">
              <h3>
                 Gênero: {movie.genres.length > 0 && movie.genres.map((g, index) => (<div key={index}> {g.name}  </div>))}
              </h3>
            </div>

            <div className="info description">
              <h3>
                Sinopse:
              </h3>
              <p>{movie.overview}</p>
            </div>
            
            <div>
            </div>            
            </div>
        </>
      )}
    </div>
  );
};

export default Movie;

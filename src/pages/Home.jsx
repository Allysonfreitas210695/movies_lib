import { useEffect, useState } from "react";
// import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  console.log(topMovies);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </div>
  );
  // return (
  //   <div className="container">
  //     <h2 className="title">Melhores filmes:</h2>
  //     <div className="movies-container">
  //       {topMovies.length > 0 &&
  //         topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
  //     </div>
  //   </div>
  // );
};

export default Home;

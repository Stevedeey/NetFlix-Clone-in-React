import React, { useEffect, useState } from "react";
import axios from "./axios"; //we now have axios in our app
import "./Row.css";



const imagesBaseURL = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

 

  return (
    <div className="row">
      <h2>{title}</h2>
      <h2>{/* {movies} */}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row_posterLarge"}`}
            src={`${imagesBaseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

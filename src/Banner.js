import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import  "./Banner.css"; 

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) //use a random index to randomly select an image
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n){
      return str?.length > n ? str.substr(0, n -1) + "..." : str; //truncates all text after the specified n, replace it with ...
  } 

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
           https://image.tmdb.org/t/p/original/${movie?.backdrop_path} 
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
          {/* Above, we are not sure of what an API would name wach movie, i
          it could be title, name, or original_name so the program conditionally pick one */}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  );
}

export default Banner;

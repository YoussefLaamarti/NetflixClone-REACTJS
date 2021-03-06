import React, { useEffect, useState } from "react";
import instance from "./utility/axios";
import requests from "../request";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[1]);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* TITLE*/}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__butttons">
          <button className="banner__buttons">Play</button>
          <button className="banner__buttons">My List</button>
        </div>
        <h1 className="banner__description"> {movie?.overview} </h1>
      </div>
    </header>
  );
}

export default Banner;

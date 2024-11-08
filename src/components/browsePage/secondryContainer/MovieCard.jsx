import React from "react";
import { IMG_CDN_POSTER_URL } from "../../../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMG_CDN_POSTER_URL + poster_path} alt="movie poster" />
    </div>
  );
};

export default MovieCard;

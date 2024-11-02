import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
          {/* <MovieCard poster_path={movies[0].poster_path} /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

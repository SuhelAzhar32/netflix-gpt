import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesListContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="pl-12 relative z-20 -mt-40">
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Horro"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default MoviesListContainer;

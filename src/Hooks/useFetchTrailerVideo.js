import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerMovie } from "../utils/slices/moviesSlice";

const useFetchTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store=>store.movies.trailerVideo)
  const fetchMovieVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const data = await response.json();
    const filterJson = data.results.filter((item) => item.type === "Trailer");
    const trailer = filterJson.length ? filterJson[0] : data.results[0];
    dispatch(addTrailerMovie(trailer));
  };

  useEffect(() => {
    !trailerVideo && fetchMovieVideo();
  }, []);
};

export default useFetchTrailerVideo;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/slices/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const data = await res.json();
      dispatch(addPopularMovies(data.results));
    } catch (error) {
      throw new Error(error);
    }
  };
};

export default usePopularMovies;

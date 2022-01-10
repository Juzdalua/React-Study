import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home(){
const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  },[]);
  /* promise <=> async/await
  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  }, []); */
  
  return (
    <div className={styles.container}>
      {loading ? <h1 className={styles.loader}>
          <span>Loading...</span></h1> : 
        <div className={styles.movies}>
          {movies.map( movie => 
           <Movie key={movie.id} movie={movie} />
          )}
        </div>}
    </div>  
  );
}

export default Home;
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie(props) {
    return (
        <div className={styles.movie}>
            <img src={props.movie.medium_cover_image} alt={props.movie.title} className={styles.movie__img} />
            <h2 className={styles.movie__title}><Link to={`/movie/${props.movie.id}`}>{props.movie.title}</Link></h2>
            <h3 className={styles.movie__year}>{props.movie.year}</h3>
            <p>{props.movie.summary.length > 235 ? `${props.movie.summary.slice(0, 235)}...` : props.movie.summary}</p>
            <ul className={styles.movie__genres}>
              {props.movie.genres.map( g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
};

export default Movie;
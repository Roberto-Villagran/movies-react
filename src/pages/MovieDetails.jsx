import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { GetMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // setIsLoading(true);
        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading) {
        return <Spinner />;
    }

    if (!movie) {
        return null;
    }

    const imageUrl = GetMovieImg(movie.poster_path, 500);
    
    return (
        <div className={styles.detailsContainer}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl}
                alt={movie.title}
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    {movie.title ? <strong>Title: </strong> : null}
                    {movie.title}
                </p>
                <p>
                    {movie.overview ? <strong>Description: </strong> : null}
                    {movie.overview}
                </p>
                <p>
                    {movie.genres.length > 0 ? <strong>Genres </strong> : null}
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
            </div>
        </div>
    );
}

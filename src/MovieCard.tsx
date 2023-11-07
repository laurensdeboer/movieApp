import "../inc/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://placehold.co/310x460"
          }
          alt={movie.Title}
        />
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <div className="movie-year">
          <p>{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

import { Link } from 'react-router-dom';
import movies from '../movies';

const BrowsePage = (props) => {
  const { search, handleSelectMovie } = props;

  const renderMovieTile = (movie) => {
    return (
      <Link to='/movieDetails' key={`${movie.name} Link`}>
        <img
          key={`${movie.name} image`}
          loading='lazy'
          alt={`${movie.name} poster`}
          src={movie.imagesrc}
          onClick={() => handleSelectMovie(movie)}
        />
      </Link>
    );
  };

  const filterMovies = (movie) => {
    if (!search.trim()) return true;

    return Object.entries(movie)
      .filter((keyValuePair) => !keyValuePair.includes('imagesrc'))
      .map((keyValuePair) => keyValuePair[1])
      .flat()
      .reduce((includesSearchParameter, value) => {
        return includesSearchParameter
          ? includesSearchParameter
          : value.toLowerCase().includes(search);
      }, false);
  };

  const sortMoviesAlphabetically = (movieA, movieB) => {
    return movieA.name.toLowerCase().replace('the', '').trim() >
      movieB.name.toLowerCase().replace('the', '').trim()
      ? 1
      : -1;
  };

  return (
    <div id='browsePage' className='browsePage'>
      {movies
        .filter(filterMovies)
        .sort(sortMoviesAlphabetically)
        .map(renderMovieTile)}
    </div>
  );
};

export default BrowsePage;

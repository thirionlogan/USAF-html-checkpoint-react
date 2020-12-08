import { Link, Redirect } from 'react-router-dom';
const MovieDetails = (props) => {
  const { movie } = props;
  if (!movie) return <Redirect to='/browse' />;
  return (
    <div id='movieDetailsPage' className='movieDetailsPage hide'>
      <Link to='/browse'>
        <button onClick={console.log()}>Back to results</button>
      </Link>
      <div id='movieDetails' className='movieDetails'>
        <img loading='lazy' alt={`${movie.name} poster`} src={movie.imagesrc} />
        <div>
          <h1>{movie.name}</h1>
          <h2>{`Released ${movie.released}`}</h2>
          <p>{`${movie.tags.join(', ')} | ${movie.cast.join(', ')}`}</p>
          <p>{movie.description}</p>
        </div>
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <label for='comment'>Leave a comment:</label>
        <br />
        <input type='text' name='comment' id='comment' required />
        <br />
        <button type='submit' className='primaryButton'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieDetails;

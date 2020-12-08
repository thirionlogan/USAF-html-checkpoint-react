import { Redirect, Link } from 'react-router-dom';

const PageHeader = (props) => {
  const { clearSearch, handleSearch, handleSearchChange, searchText } = props;
  return (
    <header className='pageHeader'>
      <nav>
        <h1>GMDB</h1>
        <Link to='/browse' onClick={() => clearSearch()}>
          <h3>Home</h3>
        </Link>
        <Link to='/login'>
          <h3>Login</h3>
        </Link>
      </nav>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch();
        }}
      >
        <input
          id='search'
          type='search'
          placeholder='Search'
          name='search'
          value={searchText}
          onChange={handleSearchChange}
        />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
};

export default PageHeader;

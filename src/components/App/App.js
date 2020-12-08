import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BrowsePage from '../BrowsePage';
import MovieDetails from '../MovieDetails';
import LoginPage from '../LoginPage';
import PageHeader from '../PageHeader';
import './App.css';

import movies from '../../movies';

function App() {
  const [state, setState] = useState({
    movies,
    searchQuery: '',
    searchText: '',
    selectedMovie: undefined,
  });
  const handleSelectMovie = (movie) => {
    setState({ ...state, selectedMovie: movie });
  };

  const handleSearchChange = (event) => {
    setState({ ...state, searchText: event?.target?.value });
  };

  const clearSearch = () => {
    setState({ ...state, searchText: '' });
    handleSearch();
  };

  const handleSearch = () => {
    setState({ ...state, searchQuery: state.searchText });
  };

  return (
    <Router>
      <div className='App'>
        <PageHeader
          clearSearch={clearSearch}
          handleSearchChange={handleSearchChange}
          handleSearch={handleSearch}
          searchText={state.searchText}
        />
        <main id='content'>
          <Switch>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <Route path='/movieDetails'>
              <MovieDetails movie={state.selectedMovie} />
            </Route>
            <Route path={['/', '/browse']}>
              <BrowsePage
                search={state.searchQuery}
                handleSelectMovie={handleSelectMovie}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

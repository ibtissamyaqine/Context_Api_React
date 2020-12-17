import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';


function App() {
  return (
    //to access of child components from "app.js" into "movieContext.js" we can do <movieProvider>all components</movieProvider> 
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;

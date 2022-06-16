import React from 'react'
import './App.css';
import { Route, Link } from 'wouter'

import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';

function App() {

  return (
    <StaticContext.Provider value={{
      name: 'nicolas',
      itsSexy: true
    }}>
      <div className="App">
        <section className='App-header'>
          <Link to="/"><h1>Giffy!! </h1></Link>
          <Route
            component={Home}
            path='/'
          />
          <Route
            component={SearchResults}
            path='/search/:keyword'
          />
          <Route
            component={Detail}
            path='/gif/:id'
          />
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;

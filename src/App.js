import React from 'react';
import SearchGeo from './SearchGeo';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import SeasonPass from './SeasonPass'
import Footer from './Footer';

const App = () => {
    return (
      <Router>
        <main>
          <Header />

          <Route exact path="/" component={ SearchGeo } />
          <Route path="/mountain-collective" render={ (props) => <SeasonPass pass={'mountain-collective'} /> } />
          <Route path="/ikon" render={ (props) => <SeasonPass pass={'ikon'} /> } />
          <Route path="/epic" render={ (props) => <SeasonPass pass={'epic'} /> } />

          <Footer />
        </main>
      </Router>
    )
  }

export default App;

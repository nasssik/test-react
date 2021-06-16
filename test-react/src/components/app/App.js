import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from '../header/header';
import User from '../user/user';

import searchIcon from '../../img/search-icon.png';

const App = () => {
  const [userId, setUserId] = useState('');

  const mainScreen =
    userId !== '' ? (
      <User userId={userId} />
    ) : (
      <div className="initial-page-wrapper">
        <img className="initial-page-icon" src={searchIcon} alt="searchIcon" />
        <div className="initial-page-text">
          Start with searching a GitHub user
        </div>
      </div>
    );
  return (
    <Router>
      <div className="app-wrapper">
        <Header onUserIdChanged={(id) => setUserId(id)} />
        {mainScreen}
      </div>
    </Router>
  );
};

export default App;

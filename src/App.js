import React from 'react';
import LoginPage from './components/LoginPage';
import ProfileDetailPage from './components/ProfileDetailPage';
import ProfileListingPage from './components/ProfileListingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ProfileListingPage from './ProfileListingPage';
// import ProfileDetailPage from './ProfileDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfileListingPage/>} />
        <Route path="/user/:id" element={<ProfileDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;

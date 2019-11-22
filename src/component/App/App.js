import './style.scss';

import React from 'react';
import UserInformation from "../UserInformation";
import BoxReviews from '../BoxReviews';

function App() {
  return (
    <div className="App">
      <div className="container">
        <UserInformation />
        <BoxReviews />
      </div>
    </div>
  );
}

export default App;

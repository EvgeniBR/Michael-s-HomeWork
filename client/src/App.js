import React from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.component';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
      </BrowserRouter>

    </div>
  );
}

export default App;

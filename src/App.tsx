import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import CharactersRM from './components/RickyAndMorty/CharactersRM';
import { Route, Routes } from 'react-router-dom';
import CharactersN from './components/Naruto/CharactersN';

function App() {
  return (
    <div className='align-items-center'>
     <Routes>
       <Route path='/rickyandmorty' element={<CharactersRM/>}/>
       <Route path='/naruto' element={<CharactersN/>}/>
      </Routes> 
      
    </div>
  );
}

export default App;

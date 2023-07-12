import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Reminder from './components/Reminder';

function App() {
  return (
    <>
    <Router>
<Routes>

  <Route path="/" element={  <Reminder/> }/>
  
  <Route path="/Reminder-App" element={  <Reminder/> }/>
</Routes>


    </Router>
   
    </>
  );
}

export default App;

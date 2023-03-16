import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

function App() {
  return (
    <>
  <Navbar/>
{/* navbar end */}
   <div className="container-fluid text-center bg-dark text-light">
  <h1 className="display-1">Testing This React App</h1>
  <h2>Like a BOSS</h2>
  </div>
  <div className='row loginDiv'>

  <LoginForm/>

   </div>
   </>
  );
}

export default App;

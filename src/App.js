import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import Header from './Header';

function App() {
  return (
    <>
  <Header/>
  <Navbar/>
{/* navbar end */}
   <div className="container-fluid text-center bg-dark text-light">
  
  </div>
  <div className='row loginDiv'>

  <LoginForm/>

   </div>
   </>
  );
}

export default App;

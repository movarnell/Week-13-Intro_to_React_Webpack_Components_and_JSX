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
   <div className="backgroundLower">
  
  
  <div className='row loginDiv'>

  <LoginForm/>

   </div>
   </div>
   </>
  );
}

export default App;

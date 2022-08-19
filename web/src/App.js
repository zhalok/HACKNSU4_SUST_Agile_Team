import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

//import LandingPage from './components/Landing_page/Landing_page';
 import ClientSearchPage from  './components/ClinetSearhPage/ClientSearchPage'
import Login from './components/Login/Login'
import SignUpAsClient from './components/SignUpAsClient/SignUpAsClient';
import Tickets from './components/Worker/WorkerRequestPage/WorkerRequestPage';

// import UserProfile from './components/UserProfile/UserProfile'
//import ViewSearchedUserProfile from './components/UserProfile/ViewSearchedUserProfile';
/*import ViewProfile from './components/UserProfile/ViewProfile';
import { useState } from 'react';
import SignUpAsClient from './components/SignUpAsClient/SignUpAsClient';
import ClientSearchResult from './components/Client/ClientSearchResult/SearchResult';
import ClientHirePage from './components/Client/ClientHirePage/HirePage';
import WorkersRequestPage from './components/Worker/WorkerRequestPage/WorkerRequestPage';
import WorkersWorkPage from './components/Worker/WorkerWorkPage/WorkerWorkPage';*/

function App() {
 // const [user,setUser]=useState("f@gmail.com")
  //const [searchedLocation,setSearchedLocation]=useState("PaikPara, B.Baria")
  return (
    
    <div className="App">
      <div id="body">
      <Router>
        <Routes>
          
        
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<SignUpAsClient/>}/>
        <Route path="/search" exact element={<ClientSearchPage/>}/>
        <Route path="/ticket" exact element={<Tickets/>}/>
          
        </Routes>
      </Router>
      </div>
    </div>

  );
}

export default App;

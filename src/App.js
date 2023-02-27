import React from 'react'
import Header from './MakeitHalaal/Dashboard/Header'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";

import Footer from './MakeitHalaal/Footer';
import DashboardApp from './MakeitHalaal/Dashboard/DashboardApp';
import Fulldetails from './MakeitHalaal/Dashboard/Fulldetails';
import Notfound from './MakeitHalaal/Notfound';
import Update from './MakeitHalaal/Dashboard/Update';

function App() {
  return (
    <div>
       <Router>
      <Header/>
      <Routes>
        

         {/* dashboard */}
         <Route exact path="/" element = {<DashboardApp/>}></Route>
         <Route path = "/fulldetails/:id" exact element= {<Fulldetails/>}></Route>
         <Route exact path="/update" element = {<Update/>}></Route>
         

         <Route path = "*"  element= {<Notfound/>}></Route>
           

     
      </Routes>
     <Footer/>
           
            

          
      </Router>
       
     
          
             
            

          
     
     
    
    
    </div>
  )
}

export default App
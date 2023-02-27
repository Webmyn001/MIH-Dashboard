
import {React,useState,useEffect} from "react";
 

import axios from "axios";
import Homepage from "./Homepage";


    function DashboardApp() {

     const [data, setData] = useState([])

     const getList = async  () => {
      axios.get("https://repulsive-threads-foal.cyclic.app/api/lessons/")
      .then(res => {
        console.log(res)
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
     }
        useEffect(()=> {
       getList()
    },[])

    
console.log(data)


       return (
               <div>
                  
                     <Homepage data = {data} getList={getList}/>
                      
                
                        
                         

              </div>
              )
                   }

     export default DashboardApp;

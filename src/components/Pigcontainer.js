import React from "react";
import Pigtile from "./Pigtile";

function Pigcontainer({hogs}){
    //console.log(hogs);
    return <main>
       { hogs.map(hog =>  <Pigtile
         hog = {hog}
         key = {hog.name} 
           />)
           }
       </main>
       
      
}


export default Pigcontainer;

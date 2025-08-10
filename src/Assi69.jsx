import NavBarState from "./NavBarState";
import InfoState from './InfoState';
import { useState } from "react";

export default function  Assi69(){
    let [selectedIndex, setSelectedIndex] = useState(-1)
    let stateList = [
    {
      state: "Maharashtra",
      capital: "Mumbai",
      population: "125.7 million",
    },
    {
      state: "Karnataka",
      capital: "Banglore",
      population: "61.1 million",
    },
    {
      state: "Rajasthan",
      capital: "Jaipur",
      population: "81.9 million",
    },
    {
      state: "Gujrat",
      capital: "Gandhinagar",
      population: "70.7 million",
    },
  ]
  function handleClick(index){
    setSelectedIndex(index)
    
  }
  

    return(<>
 
 
      <NavBarState stateList={stateList} onClick={handleClick} selectedIndex={selectedIndex}/>
     {selectedIndex>=0 && (<InfoState selectedIndex={selectedIndex} selectedState={stateList[selectedIndex]}/>)}
    </>)
}
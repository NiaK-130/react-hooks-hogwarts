import React, {useState} from "react";



function Pigtile({hog}){
    const [showDetails, setshowDetails] = useState(false)

    function handleClick(e){
        setshowDetails(!showDetails) //set showdetails to the opp of what it is if usestate is false/true 
     }
     

    console.log(hog);
    return (
        <div onClick = {handleClick} className = "pigTile">
            <h2>{hog.name}</h2>
            <img src = {hog.image} alt = {hog.name} />

            {showDetails ? 
            <section className = "pigDetails">
            <div>{hog.weight} kgs</div>
            <div> <strong>Speciality:</strong> {hog.specialty}</div>
            <div><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</div>
            <div> {hog.greased ? "" : "Not"} Greased </div>
            </section>

            :" "}

        </div>
       
    )
}



export default Pigtile; 

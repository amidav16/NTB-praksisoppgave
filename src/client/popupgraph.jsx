import React from "react";
import Popup from "reactjs-popup";
import Infected from "./infected.jsx";
import InfectedAll from "./infectedall.jsx";
import DeathToll from "./deathtoll.jsx";

//Conditonal rendering, depending on what we pass it will render that component
const PopupGraph = ({ image, first, second, third }) => {
  return (
    <Popup
      trigger={<img className="clickable" src={image} alt="my image"></img>}
      modal
      closeOnDocumentClick
      position="right center"
    >
      <div>
        {first && <Infected></Infected>}
        {second && <InfectedAll></InfectedAll>}
        {third && <DeathToll></DeathToll>}
      </div>
    </Popup>
  );
};

export default PopupGraph;

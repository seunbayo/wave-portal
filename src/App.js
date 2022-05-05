import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Howfar
        </div>

        <div className="bio">
          <h2>I am seunbayo and I work as a Developer Advocate at Spheron. Connect your Ethereum wallet and wave at me!</h2>
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}

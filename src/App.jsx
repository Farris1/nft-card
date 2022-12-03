import {useState, useRef} from "react";
import CountUp from 'react-countup';

import nftImage from "./images/image-equilibrium.jpg";
import ethIcon from "./images/icon-ethereum.svg"
import iconClock from "./images/icon-clock.svg"
import avatarImage from "./images/image-avatar.png"
import iconView from "./images/icon-view.svg"
import "./App.css";

export default function App() {

  const [countIsDone, setCountIsDone] = useState(false);

  return (

    <div className="container">
    <div className="icon--container">
      <img className="icon--nft" src={nftImage} alt="" />
        <div className="middle">
          <div className="icon--view">
            <img src={ iconView } alt="" />
          </div>
        </div>
    </div>
      <section aria-labelledby="card">
        <h3 className="content">
          Equilibrium #3429
        </h3>
        <p className="content para"> Our Equilibrium collection promotes balance and calm.</p>
        
        <div className="price--content">
          <img className="icon--price" src={ethIcon} alt="" />
          <p className="price para">0.041 ETH</p>
        </div>

        <div className="time--content" aria-label="time">
          <img className="icon--price" src={iconClock} alt="" />
            <p id="timer" className="price para">
             { countIsDone ? (
                '3 Days left'
              ) : (
              <CountUp 
                delay={2}
                end={100}
                onEnd={() => setCountIsDone(true)}
              />
              )}
          </p>
          {/* <p id="timer" className="price para">
            <CountUp 
            delay={1} 
            end={100} 
            onEnd={() => 
              document.getElementById("timer").innerHTML = "3 Days Left"}
            />
          </p> */}
        </div>

        <div id="line" aria-label="hidden"></div>

        <div id="avatar--section">
          <img className="avatar--image" src={avatarImage} alt="" />
          <p className="avatar--text para parahov">Jules Wyvern</p>
          <p className="avatar--text para">
            NFT Created By
          </p>
        </div>
      </section>
    </div>
  );
}


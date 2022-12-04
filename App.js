var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { useState, useRef } from "react";
import CountUp, { useCountUp } from 'react-countup';

import nftImage from "./images/image-equilibrium.jpg";
import ethIcon from "./images/icon-ethereum.svg";
import iconClock from "./images/icon-clock.svg";
import avatarImage from "./images/image-avatar.png";
import iconView from "./images/icon-view.svg";
import "./App.css";

export default function App() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      countIsDone = _useState2[0],
      setCountIsDone = _useState2[1];

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "icon--container" },
      React.createElement("img", { className: "icon--nft", src: nftImage, alt: "" }),
      React.createElement(
        "div",
        { className: "middle" },
        React.createElement(
          "div",
          { className: "icon--view" },
          React.createElement("img", { src: iconView, alt: "" })
        )
      )
    ),
    React.createElement(
      "section",
      { "aria-labelledby": "card" },
      React.createElement(
        "h3",
        { className: "content" },
        "Equilibrium #3429"
      ),
      React.createElement(
        "p",
        { className: "content para" },
        " Our Equilibrium collection promotes balance and calm."
      ),
      React.createElement(
        "div",
        { className: "price--content" },
        React.createElement("img", { className: "icon--price", src: ethIcon, alt: "" }),
        React.createElement(
          "p",
          { className: "price para" },
          "0.041 ETH"
        )
      ),
      React.createElement(
        "div",
        { className: "time--content", "aria-label": "time" },
        React.createElement("img", { className: "icon--price", src: iconClock, alt: "" }),
        React.createElement(
          "p",
          { id: "timer", className: "price para" },
          countIsDone ? '3 Days left' : React.createElement(CountUp, {
            delay: 2,
            end: 100,
            onEnd: function onEnd() {
              return setCountIsDone(true);
            }
          })
        )
      ),
      React.createElement("div", { id: "line", "aria-label": "hidden" }),
      React.createElement(
        "div",
        { id: "avatar--section" },
        React.createElement("img", { className: "avatar--image", src: avatarImage, alt: "" }),
        React.createElement(
          "p",
          { className: "avatar--text para parahov" },
          "Jules Wyvern"
        ),
        React.createElement(
          "p",
          { className: "avatar--text para" },
          "NFT Created By"
        )
      )
    )
  );
}
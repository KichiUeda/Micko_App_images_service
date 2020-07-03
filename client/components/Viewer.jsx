import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards.jsx"

var carouselContainerStyle = {
  'display': 'flex',
  'flexDirection': 'row'
}

var leftArrow = {
  'width': '0',
  'height': '0',
  'borderTop': '50px solid transparent',
  'borderRight': '100px solid grey',
  'borderBottom': '50px solid transparent'
}

var rightArrow = {
  'width': '0',
  'height': '0',
  'borderTop': '50px solid transparent',
  'borderLeft': '100px solid grey',
  'borderBottom': '50px solid transparent'
}

const Viewer = (props) => (
  <div className='container'>
    <div className='viewer'>
      <img src="https://picsum.photos/741/429" alt="Viewer Place Holder"></img>
    </div>
    <div className='carousel-container' style={carouselContainerStyle}>
      <div className='arrow-left' style={leftArrow}></div>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      <div className='arrow-right' style={rightArrow}></div>
    </div>
  </div>
)


export default Viewer;
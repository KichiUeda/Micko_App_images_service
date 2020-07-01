import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards.jsx"

class Viewer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className='container'>
      <div className='viewer'>
        VIEWER
      </div>
      <div className='carousel-container'>
        <div className='arrow-left'></div>
          <div className='carousel-container'>
            <Cards />
          </div>
        <div className='arrow-right'></div>
      </div>
    </div>
  }
}

export default Viewer;
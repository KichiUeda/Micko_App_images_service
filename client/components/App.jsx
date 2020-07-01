import React from "react";
import ReactDOM from "react-dom";
import Viewer from "./Viewer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

  }


  render() {
    return <div>
        <Viewer/>
      </div>
  }
}

export default App;
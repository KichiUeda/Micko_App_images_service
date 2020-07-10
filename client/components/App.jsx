import React from "react";
import ReactDOM from "react-dom";
import Viewer from "./Viewer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      main:'https://picsum.photos/218/122',
      medias: ['https://picsum.photos/218/122', 'http://res.cloudinary.com/fec-image-services/image/upload/v1592873080/images_carousel/75.jpg', 'http://res.cloudinary.com/fec-image-services/image/upload/v1592873077/cover_images/89.jpg']
    }

    this.onClick = this.onClick.bind(this);
    this.arrowClick = this.arrowClick.bind(this);
  }

  onClick(e) {
    //console.log(e.target.attributes.src.nodeValue)
    var targetSource = e.target.attributes.src.nodeValue;
    this.setState({
      main: targetSource
    })
  }

  arrowClick(e) {
    //fas fa-angle-right fa-angle-left
    var className = e.target.className;
    var currentView = this.state.main;
    var index = this.state.medias.indexOf(currentView);
    var mediaLength = this.state.medias.length;

    if (className === 'fas fa-angle-right') {
      if (index < mediaLength) {
        this.setState({
          main: this.state.medias[index + 1]
        })
      } else {
        console.log('Ran out of media to view RIGHT')
      }
    } else if (className === 'fas fa-angle-left') {
      if (index > 0) {
        this.setState({
          main: this.state.medias[index - 1]
        })
      } else {
        console.log('There are no previous media to view LEFT');
      }
    }
  }

  render() {
    return <div>
        <Viewer medias={this.state} onClick={this.onClick} arrowClick={this.arrowClick}/>
      </div>
  }
}

export default App;
import React from "react";
import ReactDOM from "react-dom";
import Viewer from "./Viewer.jsx";
import $ from "jquery";
//something unimportant
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      main:'https://picsum.photos/218/122',
      medias: ['https://picsum.photos/218/122', 'http://res.cloudinary.com/fec-image-services/image/upload/v1592873080/images_carousel/75.jpg', 'http://res.cloudinary.com/fec-image-services/image/upload/v1592873077/cover_images/89.jpg'],
      key: 0
    }
    this.getProductId = this.getProductId.bind(this);
  }

  getProductId() {
    //console.log(window.location.pathname);
    var path = window.location.pathname;
    var arrayPath = path.split('/');
    var product_id;
    arrayPath.forEach(str => {
      if (!isNaN(parseInt(str))) {
        product_id = parseInt(str);
      } else {
        console.log('String is not a parseable number')
      }
    })
    return product_id;
  }

  componentDidMount() {
    console.log(this.getProductId());
    if (this.getProductId()) {
      var product_id = this.getProductId();
      $.ajax(`http://localhost:3001/api/${product_id}`, {
        method: 'GET',
        success: (data) => {
          console.log("SUCCESS GET REQUEST")
          var mappedMedias = (videoArray, imageArray) => {
            var combinedMedia = [];
            videoArray.forEach(e => {
              combinedMedia.push(e);
            });
            imageArray.forEach(e => {
              combinedMedia.push(e)
            })
            return combinedMedia;
          }
          var processedData = mappedMedias(data.carousel_videos, data.carousel_images)
          this.setState({
            main: processedData[0],
            medias: processedData
          })
          console.log(this.state);
        },
        error: (err) => {
          console.log("Failed to fetch product images")
        }
      })
    } else {
      console.log('Cannot find product id from path!');
    }

    this.onClick = this.onClick.bind(this);
    this.arrowClick = this.arrowClick.bind(this);
  }

  onClick(e) {
    var key = this.state.key;
    key++;
    if (e.target.attributes.length === 0) {
      //console.log('this isnt an image bro.')
      var videoSource = e.target.childNodes[0].src;
      this.setState({
        main: videoSource,
        key: key
      })
    } else {
      var targetSource = e.target.attributes.src.nodeValue;
      this.setState({
        main: targetSource,
        key: key
      })
    }
  }

  arrowClick(e) {
    //fas fa-angle-right fa-angle-left
    var className = e.target.className;
    var currentView = this.state.main;
    var index = this.state.medias.indexOf(currentView);
    var mediaLength = this.state.medias.length;
    var key = this.state.key;
    key++;
    if (className === 'fas fa-angle-right') {
      if (index < mediaLength) {
        this.setState({
          main: this.state.medias[index + 1],
          key: key
        })
      } else {
        console.log('Ran out of media to view RIGHT')
      }
    } else if (className === 'fas fa-angle-left') {
      if (index > 0) {
        this.setState({
          main: this.state.medias[index - 1],
          key: key
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
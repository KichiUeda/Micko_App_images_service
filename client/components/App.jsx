import React from "react";
import ReactDOM from "react-dom";
import Viewer from "./Viewer.jsx";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      main:'https://picsum.photos/218/122',
      medias: ['https://picsum.photos/218/122', 'https://picsum.photos/218/122', 'https://picsum.photos/218/122']
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

  }

  render() {
    return <div>
        <Viewer/>
      </div>
  }
}

export default App;
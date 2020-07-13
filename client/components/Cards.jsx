import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
  padding-bottom: 10px;
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  .fas {
    color: #949699;
    font-size: 35px;
  }
  &:hover .fas {
    color: #d2d5d9;
  }
`;
const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
`
const Card = styled.div`
  width: 218px;
  height: 122px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 15px;
  img {
    width: 218px;
    height: 122px;
  }
  video {
    width: 218px;
    height: 122px;
  }
`;
//218x122

export default class Cards extends React.Component {
  createCards() {
    var medias = this.props.medias;
    //console.log(medias)
    return medias.map((url) => {
      if (url.includes('.mp4')) {
        return (
          <Card>
            <video onClick={this.props.onClick} poster='https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png'>
              <source src={url} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </Card>
        );
      } else if (url.includes('.jpg')) {
        return (
          <Card>
            <img src={url} onClick={this.props.onClick}></img>
          </Card>
        );
      }
    });
  }

  render() {
    return ReactDOM.createPortal(
      <CarouselContainer>
        <Arrow onClick={this.props.arrowClick}>
          <i className="fas fa-chevron-left"></i>
        </Arrow>
        <CardContainer>
          {this.createCards()}
        </CardContainer>
        <Arrow onClick={this.props.arrowClick}>
          <i className="fas fa-chevron-right"></i>
        </Arrow>
      </CarouselContainer>,
      document.getElementById('carousel')
    );
  }
}

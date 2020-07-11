import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  .fas {
    color: #949699;
    font-size: 50px;
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
  margin-left: 10px;
  margin-right: 10px;
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
            <video onClick={this.props.onClick}>
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
    return (
      <CarouselContainer>
        <Arrow onClick={this.props.arrowClick}>
          <i className="fas fa-angle-left"></i>
        </Arrow>
        <CardContainer>
          {this.createCards()}
        </CardContainer>
        <Arrow onClick={this.props.arrowClick}>
          <i className="fas fa-angle-right"></i>
        </Arrow>
      </CarouselContainer>
    );
  }
}

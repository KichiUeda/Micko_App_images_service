import React from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Arrow = styled.div`
  width: 17;
  height: 122;
  display:flex;
  align-items: center;
  .fas {
    color: #949699;
    font-size: 50px;
  }
  &:hover .fas{
    color: #d2d5d9;
  }
`
const Card = styled.div`
  width: 218;
  height:122;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
`
//218x122

export default class Cards extends React.Component {

  render() {
    return (
      <CarouselContainer>
        <Arrow><i className='fas fa-angle-left'></i></Arrow>
        <Card><img src="https://picsum.photos/218/122"></img></Card>
        <Card><img src="https://picsum.photos/218/122"></img></Card>
        <Card><img src="https://picsum.photos/218/122"></img></Card>
        <Arrow><i className='fas fa-angle-right'></i></Arrow>
      </CarouselContainer>
    )
  }
};
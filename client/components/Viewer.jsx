import React from 'react';
import Cards from './Cards.jsx';
import styled from 'styled-components';

const ViewerBox = styled.div`
  padding: 20px;
`;
const Container = styled.div`
  padding-bottom: 50px;
  background-color: #282c34;
`;
const Title = styled.h1`
  color: #a1a7b3;
`;
const ViewerMain = styled.div`
  img {
    width: 611px;
    height: 350px;
  }
`

//741x425
export default class Viewer extends React.Component {
  render() {
    return (
      <Container>
        <ViewerBox>
          <Title>TITLE</Title>
          <ViewerMain>
            <img src={this.props.medias.main}></img>
          </ViewerMain>
        </ViewerBox>
        <Cards medias={this.props.medias.medias} onClick={this.props.onClick} arrowClick={this.props.arrowClick}></Cards>
      </Container>
    );
  }
}

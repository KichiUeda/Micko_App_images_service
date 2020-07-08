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

export default class Viewer extends React.Component {
  render() {
    return (
      <Container>
        <ViewerBox>
          <Title>TITLE</Title>
          <img src="https://picsum.photos/741/429"></img>
        </ViewerBox>
        <Cards></Cards>
      </Container>
    );
  }
}

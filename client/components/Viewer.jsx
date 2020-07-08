import React from "react";
import Cards from "./Cards.jsx"
import styled from "styled-components";

const ViewerBox = styled.div`
  padding: 20px;
  width: 741;
  height: 429;
`
const Container = styled.div`
  padding-bottom: 50px;
  background-color: #282c34;
`

export default class Viewer extends React.Component {
  render() {
    return (
      <Container>
        <ViewerBox>
          <img src="https://picsum.photos/741/429"></img>
        </ViewerBox>
        <Cards></Cards>
      </Container>
    )
  }
};
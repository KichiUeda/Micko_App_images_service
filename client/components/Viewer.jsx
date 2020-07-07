import React from "react";
import Cards from "./Cards.jsx"
import styled from "styled-components";

const ViewerBox = styled.div`
  width: 741;
  height: 429;
`

export default class Viewer extends React.Component {
  render() {
    return (
      <div>
        <ViewerBox>
          <img src="https://picsum.photos/741/429"></img>
        </ViewerBox>
        <Cards></Cards>
      </div>
    )
  }
};
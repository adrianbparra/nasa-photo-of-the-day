import React from "react";
import "./App.css";
import ImageSet from "./Components/ImageSet";
import logo from "./images/nasa-logo.png";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  font-family: 'Yeseva One', cursive;

`;



const LogoMain = styled.div`
  padding-top: 40px;
  border-bottom: 1px solid white;
`;

const LogoImg = styled.img`
  height: 120px;
  widht: auto;
`;

function App() {
  return (

    <AppContainer>      
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <LogoMain> 
        <LogoImg src={logo} alt="Nasa logo"></LogoImg>
        <h1>Photo of The Day</h1>
      </LogoMain>
      <ImageSet />
    </AppContainer>
  );
}

export default App;

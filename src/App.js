import React from "react";
import "./App.css";
import ImageSet from "./ImageComponents/ImageSet";
import logo from "./images/nasa-logo.png";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  background-color: black;
  color: white;
`;

const LogoMain = styled.div`
  padding: 40px;

`;

function App() {
  return (

    <AppContainer>      
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <LogoMain> 
        <img src={logo} alt="Nasa logo"></img>
        <h1>Photo of The Day</h1>
      </LogoMain>
      <ImageSet />
    </AppContainer>
  );
}

export default App;

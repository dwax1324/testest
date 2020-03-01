import styled from "styled-components";
import React from "react";
import "./App.css";

const Container = styled.div`
  width: 100%;
  background-color: black;
  height: 100vh;
  color: white;
`;

const Greeting = styled.div`
  font-size: 17.5vw;
  text-transform: uppercase;
  width: 100%;
  height: auto;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  line-height: 80%;
`;
const Gt = styled.div`
  position: relative;
  text-align: start;
`;
const Gt2 = styled.div`
  position: relative;
  text-align: end;
`;
const Gt3 = styled.div`
  text-align: end;
  position: relative;
  margin-top: 5vh;
`;

const MiddleGreeting = styled.div`
  margin-top: 20vh;
  width: 100%;
  height: auto;
  font-size: 48px;
  font-weight: 400;
  width: 50%;
  line-height: 110%;
`;

const PortBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Protfolio = styled.div`
  width: 80%;
  height: 100vh;
  align-self: center;
  border: 1px solid red;
  justify-self: center;
  margin-top: 10vh;
  display: flex;
  flex-flow: wrap;
`;

const Protfolio1 = styled.div`
  width: 49.5%;
  height: 33%;
  border: 1px solid blue;
  margin-left: 3px;
`;

const PortTitle = styled.div`
  margin-top: 50vh;
  width: 100%;
  font-size: 5vw;
  text-align: center;
  left: 49%;
  top: -2px;
  opacity: 0.8;
`;
const Pics = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, black 0%, black 75%, gray 100%);
`;
export default function App() {
  return (
    <Container>
      <Greeting>
        <Gt>Hello.</Gt>
        <Gt2>i am </Gt2>
        <Gt3>woojong</Gt3>
      </Greeting>

      <MiddleGreeting>
        I'm a multi-talented human. Most of my time I design and build digital
        products. You can also call me a product designer, experience designer,
        interaction, UI, UX or by any other market defined function-title. I'm
        also a multi-disciplinary maker with over 9 years of experiences in wide
        range of design disciplines, manager, advisor, entrepreneur, front-end
        developer, music enthusiast, traveler, photographer and more.
      </MiddleGreeting>
      <PortTitle>Portfolio</PortTitle>
      <PortBox>
        <Protfolio>
          <Protfolio1>Blog</Protfolio1>
          <Protfolio1>Simple Game</Protfolio1>
          <Protfolio1>Specific Site</Protfolio1>
          <Protfolio1>Backend stuff</Protfolio1>
          <Protfolio1>Css Animation</Protfolio1>
          <Protfolio1>Later</Protfolio1>
        </Protfolio>
      </PortBox>
      <Pics></Pics>
    </Container>
  );
}

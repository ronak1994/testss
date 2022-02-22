import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import "./splash.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const fadeAnimation = keyframes`${fadeIn}`;
const BouncyDiv = styled.div`
  animation: 2s ${fadeAnimation};
  width: 100%;
`;

const splash = () => {
  setTimeout(() => {
    window.location = "/login";
  }, 2000);

  return (
    <div className="splashBox">
      <BouncyDiv>
        <h2>ChatBox</h2>
      </BouncyDiv>
    </div>
  );
};

export default splash;

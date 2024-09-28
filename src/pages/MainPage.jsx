import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MainSection from "../components/MainSection";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Header />
      <div className="main-container">
        <NavBar />
        <MainSection />
      </div>
    </div>
  );
};

export default MainPage;

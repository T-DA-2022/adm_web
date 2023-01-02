import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

import MainPage from "./pages/Mainpage/MainPage";
import TodayPage from "./pages/Todaypage/TodayPage";
import QuizPage from "./pages/Quizpage/QuizPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Center>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </Center>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Center = styled.div`
  display: flex;
  flex-direction: row;
`;

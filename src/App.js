import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

import MainPage from "./pages/Mainpage/MainPage";
import CalendarPage from "./pages/Calendar/Calendar";
import TodayPage from "./pages/Todaypage/TodayPage";
import QuizPage from "./pages/Quizpage/QuizPage";

function App() {
  const [mainWidth, SetMainWidth] = useState(window.innerWidth / 2);
  const [sidebarWidth, SetSidebarWidth] = useState(window.innerWidth * 0.2);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    SetSidebarWidth(sidebarOpen * window.innerWidth * 0.2);
    SetMainWidth((1 - 0.2 * sidebarOpen) * window.innerWidth);
  }, [sidebarOpen]);

  return (
    <div className="App">
      <BrowserRouter>
        <BarDiv>
          <Sidebar
            width={sidebarWidth}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Center>
            <Topbar
              width={mainWidth}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <Routes>
              <Route exact path="/" element={<MainPage width={mainWidth} />} />
              <Route
                path="/calendar"
                element={<CalendarPage width={mainWidth} />}
              />
              <Route path="/today" element={<TodayPage width={mainWidth} />} />
              <Route path="/quiz" element={<QuizPage width={mainWidth} />} />
            </Routes>
          </Center>
        </BarDiv>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Center = styled.div`
  display: flex;
  flex-direction: column;
`;

const BarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import Login from "./pages/Login";
import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter basename="/project-main">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}


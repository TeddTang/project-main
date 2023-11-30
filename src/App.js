import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import Login from "./pages/Login";
import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="project-main/teacher" element={<Teacher />} />
          <Route path="project-main/student" element={<Student />} />
          <Route path="project-main/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}


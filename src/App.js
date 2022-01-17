import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Project from "./pages/Project";
import Navbar from './component/Navbar'
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh();
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/project/:projectId'} element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

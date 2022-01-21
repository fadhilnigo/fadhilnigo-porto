import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Project from "./pages/Project";
import SignIn from "./pages/SignIn";
import UploadAsset from "./pages/UploadAsset";
import Navbar from './component/Navbar'
import Footer from "./component/Footer";
import PrivateRoute from "./component/PrivateRoute";
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
          <Route path='/' element={<Home />} />
          <Route path='/project/:projectId' element={<Project />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/upload-asset' element={<PrivateRoute />}>
            <Route path='/upload-asset' element={<UploadAsset />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

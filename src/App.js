import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Project from "./pages/Project";
import SignIn from "./pages/SignIn";
import UploadAsset from "./pages/UploadAsset";
import GithubFinder from "./pages/GithubFinder";
import Housemarketplace from "./pages/Housemarketplace";
import FeedbackApp from "./pages/FeedbackApp";
import ProjectIbc from "./pages/ProjectIbc";
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

          {/* Temporary Project Page */}
          <Route path= '/project' /*'/project/:projectId' */ element={<Project />} />
          <Route path='/project/github-finder' element={<GithubFinder />} />
          <Route path='/project/project-ibc' element={<ProjectIbc />} />
          <Route path='/project/house-marketplace' element={<Housemarketplace />} />
          <Route path='/project/feedback-app' element={<FeedbackApp />} />
          {/* Will make feature for auto fill project pages */}

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

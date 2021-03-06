// This page is for temporary

import projectIbcImg from '../assets/images/ibc-project-img.png'

function ProjectIbc() {
  return (
    <div className="project-container">
      <div className="project-card">
        <header className="content-wrap">
          <h1 className="header-title">Indonesia Battery Corporation Website</h1>
          <hr></hr>
          <img src={projectIbcImg} alt="Project IBC Screenshot" className="header-img" />
        </header>
        <main>
          <div  className="content-wrap">
            <div className="body-wrap">
              <h1 className="content-title">About This Project<hr></hr></h1>
              <p className="content-text">
                Website for Indonesia Battery Corporation (IBC), a responsive website that include 
                Content Management System (CMS) that have an What You See Is What You Get (WYSIWIG)
                so the user can add, edit, update, or delete content by theirself.
                <br/>
                <br/>
                This project is my freelance part-time project with main role to assist Senior front-end web
                developer in building UI from the design and debugging. This project give me oppurtinity to
                practice and apply my knowledge in translating design into maintanable and stable code, and also
                to create a responsive website using modern CSS techniques and Javascript Libraries. 
              </p>
            </div>
            <div className="body-wrap">
              <h1 className="content-title">Technical<hr></hr></h1>
              <p>Technologies involved while working on this project:</p>
              <ul>
                <li>PHP framework Laravel</li>
                <li>Javascript framework Vue JS</li>
                <li>CSS Preprocessor SASS</li>
                <li>CSS Framework Bootstrap</li>
                <li>Promise based HTTP client Axios</li>
                <li>Carousel plugin library Swiper JS</li>
                <li>Animation plugin library AOS</li>
              </ul>
            </div>

            <div className="content-footer body-wrap">
              <p className="content-text">Repo: <a>Confidential</a></p>
              <a 
                className="btn-container" 
                href="https://www.indonesiabatterycorp.com" 
                target="_blank" 
                rel="noreferrer noopener"
              >
                <button className='btn--pils'>
                  View Website
                </button>
              </a>
            </div>
          </div>
        </main>
        
      </div>
    </div>
  );
}

export default ProjectIbc;
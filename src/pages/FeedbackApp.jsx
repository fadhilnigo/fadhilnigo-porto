// This page is for temporary

import feedbackImg from '../assets/images/feedback-app-img.png'

function FeedbackApp() {
  return (
    <div className="project-container">
      <div className="project-card">
        <header className="content-wrap">
          <h1 className="header-title">Feedback Apps</h1>
          <hr></hr>
          <img src={feedbackImg} alt="Feedback App Screenshot" className="header-img" />
        </header>
        <main>
          <div  className="content-wrap">
            <div className="body-wrap">
              <h1 className="content-title">About This Project<hr></hr></h1>
              <p className="content-text">
                Website applications that have a feature to give a rating and write a comment and then post it.
                It is one of the projects on React Front to Back 2022 course for practice to make an simple project
                to setup REST API with Create, Read, Update, and Delete (CRUD) operation using fake server with JSON server.
              </p>
            </div>
            <div className="body-wrap">
              <h1 className="content-title">Technical<hr></hr></h1>
              <p>Technologies involved while working on this project:</p>
              <ul>
                <li>Javascript framework React JS</li>
                <li>Fake server API JSON Server</li>
                <li>Basic CSS</li>
              </ul>
            </div>

            <div className="content-footer body-wrap">
              <p className="content-text">Repo: <a href="https://github.com/fadhilnigo/feedback-app" 
                  target="_blank" 
                  rel="noreferrer noopener"
                >
                   github.com/fadhilnigo/feedback-app
                </a>
              </p>
              {/* <a 
                className="btn-container" 
                href="https://www.indonesiabatterycorp.com" 
                target="_blank" 
                rel="noreferrer noopener"
              >
                <button className='btn--pils'>
                  View Website
                </button>
              </a> */}
            </div>
          </div>
        </main>
        
      </div>
    </div>
  );
}

export default FeedbackApp;
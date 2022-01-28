// This page is for temporary

import feedbackImg from '../assets/images/feedback-app-img.png'
import vectorPink from '../assets/images/vector-pink.svg'

function FeedbackApp() {
  return (
    <div className="project-container">
      <header>
        <h1 className="header-title">Feedback App</h1>
        <img src={feedbackImg} alt="Feedback App Screenshot" className="header-img" />
      </header>
      <main>
        <div>
          <h1 className="content-title">About This Project</h1>
          <p className="content-text">THis is a project</p>
        </div>
        <div>
          <h1 className="content-title">Technical</h1>
          <p>Technologies i used in this project:</p>
          <div>
            <p className="body-list content-text" data-aos="zoom-in">
              <img src={vectorPink} alt="List Style" className="list-img" />
                Next.js
            </p>
            <p className="body-list content-text" data-aos="zoom-in">
              <img src={vectorPink} alt="List Style" className="list-img" />
                Next.js
            </p>
            <p className="body-list content-text" data-aos="zoom-in">
              <img src={vectorPink} alt="List Style" className="list-img" />
                Next.js
            </p>
            <p className="body-list content-text" data-aos="zoom-in">
              <img src={vectorPink} alt="List Style" className="list-img" />
                Next.js
            </p>
            <p className="body-list content-text" data-aos="zoom-in">
              <img src={vectorPink} alt="List Style" className="list-img" />
                Next.js
            </p>
          </div>
        </div>

        <div className="content-footer">
          <p className="content-text">Repo:</p>
          <button className='btn--pils'>View Website</button>
        </div>
      </main>
    </div>
  );
}

export default FeedbackApp;
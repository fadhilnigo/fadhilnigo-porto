// This page is for temporary

import fadhilportoimg from '../assets/images/fadhil-porto-img.png'

function FadhilPorto() {
  return (
    <div className="project-container">
      <div className="project-card">
        <header className="content-wrap">
          <h1 className="header-title">My Portofolio</h1>
          <hr></hr>
          <img src={fadhilportoimg} alt="My Portofolio Screenshot" className="header-img" />
        </header>
        <main>
          <div  className="content-wrap">
            <div className="body-wrap">
              <h1 className="content-title">About This Project<hr></hr></h1>
              <p className="content-text">
                A website portofolio to showcase all my finished project, my plan is to continues
                updating my project in this website and make it automated updated with CRUD system using firebase
                currently only the swiper that automated update when the data is uploaded on the Firebase.
                <br/>
                <br/>
                This website also used for me to practice and implement technologies that i has 
                learned to improve my front-end developer skills, currenlty on progress to wrap this 
                project in Next JS framework. 
              </p>
            </div>
            <div className="body-wrap">
              <h1 className="content-title">Technical<hr></hr></h1>
              <p>Technologies involved while working on this project:</p>
              <ul>
                <li>Javascript framework React JS</li>
                <li>CSS Preprocessor SASS</li>
                <li>Authentication feature and Database storage using Firebase</li>
                <li>Carousel plugin library using Swiper JS</li>
                <li>Page animation plugin library using AOS</li>
              </ul>
            </div>

            <div className="content-footer body-wrap">
              <p className="content-text">Repo: <a href="https://github.com/fadhilnigo/fadhilnigo-porto" 
                  target="_blank" 
                  rel="noreferrer noopener"
                >
                   github.com/fadhilnigo/fadhilnigo-porto
                </a>
              </p>
              <a 
                className="btn-container" 
                href="https://fadhilnigo-porto.vercel.app/" 
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

export default FadhilPorto;
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
              <p className="content-text">This is a project</p>
            </div>
            <div className="body-wrap">
              <h1 className="content-title">Technical<hr></hr></h1>
              <p>Technologies i used in this project:</p>
              <ul>
                <li>Next js</li>
                <li>Next js</li>
                <li>Next js</li>
                <li>Next js</li>
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
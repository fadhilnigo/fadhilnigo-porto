import ProjectCard from "../component/ProjectCard"
import Slider from "../component/Slider"

function Project() {
  return (
    <div className="portofolio-container">
      <header className="portofolio-header">
        <h1>PORTOFOLIO</h1>
      </header>
      <section className="section--slider">
        <Slider />
      </section>
      <section className="section--card">
        <ProjectCard />
      </section>
    </div>
  )
}

export default Project

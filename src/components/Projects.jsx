import { LuExternalLink, LuArrowRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../styles/Projects.scss';


const Projects = () => {
  // Display only the first 3 projects
  const recentProjects = projects.slice(0, 3);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div className="projects__title-group">
            <span className="projects__label">Portfolio</span>
            <h2 className="projects__title">Selected Projects</h2>
          </div>
          <p className="projects__intro">
            A curated selection of my latest work, ranging from complex SaaS dashboards to high-fidelity e-commerce platforms.
          </p>
        </div>
        
        <div className="projects__grid">
          {recentProjects.map((project) => (
            <div key={project.id} className="projects__card">
              <div 
                className="projects__image" 
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <div className="projects__content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.desc}</p>
                <Link to={`/projects/${project.id}`} className="projects__link">
                  View Project <LuExternalLink />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link to="/projects" className="projects__link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
            View All Projects <LuArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

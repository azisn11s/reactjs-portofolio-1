import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowLeft, LuExternalLink } from 'react-icons/lu';
import { projects } from '../data/projects';
import '../styles/Projects.scss';
import LazyImage from './LazyImage';

const ProjectGallery = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout-container" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="projects__container" style={{ paddingTop: '8rem' }}>
        
        {/* Navigation Back */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" className="hero__link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <LuArrowLeft /> Back to Home
          </Link>
        </div>

        <div className="projects__header">
          <div className="projects__title-group">
            <span className="projects__label">All Projects</span>
            <h2 className="projects__title">Project Gallery</h2>
          </div>
          <p className="projects__intro">
            A comprehensive list of my work, experiments, and open source contributions.
          </p>
        </div>
        
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__card">
              <LazyImage
                src={project.img}
                alt={project.title}
                className="projects__image"
                aspectRatio="16/10"
                borderRadius="0.5rem"
              />
              <div className="projects__content">
                <Link to={`/projects/${project.id}`} style={{ display: 'block' }}>
                   <h3 className="projects__card-title hover-underline">{project.title}</h3>
                </Link>
                <p className="projects__card-meta">{project.company} • {project.period}</p>
                <p className="projects__card-desc">{project.desc}</p>
                <Link to={`/projects/${project.id}`} className="projects__link">
                  View Details <LuExternalLink />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;

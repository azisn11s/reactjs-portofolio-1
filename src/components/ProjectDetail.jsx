import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LuArrowLeft, LuExternalLink, LuLayers } from 'react-icons/lu';
import { projects } from '../data/projects';
import '../styles/Projects.scss';
import LazyImage from './LazyImage';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="layout-container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/projects" className="projects__link">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div className="layout-container" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="projects__container" style={{ paddingTop: '8rem' }}>
        
        {/* Navigation Back */}
        <div style={{ marginBottom: '2rem' }}>
          <button 
            onClick={() => navigate(-1)} 
            className="hero__link" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}
          >
            <LuArrowLeft /> Back
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '100%' }}>
            {/* Header Section */}
            <div>
                 <span className="projects__label">{project.role} @ {project.company}</span>
                 <h1 className="projects__title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{project.title}</h1>
                 <p className="projects__card-meta" style={{ marginBottom: '2rem' }}>{project.period}</p>
                 
                 <LazyImage
                   src={project.img}
                   alt={project.title}
                   className="projects__image"
                   aspectRatio="16/9"
                   borderRadius="0.5rem"
                 />
            </div>

            {/* Content Section usually 2 columns on desktop */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Overview</h3>
                    <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                        {project.longDesc || project.desc}
                    </p>
                </div>
                
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <LuLayers /> Technologies
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {project.technologies?.map((tech, i) => (
                            <span key={i} style={{ 
                                padding: '0.5rem 1rem', 
                                backgroundColor: 'var(--bg-secondary)', 
                                borderRadius: '2rem',
                                fontSize: '0.875rem',
                                fontWeight: '500'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects__link">
                            Visit Live Site <LuExternalLink />
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

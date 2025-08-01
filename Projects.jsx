import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import project1 from '../assets/images/project1.jpg'; 
import project2 from '../assets/images/project2.jpg';
function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Shopping Website Frontend',
      description: 'A responsive e-commerce website with a modern UI.',
      tags: ['HTML', 'CSS', 'Bootstrap'],
      image: project1,
      githubUrl: 'https://github.com/keyurdevlekar/shopping_website' 
    },
    {
      id: 2,
      title: 'Movie Explorer',
      description: 'A mobile-friendly application to explore movies and TV shows.',
      tags: ['React', 'CSS', 'API'],
      image: project2,
      githubUrl: 'https://github.com/keyurdevlekar/Movie-Explorer'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <a
            key={project.id}
            href={project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card ${!project.githubUrl ? 'non-clickable' : ''}`}
          >
            <div className="project-image">
              <LazyLoadImage
                alt={project.title}
                effect="blur"
                src={`/images/${project.image}`}
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              {project.githubUrl && (
                <div className="github-link">
                  <span>View on GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
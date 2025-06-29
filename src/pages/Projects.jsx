import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
  {
    title: 'Gardening Community App',
    description: 'A full-stack platform for gardeners to share tips and events.',
    image: 'https://i.ibb.co/5hfnt1yh/Screenshot-2025-06-29-055951.png',
    features: ['User profiles', 'Event banners', 'Like system'],
    technologies: ['React', 'Tailwind', 'Firebase', 'Firestore'],
    live: 'https://wooden-feast.surge.sh/',
    github: 'https://github.com/your-username/assignment-9-client',
    details: '/project/1',
  },
  {
    title: 'EduPro Learning Platform',
    description: 'Online course platform with dynamic course loading and auth.',
    image: 'https://i.ibb.co/8gmZhq6D/Screenshot-2025-06-29-063004.png',
    features: ['Auth system', 'Course filtering', 'Admin dashboard'],
    technologies: ['React', 'Express.js', 'MongoDB', 'Tailwind'],
    live: 'https://assignment-10-89f5a.web.app/',
    github: 'https://github.com/your-username/assignment-10-client',
    details: '/project/2',
  },
  {
    title: 'Sports Club Management',
    description: 'Register and manage sports events with role-based access.',
    image: 'https://i.ibb.co/7d4gVWvS/Screenshot-2025-06-29-063353.png',
    features: ['Payment', 'User roles', 'Event calendar'],
    technologies: ['React', 'Firebase Auth', 'Node.js', 'Tailwind'],
    live: 'https://assignment-11-3c1c2.web.app/',
    github: 'https://github.com/your-username/assignment-11-client',
    details: '/project/3',
  },
];

const Projects = () => {
  return (
    <section className="p-6 " id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 flex flex-col md:flex-row  mb-8">
      {/* Left: Project Image */}
      <div className="w-full md:w-1/2 bg-green-300 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right: Project Details */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 ">{project.title}</h3>

          {/* Description */}
          <p className=" mb-4">{project.description}</p>

          {/* Features List */}
          <ul className="mb-4 list-disc list-inside ">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href={project.details}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

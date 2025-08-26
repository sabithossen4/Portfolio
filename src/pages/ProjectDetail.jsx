import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FiGithub, FiExternalLink, FiServer, FiHome } from "react-icons/fi";
import { CiSquareAlert } from "react-icons/ci";

 const projects = [
    {
      id: 1,
      name: "Gardening Community",
      description:
        "A full-stack gardening community portal with  integration dashboard with proper information and charts and JWT authentication.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "express.js",
        "Firebase",
        "JWT",
      ],
      challenges: [
        "Implementing real-time inventory updates",
        "Implement user dashboard to show the full information and others necessary details to show.",
        "Handling JWT authentication properly to manage the authentic registered and non-registered user",
        "Handled CRUD operation properly with JWT.",
        "Optimizing image loading for product gallery.",
      ],
      liveLink: "https://assignment-10-89f5a.web.app/",
      githubLink:
        "https://github.com/sabithossen4/Gardening-Client-A10",
      serverLink: "https://github.com/sabithossen4/Gardening-Server-A10",
      images: [
        "https://i.ibb.co/4wG9cGDJ/Screenshot-2025-06-29-232913.png",
        "https://i.ibb.co/KxLZVYLT/Screenshot-2025-06-29-233111.png",
        "https://i.ibb.co/LdJws07B/Screenshot-2025-06-29-233356.png",        
      ],
    },
    {
      id:2,
      name: "Doctor Talk",
      description:
        "Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.",
      technologies: [
        "React",
        "Firebase",
        "Tailwind CSS",
        "node.js",
        "express.js",
        "MongoDB",
      ],
      challenges: [
        "Implementing real-time sync across users",
        "Manage CRUD operation properly",        
        "Manage all the user by unique id to manage their information in the database.",
      ],
      liveLink: "https://wooden-feast.surge.sh/",
      githubLink: "https://github.com/sabithossen4/DoctorHub",      
      images: [
        "https://i.ibb.co/hRQJZ035/Screenshot-2025-06-30-003901.png",
        "https://i.ibb.co/j91Fcp7J/Screenshot-2025-06-30-004008.png",
        "https://i.ibb.co/Q3pSJjqT/Screenshot-2025-06-30-004145.png",      
      ],
    },
    {
      id:3,
      name: "Course Hub",
      description: "A modern fully responsive course searching website project.",
      technologies: ["React", "Tailwind CSS", "DaisyUI", "Firebase"],
      challenges: [
        "Implementation of firebase authentication",
        "Handle the crashing of website after hard refreshing",
        "Implementing responsive design for all devices",
      ],
      liveLink: "https://assignment-11-3c1c2.web.app/",
      githubLink:
        "https://github.com/sabithossen4/Course-Management-Client-A11",
      serverLink: "https://github.com/sabithossen4/Course-Management-Server-A11",
      images: [
        "https://i.ibb.co/GfDkj6jf/Screenshot-2025-06-30-001953.png",
        "https://i.ibb.co/dsSmQkd5/Screenshot-2025-06-30-002202.png",
        "https://i.ibb.co/b5dnbYf0/Screenshot-2025-06-30-002310.png",
        
      ],
    },
  ];

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeProject, setActiveProject] = useState(0);
  const primaryColor = "#00ff94";
  const secondaryColor = "#00d1ff";

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-gray-950">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: primaryColor }}>
          {project.name}
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-1 md:h-1.5 mt-3 mx-auto w-24 md:w-32"
          style={{ backgroundColor: primaryColor, originX: 0 }}
        />
        <p className="text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto">
          {project.description}
        </p>
      </motion.div>

      {/* Swiper Slider */}
      <div className="w-full mb-8">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`${project.name} screenshot ${index + 1}`} className="w-full h-80 md:h-[500px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${primaryColor}20`,
                color: primaryColor,
                border: `1px solid ${primaryColor}30`,
              }}
              whileHover={{ scale: 1.05, backgroundColor: `${primaryColor}30` }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Challenges & Solutions</h3>
        <ul className="space-y-2">
          {project.challenges.map((challenge, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <span className="text-primary text-xl mr-2">•</span>
              <span className="text-gray-400">{challenge}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3 mb-6">
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-black"
          style={{ backgroundColor: primaryColor }}
          whileHover={{ scale: 1.05 }}
        >
          <FiExternalLink size={18} />
          Live Demo
        </motion.a>

        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold border"
          style={{ borderColor: primaryColor, color: primaryColor }}
          whileHover={{ backgroundColor: `${primaryColor}10`, scale: 1.05 }}
        >
          <FiGithub size={18} />
          Client Code
        </motion.a>

        {project.serverLink && (
          <motion.a
            href={project.serverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold border"
            style={{ borderColor: secondaryColor, color: secondaryColor }}
            whileHover={{ backgroundColor: `${secondaryColor}10`, scale: 1.05 }}
          >
            <FiServer size={18} />
            Server Code
          </motion.a>
        )}
      </div>

      {/* Full Width Home Button */}
<Link to="/">
  <motion.a
    id="project"
    className="gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl text-sm sm:text-base md:text-lg font-bold border w-full flex justify-center items-center"
   
    whileHover={{
      // backgroundColor: secondaryColor, 
      scale: 1.05,
    }}
    whileTap={{ scale: 0.95 }}
  >
    <FiHome size={18} />
    <span>Home</span>
  </motion.a>
</Link>

    </div>
  );
};

export default ProjectDetail;

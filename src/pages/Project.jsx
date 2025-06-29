import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiServer } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Project = () => {
  const [activeProject, setActiveProject] = useState(0);
  const primaryColor = "#00ff94";
  const secondaryColor = "#00d1ff";

  const projects = [
    {
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

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden"
    >
      <div className="w-full max-w-none lg:max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full text-center mb-12 md:mb-20"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
            style={{ color: primaryColor }}
          >
            My Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 md:h-1.5 mt-3 md:mt-4 mx-auto w-24 md:w-32"
            style={{ backgroundColor: primaryColor, originX: 0 }}
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 md:mt-6 max-w-2xl md:max-w-3xl mx-auto">
            Here are some of my featured projects with detailed case studies
          </p>
        </motion.div>

        {/* Project Navigation */}
        <div className="w-full flex justify-center mb-10 md:mb-16 overflow-x-auto px-4">
          <div className="flex space-x-2 md:space-x-4 bg-gray-900 rounded-full p-1 md:p-2 min-w-max">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all ${
                  activeProject === index
                    ? "bg-primary text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
                style={{
                  backgroundColor:
                    activeProject === index ? primaryColor : "transparent",
                }}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Display */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          {/* Image Slider with Autoplay */}
          <div className="w-full relative group h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <Swiper
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl"
              autoplay={{
                delay: 3000, // Rotate every 3 seconds
                disableOnInteraction: false, // Continue after user interaction
                pauseOnMouseEnter: true, // Pause when hovered
              }}
              loop={true}
            >
              {projects[activeProject].images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full bg-gray-800 relative">
                    <img
                      src={image}
                      alt={`${projects[activeProject].name} screenshot ${
                        index + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-6 lg:p-8">
                      <span className="text-white text-sm md:text-base lg:text-lg font-medium">
                        Screenshot {index + 1}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                background: `radial-gradient(circle at center, ${primaryColor}, transparent 70%)`,
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Project Details */}
          <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4">
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ color: primaryColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {projects[activeProject].name}
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {projects[activeProject].description}
            </motion.p>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-2 sm:mb-3 md:mb-4">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {projects[activeProject].technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium"
                    style={{
                      backgroundColor: `${primaryColor}20`,
                      color: primaryColor,
                      border: `1px solid ${primaryColor}30`,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: `${primaryColor}30`,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-2 sm:mb-3 md:mb-4">
                Challenges & Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {projects[activeProject].challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-primary text-xl sm:text-2xl mr-2 sm:mr-3">
                      •
                    </span>
                    <span className="text-base sm:text-lg md:text-xl text-gray-400">
                      {challenge}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Links */}
            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href={projects[activeProject].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl text-sm sm:text-base md:text-lg font-bold"
                style={{
                  backgroundColor: primaryColor,
                  color: "#030712",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink
                  size={18}
                  className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <span>Live Demo</span>
              </motion.a>

              <motion.a
                href={projects[activeProject].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl text-sm sm:text-base md:text-lg font-bold border"
                style={{
                  borderColor: primaryColor,
                  color: primaryColor,
                }}
                whileHover={{
                  backgroundColor: `${primaryColor}10`,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span>Client Code</span>
              </motion.a>

              {projects[activeProject].serverLink && (
                <motion.a
                  href={projects[activeProject].serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl text-sm sm:text-base md:text-lg font-bold border"
                  style={{
                    borderColor: secondaryColor,
                    color: secondaryColor,
                  }}
                  whileHover={{
                    backgroundColor: `${secondaryColor}10`,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiServer size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <span>Server Code</span>
                </motion.a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
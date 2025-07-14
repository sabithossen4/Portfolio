import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaLaptopCode } from "react-icons/fa";


const Education = () => {
  const primaryColor = "#00ff94";
  const primaryFaded = `${primaryColor}20`;
  const grayColor = "#6b7280";



  const educationData = [
  {
    icon: <FaUniversity className="text-3xl" />,
    title: "Bachelor Degree (Pass)",
    institution: "National University, Bangladesh",
    details: [      
      { label: "Session", value: "2021" },
      { label: "Current Status", value: "Running" },
    ],
    year: "2021 - Present",
  },
];


  const coursesData = [
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "MERN Stack Development",
      institution: "Programming Hero",
      description:
        "Completed comprehensive training in full-stack web development using MongoDB, Express, React, and Node.js",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Advanced JavaScript",
      institution: "Online Course",
      description:
        "Mastered modern JavaScript concepts including ES6+, async/await, and design patterns",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "UI/UX Design Fundamentals",
      institution: "Creative IT Institute",
      description:
        "Learned principles of user interface and experience design with Figma",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 bg-gray-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: primaryFaded,
              opacity: 0.15,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
              transition: {
                duration: Math.random() * 1 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full text-center mb-12 md:mb-20"
        >
          <h2
            className="text-5xl font-bold mb-4"
            style={{ color: primaryColor }}
          >
            Education Journey
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
            My academic path and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-8 text-white flex items-center gap-3"
          >
            <FaGraduationCap style={{ color: primaryColor }} />
            <span>Academic Background</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-6 top-0 h-full w-1 origin-top md:left-1/2 md:-translate-x-1/2"
              style={{ backgroundColor: primaryColor }}
            />

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 pl-10 md:pl-0 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-10 md:text-right"
                    : "md:ml-auto md:pl-10"
                }`}
              >
                {/* Year badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "md:right-0" : "md:left-0"
                  } z-10 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                    index % 2 === 0 ? "md:-mr-14" : "md:-ml-14"
                  }`}
                  style={{
                    backgroundColor: primaryFaded,
                    color: primaryColor,
                  }}
                >
                  {edu.year}
                </motion.div>

                {/* Timeline dot with pulse animation */}
                <motion.div
                  className="absolute top-4 left-0 w-5 h-5 rounded-full border-4 border-gray-900 transform -translate-x-1/2 md:left-1/2 z-10"
                  style={{ backgroundColor: primaryColor }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="absolute top-4 left-0 w-5 h-5 rounded-full transform -translate-x-1/2 md:left-1/2 z-0"
                  style={{ backgroundColor: primaryColor }}
                  animate={{
                    scale: [1, 1.5, 1.8],
                    opacity: [0.4, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                />

                {/* Education card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px -10px ${primaryColor}30`,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="p-6 rounded-xl bg-gray-900/70 border border-gray-800 backdrop-blur-sm shadow-lg overflow-hidden relative group"
                  style={{
                    borderLeftColor: primaryColor,
                    borderLeftWidth: "4px",
                  }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute -left-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        backgroundColor: primaryColor,
                        filter: "blur(40px)",
                      }}
                    />
                  </div>

                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    } relative z-10`}
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: primaryFaded,
                        boxShadow: `0 0 20px ${primaryColor}30`,
                      }}
                    >
                      {edu.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {edu.title}
                      </h4>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                  </div>

                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    } relative z-10`}
                  >
                    {edu.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="text-gray-300"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span
                          className="font-medium"
                          style={{ color: primaryColor }}
                        >
                          {detail.label}:{" "}
                        </span>
                        <span>{detail.value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-8 text-white flex items-center gap-3"
          >
            <FaLaptopCode style={{ color: primaryColor }} />
            <span>Professional Courses</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px -10px ${primaryColor}30`,
                }}
                className="relative group"
              >
                {/* Course card */}
                <div
                  className="h-full p-6 rounded-xl bg-gray-900/70 border border-gray-800 overflow-hidden relative"
                  style={{
                    boxShadow: `0 10px 30px -10px ${primaryColor}20`,
                    borderTopColor: primaryColor,
                    borderTopWidth: "3px",
                  }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-60"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}10 0%, transparent 70%)`,
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: primaryFaded,
                        boxShadow: `0 0 20px ${primaryColor}20`,
                      }}
                    >
                      {course.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {course.title}
                    </h4>
                    <p className="text-gray-400 mb-4">{course.institution}</p>
                    <p className="text-gray-300">{course.description}</p>

                    {/* Floating dots decoration */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-10 group-hover:opacity-30 transition-opacity">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: primaryColor,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
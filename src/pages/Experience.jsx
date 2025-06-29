import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaSearch } from "react-icons/fa";

const Experience = () => {
  const primaryColor = "#00ff94";
  const primaryFaded = `${primaryColor}30`;

  return (
    <section id="experience" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Current Status First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            y: -5,
            boxShadow: `0 10px 25px -5px ${primaryColor}20`,
          }}
          className="mb-20 p-8 rounded-xl bg-gray-900 border border-gray-800 text-center group relative overflow-hidden"
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${primaryColor}10, transparent 70%)`,
              }}
            />
          </div>

          <div
            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 relative z-10"
            style={{ backgroundColor: primaryFaded }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaSearch className="text-2xl" style={{ color: primaryColor }} />
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
            Actively Seeking First Opportunity
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto relative z-10">
            Freshly trained in full-stack development with hands-on project
            experience. Eager to contribute my skills in a professional
            environment.
          </p>
        </motion.div>

        {/* Learning Journey */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              My <span style={{ color: primaryColor }}>Coding Journey</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 md:h-1.5 mt-3 md:mt-4 mx-auto w-24 md:w-32 bg-primary"
            />
          </motion.div>

          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="md:w-1/4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: primaryFaded }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <FaGraduationCap
                      style={{ color: primaryColor }}
                      className="text-xl"
                    />
                  </motion.div>
                  <h3 className="text-white font-bold">Formal Training</h3>
                </div>
                <p className="text-gray-400 text-sm mt-2">2024 - 2025</p>
              </div>

              <motion.div
                className="md:w-3/4 bg-gray-900/50 p-6 rounded-xl border-l-4 relative overflow-hidden group-hover:bg-gray-900/70 transition-colors"
                style={{ borderLeftColor: primaryColor }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 10px 20px -5px ${primaryColor}20`,
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute -left-10 -top-10 w-32 h-32 rounded-full"
                    style={{
                      backgroundColor: primaryColor,
                      filter: "blur(40px)",
                      opacity: 0.2,
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 relative z-10">
                  MERN Stack Development
                </h3>
                <p className="text-gray-400 mb-4 relative z-10">
                  Programming Hero
                </p>

                <ul className="space-y-2 relative z-10">
                  {[
                    "Completed 500+ hours of intensive training",
                    "Built 3 full-stack applications with MongoDB, Express, React, Node.js",
                    "Learned industry best practices and modern tools",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span
                        style={{ color: primaryColor }}
                        className="mr-2 mt-1"
                      >
                        •
                      </span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="md:w-1/4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: primaryFaded }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <FaCode
                      style={{ color: primaryColor }}
                      className="text-xl"
                    />
                  </motion.div>
                  <h3 className="text-white font-bold">Hands-on Projects</h3>
                </div>
                <p className="text-gray-400 text-sm mt-2">2025 - Present</p>
              </div>

              <motion.div
                className="md:w-3/4 bg-gray-900/50 p-6 rounded-xl border-l-4 relative overflow-hidden group-hover:bg-gray-900/70 transition-colors"
                style={{ borderLeftColor: primaryColor }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 10px 20px -5px ${primaryColor}20`,
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute -left-10 -top-10 w-32 h-32 rounded-full"
                    style={{
                      backgroundColor: primaryColor,
                      filter: "blur(40px)",
                      opacity: 0.2,
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 relative z-10">
                  Practical Applications
                </h3>
                <p className="text-gray-400 mb-4 relative z-10">
                  Personal Portfolio
                </p>

                <ul className="space-y-2 relative z-10">
                  {[
                    "Developed responsive portfolio with animations",
                    "Created e-commerce demo with payment integration",
                    "Built RESTful APIs with JWT authentication",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span
                        style={{ color: primaryColor }}
                        className="mr-2 mt-1"
                      >
                        •
                      </span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
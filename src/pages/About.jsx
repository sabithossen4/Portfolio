 import profilePic from "./../assets/sabit.jpeg";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Image Section with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 10 },
          }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-64 h-64">
            <img
              src={profilePic}
              alt="Sabit Hossen"
              className="w-full h-full  rounded-full border-4 border-gray-700 shadow-2xl z-10 relative"
            />
            {/* Floating Tech Icons Around Image */}
            {[FaReact, FaNodeJs, SiMongodb, SiTailwindcss].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center"
                style={{
                  width: 50,
                  height: 50,
                  left: `${Math.cos(i * 1.57) * 140 + 100}px`,
                  top: `${Math.sin(i * 1.57) * 140 + 100}px`,
                }}
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  },
                }}
              >
                <Icon className="text-2xl" />
              </motion.div>
            ))}
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              animate={{
                boxShadow: [
                  "0 0 20px 5px rgba(0, 255, 148, 0.3)",
                  "0 0 30px 10px rgba(0, 255, 148, 0.5)",
                  "0 0 20px 5px rgba(0, 255, 148, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* About Content with Staggered Animations */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#00ff94]">
              About <span className="text-white">Me</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 md:h-1.5 mt-3 md:mt-4 mx-auto w-24 md:w-32 bg-primary"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              👋 I'm{" "}
              <span className="text-[#00ff94] font-semibold">
                Sabit Hossen
              </span>
              , a passionate Full-Stack MERN Developer from {" "}
              <span className="text-[#00ff94] font-semibold">
                BD South Asia.
              </span>{" "}
               I bridge hardware knowledge
              with cutting-edge web development to create innovative digital
              solutions.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              💻 I completed the{" "}
              <span className="text-[#a855f7]">MERN Stack Development</span>{" "}
              course from Programming Hero, building{" "}
              <span className="text-[#00ff94]">
                12+ production-ready applications
              </span>{" "}
              including complex dashboards, e-commerce systems, and real-time
              collaboration tools.
            </p>
          </motion.div>

          {/* Tech Stack with Hover Effects */}
          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#00ff94] mb-4 flex items-center">
              🚀 <span className="ml-2">Tech Stack</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <FaReact className="text-2xl" />,
                  name: "React.js",
                  color: "#00d8ff",
                },
                {
                  icon: <SiTailwindcss className="text-2xl" />,
                  name: "Tailwind",
                  color: "#38bdf8",
                },
                {
                  icon: <FaNodeJs className="text-2xl" />,
                  name: "Node.js",
                  color: "#68a063",
                },
                {
                  icon: <SiExpress className="text-2xl" />,
                  name: "Express",
                  color: "#ffffff",
                },
                {
                  icon: <SiMongodb className="text-2xl" />,
                  name: "MongoDB",
                  color: "#589636",
                },
                {
                  icon: <SiFirebase className="text-2xl" />,
                  name: "Firebase",
                  color: "#ffca28",
                },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all"
                >
                  <div style={{ color: tech.color }}>{tech.icon}</div>
                  <span className="text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Unique Skills */}
          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#00d1ff] mb-4 flex items-center">
              🧠 <span className="ml-2">What Sets Me Apart</span>
            </h3>
            <ul className="space-y-3">
              {[
                "Unique blend of engineering logic and creative design",
                "Strong problem-solving & system design skills",
                "Experience with authentication & dashboard UIs",
                "Eager to learn and grow in fast-paced environments",
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-start text-lg text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-[#00ff94] mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Goals Section */}
          <motion.div
            variants={item}
            className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#a855f7] mb-3 flex items-center">
              🎯 <span className="ml-2">My Goal</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Seeking <span className="text-[#00ff94]">internships</span> or{" "}
              <span className="text-[#00ff94]">entry-level roles</span> where I
              can contribute, tackle real-world challenges, and grow with a
              team.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={item}
            className="border-l-4 border-[#00ff94] pl-5 py-3 bg-gradient-to-r from-gray-800/40 to-transparent"
          >
            <p className="text-xl italic text-gray-300">
              "Every line of code I write takes me one step closer to the future
              I dream of."
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex justify-center gap-4 pt-6"
          >
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/sabithossen4",
                color: "#ffffff",
              },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/sabithossen",
                color: "#0a66c2",
              },
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/+8801911274560",
                color: "#25d366",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${social.color}20`,
                  color: social.color,
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
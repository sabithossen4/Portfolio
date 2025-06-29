import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-950/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        {/* Animated logo/icon */}
        <motion.div
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="mx-auto mb-6"
        >
          <FaCode className="text-5xl text-[#00ff94]" />
        </motion.div>

        {/* Loading text with gradient */}
        <motion.h2
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff94] to-[#00d1ff] mb-4"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Loading...
        </motion.h2>

        {/* Animated dots */}
        <div className="flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#00d1ff]"
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          className="mt-8 h-1 bg-gray-800 rounded-full w-64 mx-auto overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#00ff94] to-[#00d1ff]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
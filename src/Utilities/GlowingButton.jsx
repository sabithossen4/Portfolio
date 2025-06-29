import { motion } from "framer-motion";

const GlowingButton = ({
  children,
  onClick,
  icon: Icon,
  size = "md",
  fullWidth = false,
}) => {
  // Size variants
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold tracking-wider group transition-all duration-500
        border-2 border-transparent cursor-pointer
        ${sizeClasses[size]} 
        ${fullWidth ? "w-full" : ""}`}
      style={{
        color: "#00ff94",
        background: "rgba(0, 0, 0, 0.7)",
      }}
      initial={{
        boxShadow: "0 0 10px #00ff94",
        textShadow: "0 0 5px #00ff94",
      }}
      whileHover={{
        boxShadow: "0 0 20px #00ff94, 0 0 40px #00ff94",
        textShadow: "0 0 10px #00ff94",
        scale: 1.05,
        backgroundColor: "rgba(0, 255, 148, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated border */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 pointer-events-none"
        style={{ borderColor: "#00ff94" }}
        initial={{ opacity: 0.3, scale: 0.95 }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pulse glow */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#00ff94] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0.1, 0],
          scale: [0.8, 1.2, 1.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
        {Icon && (
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <Icon className="text-xl" />
          </motion.span>
        )}
        {children}
      </span>

      {/* Floating particles (visible on hover) */}
      {[...Array(4)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#00ff94] pointer-events-none"
          initial={{
            opacity: 0,
            scale: 0,
            x: `${Math.random() * 40 - 20}px`,
            y: `${Math.random() * 40 - 20}px`,
          }}
          whileHover={{
            opacity: [0, 0.6, 0],
            scale: [0, 0.8, 0],
            transition: {
              delay: i * 0.1,
              duration: 1.5,
              repeat: Infinity,
            },
          }}
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
          }}
        />
      ))}
    </motion.button>
  );
};

export default GlowingButton;
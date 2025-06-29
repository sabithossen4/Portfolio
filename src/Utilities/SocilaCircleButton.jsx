import { motion } from "framer-motion";
const SocialCircleButton = ({
  icon: Icon,
  onClick,
  size = "md",
  bgColor = "rgba(0, 0, 0, 0.7)",
  glowColor = "#00ff94",
}) => {
  // Size variants for perfect circles
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-base",
    lg: "w-20 h-20 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative flex items-center justify-center 
      rounded-full font-bold cursor-pointer
      ${sizeClasses[size]}`}
      style={{
        color: glowColor,
        background: bgColor,
        boxShadow: `0 0 10px ${glowColor}`,
      }}
      initial={{
        textShadow: `0 0 5px ${glowColor}`,
      }}
      whileHover={{
        boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
        textShadow: `0 0 10px ${glowColor}`,
        scale: 1.05,
        backgroundColor: `${glowColor}20`, // 20% opacity
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated border */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 pointer-events-none"
        style={{ borderColor: glowColor }}
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
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ backgroundColor: glowColor }}
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

      {/* Icon */}
      <Icon className="text-xl relative z-10" />

      {/* Floating particles */}
      {[...Array(4)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ backgroundColor: glowColor }}
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

export default SocialCircleButton;
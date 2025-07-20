'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // The main container is a full screen, used for centering the content
    // and as the final white background.
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-white">
      {/* Animation Overlay */}
      <motion.div
        // This div acts as the animating background layer.
        className="absolute top-0 left-0 z-10 h-full w-full"
        initial={{ backgroundColor: '#ffffff' }} // Starts white
        animate={{
          // Keyframe animation: white -> black -> white
          backgroundColor: ['#ffffff', '#000000', '#ffffff'],
        }}
        transition={{
          duration: 1.5, // Total duration for the color transition
          ease: 'easeInOut',
          // Maps the timing of the keyframes
          times: [0, 0.5, 1],
        }}
      />

      {/* Animated Text */}
      <motion.div
        // This div wraps the text and sits on top of the animation overlay
        className="relative z-20 overflow-hidden"
      >
        <motion.p
          className="text-[8rem] font-bold uppercase leading-none text-black max-md:text-[3rem]"
          initial={{ y: '100%' }} // Starts hidden below
          animate={{ y: '0%' }} // Slides into view
          transition={{
            delay: 1.5, // Delay until the background animation is complete
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          AKSHAT
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
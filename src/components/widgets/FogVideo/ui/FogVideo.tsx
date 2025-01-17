'use client';

import { motion } from 'framer-motion';

export const FogVideo = () => {
  return (
    <div className="fixed left-0 top-0 z-[-1] h-full w-full opacity-80">
      <motion.video
        autoPlay
        loop
        muted
        preload="auto"
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover opacity-50 backdrop-blur-sm"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      >
        <source src="/video/Fog.webm" type="video/webm" />
        <source src="/video/Fog.mp4" type="video/mp4" />
      </motion.video>
    </div>
  );
};

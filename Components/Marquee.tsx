"use client"
import { motion } from "framer-motion";
import React from "react";

export const Marquee = ({children , toRight}:{children:React.ReactNode; toRight:boolean;}) => {
  return (
    
    <div className="relative overflow-hidden h-fit w-[96vw] ">
      {/* Left and right gradient shading */}
      <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee content */}
      <motion.div
        className="flex space-x-8 whitespace-nowrap pointer-events-none"
        animate={{ x: toRight? ["0%", "-100%"] : ["-100%","0%"] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Marquee items (repeated twice for continuous effect) */}
        {children}
        

        {/* Duplicated content */}
        {children}
        
      </motion.div>
    </div>

  );
};

export default Marquee;


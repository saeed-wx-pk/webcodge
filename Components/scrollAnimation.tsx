"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ children ,delay }: { children: React.ReactNode; delay?:number; }) => {
  let defaultDelay ;
  if(delay){
    defaultDelay = delay
  }else{
    defaultDelay = 0.7;
  }
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Adjust threshold for better detection on mobile
    );

    if (ref.current) {
      observer.observe(ref.current);

      // Check if element is already in view on load
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="sr-only">{children}</div>
      <motion.div
        ref={ref}
        initial={{ y: 10, opacity: 0, scale: 1 }} // Start below the view and invisible
        animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}} // Move to original position, become visible
        transition={{ duration: 0.4, delay: defaultDelay, ease: 'easeInOut' }} // Add delay of 0.5s
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;

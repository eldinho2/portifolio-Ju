"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface AnimateProps {
  children: ReactNode;
  className?: string;
  time?: number;
  onView?: boolean;
}

export const FadeIn = ({
  children,
  className,
  time = 0.3,
  onView,
}: AnimateProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return onView ? (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      {children}
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: time }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeFromRigth = ({
  children,
  className,
  time = 0.3,
  onView,
}: AnimateProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeLeftAnimation = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: time,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return onView ? (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      {children}
    </div>
  ) : (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeLeftAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeFromLeft = ({
  children,
  className,
  time = 0.3,
  onView,
}: AnimateProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeLeftAnimation = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: time,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return onView ? (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}
    >
      {children}
    </div>
  ) : (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeLeftAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

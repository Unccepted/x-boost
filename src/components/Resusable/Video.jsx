import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import mainVideo from "../../video/main-video.mp4";
function Video() {
  const [isInView, setIsInView] = useState(false);
  return (
    <InView onChange={() => setIsInView(!isInView)}>
      {({ inView, ref }) => (
        <motion.video
          ref={ref}
          src={mainVideo}
          className={`${
            isInView ? "sticky" : "relative"
          }rounded-xl w-72 h-full object-cover`}
          autoPlay
          loop
          animate={{ x: inView ? 0 : "-50vw" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </InView>
  );
}

export default Video;

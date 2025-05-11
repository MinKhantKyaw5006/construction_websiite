"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    text: "Successful Projects",
  },
  {
    endCountNum: 32,
    endCountText: "k",
    text: "Happy Clients",
  },
  {
    endCountNum: 26,
    endCountText: "+",
    text: "Years of Experiences",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full text-white">
  <div className="container mx-auto h-full">
    <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
      {statsData.map((item, index) => (
        <div className="w-full text-center" key={index}>
          <div className="text-5xl font-semibold">
            {inView && (
              <>
                <CountUp start={0} end={item.endCountNum} delay={0.5} duration={3} />
              </>
            )}
            {item.endCountText}
          </div>
          <p className="text-sm tracking-wide">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Stats;

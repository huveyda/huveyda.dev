import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-6">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-5 xs:ml-2">
          <Details
            type="Bachelor's Degree in Mathematics"
            time="2016"
            place="Kocaeli University / in Turkey"
            info="The Bachelor in Mathematics Department is well-regarded for providing students with a comprehensive understanding of mathematical concepts and applications, offering a diverse range of courses such as analysis, topology, and numerical methods, which lay a strong foundation for various academic and professional pursuits."
          />
          <Details
            type="Master Degree of Educational Technologies"
            time="2020"
            place="Bahcesehir University / in Turkey"
            info="During my master's program, I specialized in instructional design and gained expertise in user-centered UI/UX design, allowing me to create engaging and effective educational materials and intuitive user interfaces. This dual skill set empowers me to enhance learning outcomes and improve the overall user experience in educational settings. My master's degree from Bahcesehir University equips me to integrate technology into education while prioritizing innovative UI/UX design principles."
          />
          <Details
            type="Software Engineer Bootcamp"
            time="2023"
            place="The Manchester of University Certificate / in London"
            info="At the Manchester University Bootcamp in London, I stood out with a commendable 96% average grade, ranking 17th among 878 students. This success reflects my mastery of crucial technologies like Python, Django, SQL, and GraphQL, applied adeptly to real-world software engineering projects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;

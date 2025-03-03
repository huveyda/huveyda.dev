import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-7 shadow-dark cursor-pointer absolute
      dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold
      "
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-7 shadow-dark cursor-pointer
          dark:text-dark dark:bg-light
          lg:p-6 md:p-4  xs:text-xs xs:p-2
          "
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-25vw" y="-1vw" />
        <Skill name="HTML" x="2vw" y="24vw" />
        <Skill name="JavaScript" x="19vw" y="9vw" />
        <Skill name="ReactJS" x="-1vw" y="12vw" />
        <Skill name="NextJS" x="15vw" y="-21vw" />
        <Skill name="Web Design" x="30vw" y="5vw" />
        <Skill name="Figma" x="-37vw" y="1vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-20vw" />
        <Skill name="React Native" x="-15vw" y="21vw" />
        <Skill name="Python" x="13vw" y="-7vw" />
        <Skill name="SQL" x="20vw" y="-10vw" />
        <Skill name="Django" x="-15vw" y="-7vw" />
        <Skill name="Git" x="17vw" y="17vw" />
        <Skill name="Github" x="-16vw" y="-22vw" />
        <Skill name="REST API" x="30vw" y="-13vw" />
        <Skill name="TypeScript" x="-25vw" y="11vw" />
        <Skill name="Web-pack" x="-30vw" y="-15vw" />
      </div>
    </>
  );
};

export default Skills;

import React, { useEffect } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic2-removebg-preview.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Huveyda Tukle | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="All life is problem solving."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                I'm a London-based Software Developer with a passion for
                innovation. At Datametrik, I contributed to SaaS projects like
                Fisheque and Fisheque Project Mobile, mastering React, React
                Native TypeScript, and Agile Scrum. With an adept understanding
                of Git and REST API integration, I ensured the seamless flow of
                data communication.
              </p>
              <p className="my-4 font-medium">
                My teaching experience as a Math Teacher at Bahcesehir Collage
                allowed me to revitalize the curriculum, leading to a 15%
                increase in student engagement and 8% improvement in test
                scores. In addition, I served as an Educational Technologist,
                working with non-government organizations to manage and execute
                educational projects, showcasing my project management expertise
                and cross-functional teamwork. My skills also extend to
                designing captivating Math Escape Room activities that foster
                critical thinking and create dynamic classroom atmospheres.
              </p>
              <p className="font-medium">
                I'm proficient in Python, Django, SQL, and GraphQL, ranking 17th
                out of 878 students in my Manchester University Bootcamp. My
                diverse experiences make me a versatile and accomplished
                individual in technology, education, project management, and
                educational game design.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
            xl:col-span-4 md:order-1 md:col-span-8
            "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="developer"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px 50vw,33vw "
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-2xl xs:text-2xl text-primary">
                  <AnimatedNumbers value={5} />
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-md sm:text-base xs:text-sm"
                >
                  years of experience/EdTech
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={750} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-md sm:text-base xs:text-sm"
                >
                  satisfied students
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={500} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-md sm:text-base xs:text-sm
                "
                >
                  satisfied teachers
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-md sm:text-base xs:text-sm
                "
                >
                  training effectiveness
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-md sm:text-base xs:text-sm
                "
                >
                  game projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={1} />
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-md sm:text-base xs:text-sm
                "
                >
                  thesis
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl text-primary">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-md sm:text-base xs:text-sm
                "
                >
                  years of experience / Dev.
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-2xl xs:text-2xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-md sm:text-base xs:text-sm
                "
                >
                  software projects
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

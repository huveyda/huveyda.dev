import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import thesisPic from "../../public/images/edtech/thesisPic.png";
import geometryPic from "../../public/images/edtech/geometry.png";
import dataPic from "../../public/images/edtech/measurementand data.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const Thesis = ({ type, title, summary, img, link }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.4rem] bg-dark rounded-br-3xl dark:bg-light 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href="/HuveydaTukle_Thesis.pdf"
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href="/HuveydaTukle_Thesis.pdf"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit the Thesis
          </Link>
        </div>
      </div>
    </article>
  );
};

const Books = ({ title, type, img, link }) => {
  return (
    <article
      className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
    dark:bg-dark dark:border-light
    xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl
      dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] 
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px 50vw,50vw "
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6 mt-3">
        <span className="text-primary font-medium text-xl  lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center ">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-light text-dark border border-2 border-solid border-dark 
            hover:bg-dark hover:text-light hover:border-light p-2 px-6 text-lg font-semibold"
          >
            Visit Book
          </Link>
        </div>
      </div>
    </article>
  );
};

const edtech = () => {
  return (
    <>
      <Head>
        <title>Huveyda Tukle | EdTech Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Inspire, Learn, Grow"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <Thesis
                title="The Effect Of Educational Escape Room Game Designed For Mathematics Course On Students’ Achievement And Students’ Opinions About Escape Room Game"
                img={thesisPic}
                summary="Incorporating educational escape games into the 6th-grade Mathematics curriculum proved to be a successful approach, as a study involving two groups – one playing the games and the other following the traditional curriculum – demonstrated. Over the course of four weeks, the experimental group, working as teams, engaged with escape games designed to align with their learning objectives for a total of eight hours. After analyzing academic achievements and interviewing six students from the experimental group, it was clear that this approach led to improved problem-solving skills, sustained learning, and increased academic success, highlighting the positive impact of game-based learning in children's education."
                link="/"
                type="Thesis / Master Degree of Educational Technologies"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Books
                title="The Escape Book for Math about Measurement & Data"
                img={geometryPic}
                link="https://amzn.to/495SfR5"
                type="Escape Math: Measurement & Data Adventure"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Books
                title="The Escape Book for Math about Measurement & Data"
                img={dataPic}
                link="https://amzn.to/46FgymK"
                type="Escape Math: Measurement & Data Adventure"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default edtech;

import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { data } from "autoprefixer";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
          by&nbsp;
          <Link
            href="http://www.linkedin.com/in/huveydatukle"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            HuveydaTukle
          </Link>
        </div>
        <Link
          href="http://www.linkedin.com/in/huveydatukle"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

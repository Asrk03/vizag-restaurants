import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="font-mono flex flex-wrap items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center pb-[15%]">
          <h1 className="font-bold text-3xl mb-8 text-center">Namaste World</h1>
          <p className="text-center w-[500px] mx-auto">
            I am Arnab Sarkar currently studying in VIIT Duvvada, B.Tech
            Information Technology II year. I am a student looking to gain some
            experience in web development.
            <br />
            <span className="block mt-4 font-bold text-xl">
              HERE ARE MY SOCIALS:
            </span>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              to="https://linkedin.com/in/asrk06"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              to="https://github.com/asrk03"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
                <Link
                to="https://twitter.com/arnab0663"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Twitter
                </Link>
                <Link to="">Resume</Link>
            </div>
            </div>
        </div>
    </>
  );
};

export default Contact;

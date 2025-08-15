import html from "../assets/HTML5_logo_and_wordmark.svg.png";
import css from "../assets/CSS3_logo_and_wordmark.svg.png";
import js from "../assets/Javascript_badge.svg.png";
import tailwind from "../assets/tailwind_logo-removebg-preview.png";
import bootstrap from "../assets/png-transparent-bootstrap-plain-logo-icon-thumbnail.png";
import daisy from "../assets/favicon-192.png";
import react from "../assets/react-logo.png";
import mongodb from "../assets/png-transparent-mongodb-plain-wordmark-logo-icon.png";
import express from "../assets/express.png";
import node from "../assets/node-js-icon-454x512-nztofx17.png";
import next from "../assets/next.jpg";
import ts from "../assets/ts.png";
import wix from '../assets/wix.png';
import webflow from '../assets/icons8-webflow-100.png';
import redux from '../assets/redux_logo.png';
import SectionTitle from "./SectionTitle";
import { motion } from 'framer-motion';


const Skills = () => {

    const skillItems = [
        {item: 1, skillSrc: html},
        {item: 2, skillSrc: css},
        {item: 3, skillSrc: js},
        {item: 4, skillSrc: tailwind},
        {item: 5, skillSrc: bootstrap},
        {item: 6, skillSrc: daisy},
        {item: 7, skillSrc: react},
        {item: 8, skillSrc: mongodb},
        {item: 9, skillSrc: express},
        {item: 10, skillSrc: node},
        {item: 11, skillSrc: next},
        {item: 12, skillSrc: ts},
        {item: 13, skillSrc: redux},
        {item: 14, skillSrc: wix},
        {item: 15, skillSrc: webflow},
    ]

  return (
    <div className="py-10 md:py-20 bg-gradient-to-tr from-[#0f0b19] to-[#142D55]">
      <SectionTitle title="My Skills"></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 my-10">
        {
            skillItems.map((skill, i)=>(
                <div key={i} className="card bg-transparent shadow-xl border border-alpha p-2 ">
          <figure>
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={skill.skillSrc}
              className="w-[100px] h-[100px]"
              alt={skill.skillSrc}
            />
          </figure>
        </div>
            ))
        }
        
      </div>

    </div>
  );
};

export default Skills;

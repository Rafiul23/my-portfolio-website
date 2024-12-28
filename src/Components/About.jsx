import SectionTitle from "./SectionTitle";
import myPic from '../assets/rafiul1.png';
import html from '../assets/HTML5_logo_and_wordmark.svg.png';
import css from '../assets/CSS3_logo_and_wordmark.svg.png';
import js from '../assets/Javascript_badge.svg.png';
import tailwind from '../assets/png-transparent-tailwind-css-hd-logo.png';
import bootstrap from '../assets/png-transparent-bootstrap-plain-logo-icon-thumbnail.png';
import daisy from '../assets/favicon-192.png';
import react from '../assets/react-logo.png';
import mongodb from '../assets/png-transparent-mongodb-plain-wordmark-logo-icon.png';
import express from '../assets/express.png';
import node from '../assets/node-js-icon-454x512-nztofx17.png';
import next from '../assets/next.jpg';
import ts from '../assets/ts.png';
import { motion } from 'framer-motion';
const About = () => {
    return (
        <div>
            <SectionTitle
                title='About Me'
            ></SectionTitle>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="">
                        <motion.img
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.3,
                                x: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: 'easeIn',
                                duration: 1
                            }}
                            src={myPic} className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-full shadow-2xl" />
                    </div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        className="md:w-1/2 w-full p-4 space-y-2">
                        <h1 className="lg:text-5xl md:text-3xl text-xl text-alpha font-bold">Name: Md. Rafiul Islam</h1>
                        <p className="text-xl  text-alpha">Objective: To work as a Front End Developer in any foreign or local company. </p>
                        <p className="text-xl">Bio: I am a MERN stack web developer. I have learned HTML, CSS, Javascript, Tailwind CSS, Daisyui, React and Next for front end. I have learned Mongodb and Express for back end development.</p>
                        <p className="text-alpha  font-semibold">Education: Completed BSc. in Civil Engineering from Military Institute of science and Technology.</p>
                    </motion.div>
                </div>
            </div>

            <SectionTitle
                title='My Skills'
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 my-10">
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={html} className="w-[100px] h-[100px]" alt="html" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={css} className="w-[100px] h-[100px]" alt="css" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={js} className="w-[100px] h-[100px]" alt="js" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={tailwind} className="w-[100px] h-[100px]" alt="tailwind" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={daisy} className="w-[100px] h-[100px]" alt="daisyui" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={bootstrap} className="w-[100px] h-[100px]" alt="bootstrap" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={react} className="w-[100px] h-[100px]" alt="react" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={node} className="w-[100px] h-[100px]" alt="node" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={mongodb} className="w-[100px] h-[100px]" alt="mongodb" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={express} className="w-[100px] h-[100px]" alt="express" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={next} className="w-[100px] h-[100px]" alt="next" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            x: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: 'easeIn',
                            duration: 1
                        }}
                        src={ts} className="w-[100px] h-[100px]" alt="typescript" /></figure>
                </div>
            </div>

        </div>
    );
};

export default About;
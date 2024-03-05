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

const About = () => {
    return (
        <div>
            <SectionTitle
                title='About Me'
            ></SectionTitle>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="">
                        <img src={myPic} className="w-[400px] h-[400px] rounded-full shadow-2xl" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h1 className="text-5xl text-alpha font-bold">Name: Md. Rafiul Islam</h1>
                        <p className="text-xl p-2 text-alpha">Objective: To work as a React developer in any foreign or local company. </p>
                        <p className="text-xl p-2">Bio: I am a front end focused MERN stack web developer. I have learned HTML, CSS, javascript, Tailwind css with Daisyui, and React. Currently, I am learning back end development.</p>
                        <p className="text-alpha p-2 font-semibold">Education: Completed BSc. in Civil Engineering from Military Institute of science and Technology.</p>
                    </div>
                </div>
            </div>

            <SectionTitle
                title='My Skills'
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={html} className="w-[100px] h-[100px]" alt="html" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={css} className="w-[100px] h-[100px]" alt="css" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={js} className="w-[100px] h-[100px]" alt="js" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={tailwind} className="w-[100px] h-[100px]" alt="tailwind" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={daisy} className="w-[100px] h-[100px]" alt="daisyui" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={bootstrap} className="w-[100px] h-[100px]" alt="bootstrap" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={react} className="w-[100px] h-[100px]" alt="react" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={node} className="w-[100px] h-[100px]" alt="node" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={mongodb} className="w-[100px] h-[100px]" alt="mongodb" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl border border-alpha p-2 hover:bg-base-200">
                    <figure><img src={express} className="w-[100px] h-[100px]" alt="express" /></figure>
                </div>
            </div>
            
        </div>
    );
};

export default About;
import React from 'react'
import { FaExternalLinkAlt, FaCode, FaGithub } from "react-icons/fa";
// import texteditor from "../assets/texteditor.png";
import FoodHub from "../assets/food hub.png";
import HappyToy from "../assets/happy toy.png";

const Project = () => {
    return (
        <>
            <section id="work" className="min-h-screen w-full bg-gray-950 text-white p-8">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
                    <div className="w-75 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                </div>
                
                {/* Add a wrapper div with flex and gap */}
                <div className="flex flex-col gap-12">
                    {/* First Project Card */}
                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#B185FF] via-[#FF66C4] to-[#7B2EFF] rounded-2xl p-[2px] shadow-xl hover:shadow-2xl transition-all duration-300">
                        {/* Inner dark content area */}
                        <div className="flex flex-col md:flex-row items-center bg-[#0F0F10] rounded-2xl overflow-hidden p-6 md:p-10 gap-8">

                            {/* Left: Project Image */}
                            <div className="flex-1 flex justify-center">
                                <div className="bg-gradient-to-b from-[#1E1E20] to-[#0B0B0C] rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                                    <img
                                        // src= {texteditor}
                                        alt="Simple Text Editor project screenshot"
                                        className="w-[500px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right: Project Details */}
                            <div className="flex-1 text-white space-y-4">
                                <h3 className="text-sm font-semibold tracking-widest text-[#C69EFF]">
                                    Simple Text Editor
                                </h3>
                                <h2 className="text-4xl font-bold leading-tight">Text Utility</h2>

                                <p className="text-gray-300 leading-relaxed">
                                   Simple Text Editor is a versatile text utility tool that allows you to edit, format, and manipulate text with ease. It includes features like word count, character count, and more.
                                </p>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {["React", "Bootstrap"].map(
                                        (tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm bg-[#1C1C1E] rounded-full border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-6">
                                    <a
                                        // डमी लाइव प्रोजेक्ट लिंक
                                        href="https://simpletexteditor.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
                                    >
                                        <FaExternalLinkAlt />
                                        View Project
                                    </a>
                                    <a
                                        // डमी सोर्स कोड लिंक
                                        href="https://github.com/KishanKumarSolanki/Simple-Text-Editor"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border border-gray-500 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-800 transition"
                                    >
                                        <FaGithub />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Project Card */}
                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#B185FF] via-[#FF66C4] to-[#7B2EFF] rounded-2xl p-[2px] shadow-xl hover:shadow-2xl transition-all duration-300">
                        {/* Inner dark content area */}
                        <div className="flex flex-col md:flex-row items-center bg-[#0F0F10] rounded-2xl overflow-hidden p-6 md:p-10 gap-8">

                            {/* Left: Project Image */}
                            <div className="flex-1 flex justify-center">
                                <div className="bg-gradient-to-b from-[#1E1E20] to-[#0B0B0C] rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                                    <img
                                        src= {FoodHub}
                                        alt="Simple Text Editor project screenshot"
                                        className="w-[500px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right: Project Details */}
                            <div className="flex-1 text-white space-y-4">
                                <h3 className="text-sm font-semibold tracking-widest text-[#C69EFF]">
                                   Indian Food Hub
                                </h3>
                                <h2 className="text-4xl font-bold leading-tight">Restruant Website</h2>

                                <p className="text-gray-300 leading-relaxed">
                                  Indian Food Hub is more than just a restaurant; it's a gateway to the rich heritage of Indian cuisine. Our mission is to provide you with the most authentic and comforting flavors from the diverse regions of India.
                                </p>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {["HTML", "CSS" , "Javascript"].map(
                                        (tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm bg-[#1C1C1E] rounded-full border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-6">
                                    <a
                                        // डमी लाइव प्रोजेक्ट लिंक
                                        href="https://food-hub-gold.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
                                    >
                                        <FaExternalLinkAlt />
                                        View Project
                                    </a>
                                    <a
                                        // डमी सोर्स कोड लिंक
                                        href="https://github.com/KishanKumarSolanki/Food-Hub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border border-gray-500 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-800 transition"
                                    >
                                        <FaGithub />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Project Card */}
                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#B185FF] via-[#FF66C4] to-[#7B2EFF] rounded-2xl p-[2px] shadow-xl hover:shadow-2xl transition-all duration-300">
                        {/* Inner dark content area */}
                        <div className="flex flex-col md:flex-row items-center bg-[#0F0F10] rounded-2xl overflow-hidden p-6 md:p-10 gap-8">

                            {/* Left: Project Image */}
                            <div className="flex-1 flex justify-center">
                                <div className="bg-gradient-to-b from-[#1E1E20] to-[#0B0B0C] rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                                    <img
                                        src= {HappyToy}
                                        alt="Simple Text Editor project screenshot"
                                        className="w-[500px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right: Project Details */}
                            <div className="flex-1 text-white space-y-4">
                                <h3 className="text-sm font-semibold tracking-widest text-[#C69EFF]">
                                    Happy Toys 
                                </h3>
                                <h2 className="text-4xl font-bold leading-tight">E Commerce</h2>

                                <p className="text-gray-300 leading-relaxed">
                                  Welcome to Happy Toys, your ultimate destination for high-quality, fun, and educational toys that spark joy and ignite creativity in children of all ages. We believe that play is not just a pastime; it's a fundamental part of a child's development, a way for them to explore the world, learn new skills, and express themselves.
                                </p>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {["React", "Bootstrap"].map(
                                        (tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm bg-[#1C1C1E] rounded-full border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-6">
                                    <a
                                        // डमी लाइव प्रोजेक्ट लिंक
                                        href="https://happy-toy.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
                                    >
                                        <FaExternalLinkAlt />
                                        View Project
                                    </a>
                                    <a
                                        // डमी सोर्स कोड लिंक
                                        href="https://github.com/KishanKumarSolanki/react/tree/main/happy-toy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border border-gray-500 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-800 transition"
                                    >
                                        <FaGithub />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project
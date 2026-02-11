import React from 'react'

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen w-full bg-gray-950 text-white py-16 px-6 flex flex-col items-center">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
                    <div className="w-49 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                    <p className="text-gray-400 mt-4 text-lg font-semibold">
                        A showcase of my professional journey, highlighting key roles and achievements that have shaped my career in the tech industry
                    </p>
                </div>
            </div>
            <div className='max-w-3xl w-full bg-gray-900/40 backdrop-blur-xl px-6 sm:px-12 py-10 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(130,69,236,0.15)] transition-all duration-500 hover:border-[#8245ec]/40 '>

                {/* Heading Section */}
                <div className="mb-4">
                    <h3 className="text-[#8245ec] text-sm font-bold uppercase tracking-widest mb-1">Web Development Intern</h3>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Hope and Life Foundation</h2>
                </div>

                {/* Professional Paragraph */}
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
                    Contributed to the development of web solutions while collaborating effectively within a cross-functional team.
                    Gained hands-on expertise in <span className="text-white font-medium">Project Management</span> and
                    <span className="text-white font-medium"> Client Communication</span>. Key achievement includes the seamless
                    integration of <span className="text-[#8245ec]">Razorpay Payment Gateway</span> to facilitate secure online transactions.
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Key Projects Delivered:
                    </p>
                    <div className="flex flex-col gap-3">
                        {/* Project 1 */}
                        <div className="flex items-center group cursor-pointer">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8245ec] mr-3 group-hover:scale-150 transition-transform"></div>
                            <span className="text-white font-medium group-hover:text-[#8245ec] transition-colors">
                                Tail of Hope
                            </span>
                            <a href='https://tailofhopefoundation.org/' className="ml-auto text-xs text-pink-500 italic">View Live Project ↗</a>
                        </div>

                        {/* Project 2 */}
                        <div className="flex items-center group cursor-pointer">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8245ec] mr-3 group-hover:scale-150 transition-transform"></div>
                            <span className="text-white font-medium group-hover:text-[#8245ec] transition-colors">
                                Nanhi Muskan Foundation
                            </span>
                            <a href='https://nanhimuskanfoundation.org/' className="ml-auto text-xs text-pink-500 italic">View Live Project ↗</a>
                        </div>
                    </div>
                </div>

                {/* Optional: Skill Tags */}
                {/* <div className="flex flex-wrap gap-2 mt-6">
                    {['React.js', 'Razorpay', 'Teamwork', 'API Integration'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                            {skill}
                        </span>
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default Experience
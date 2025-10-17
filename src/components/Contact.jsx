import React from 'react'
import { BorderBeam } from './ui/border-beam';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen w-full bg-gray-950 text-white p-8">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
                <div className="w-30 h-1 bg-[#8245ec] mx-auto mt-2"></div>
            </div>

            {/* Wrap the form in a relative container */}
            <div className="relative max-w-2xl mx-auto">
                {/* Add the form content */}
                <div className="relative bg-gray-900/50 rounded-lg p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
             
                <BorderBeam 
                    size={200}
                    duration={8}
                    colorFrom="#B185FF"
                    colorTo="#7B2EFF"
                    borderWidth={2}
                    className="rounded-2xl"
                    style={{
                        borderRadius: '16px', // Explicit border radius
                    }}
                />
            </div>
        </section>   
    )
}

export default Contact
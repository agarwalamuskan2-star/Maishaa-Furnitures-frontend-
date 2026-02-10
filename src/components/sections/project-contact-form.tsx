import React from 'react';

export default function ProjectContactForm() {
    return (
        <section className="bg-[#f0f0f0] py-16 md:py-24">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                        We can help you with your project
                    </h2>
                    <p className="text-gray-600 text-[15px] md:text-16px max-w-2xl mx-auto leading-relaxed">
                        Share your project details with us and where we can help. From catalogs to
                        3D rendering, from simple advice to crafting custom-made furniture, we're
                        dedicated to ensuring the success of your outdoor furniture project.
                    </p>
                    <p className="text-gray-600 mt-4 italic">
                        More information, please contact us through this form.
                    </p>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <input
                            type="text"
                            placeholder="Full name *"
                            className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Company *"
                            className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black"
                            required
                        />
                        <select className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black text-gray-500">
                            <option value="">Profile *</option>
                            <option value="Architect">Architect</option>
                            <option value="Designer">Designer</option>
                            <option value="Developer">Developer</option>
                            <option value="Owner">Owner</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Country *"
                            className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Province / State *"
                            className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="City *"
                            className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone *"
                            className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <textarea
                            placeholder="Comments *"
                            rows={4}
                            className="w-full p-4 bg-white border border-gray-300 focus:outline-none focus:border-black"
                            required
                        ></textarea>
                    </div>

                    <div className="space-y-2 py-4">
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 text-black focus:ring-black" required />
                            <span className="text-sm text-gray-600">I have read and accept the privacy policy *</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 border-gray-300 text-black focus:ring-black" />
                            <span className="text-sm text-gray-600">I want to subscribe to the newsletter.</span>
                        </label>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="bg-black text-white px-12 py-4 text-lg font-bold hover:bg-gray-800 transition-colors uppercase tracking-widest min-w-[200px]"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

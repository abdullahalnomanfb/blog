const Content = () => {
    return (
        <div className="mb-12">
            <main className="min-h-screen relative bg-white">
                <div className="bg-gradient-to-r from-[#028ab2] to-cyan-600 min-h-screen flex items-center justify-center rounded-lg">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-">
                        <div className="w-full lg:w-1/2 text-white space-y-8">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                Do you want to
                                <br />
                                start a project?
                            </h1>
                            <p className="text-xl">
                                Drop us a line for your project thought or for sharing the news
                                <br />
                                about your company. Yes we check this mailbox frequently!
                            </p>
                            <div className="h-px bg-white/30 w-full my-8"></div>

                            <div className="flex flex-wrap gap-6">
                                <div className="bg-white rounded-lg p-4 w-32 text-center">
                                    <div className="text-blue-600 text-3xl font-bold">10+</div>
                                    <div className="text-cyan-600 text-sm">Years in business</div>
                                </div>

                                <div className="bg-white rounded-lg p-4 w-32 text-center">
                                    <div className="text-blue-600 text-3xl font-bold">100+</div>
                                    <div className="text-cyan-600 text-sm">In-house employees</div>
                                </div>

                                <div className="bg-white rounded-lg p-4 w-40 text-center">
                                    <div className="text-blue-600 text-3xl font-bold">250+</div>
                                    <div className="text-cyan-600 text-sm">Successful delivery project</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 mt-8">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">Clutch</span>
                                    <div className="flex">
                                        <span className="text-yellow-400 text-2xl">★</span>
                                        <span className="text-yellow-400 text-2xl">★</span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">Top Rated Plus</span>
                                    <div className="flex items-center">
                                        <span className="text-green-400 font-bold">Upwork</span>
                                        <span className="text-yellow-400 text-2xl ml-2">★</span>
                                        <span className="text-yellow-400 text-2xl">★</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 max-w-md">
                            <div className="bg-white rounded-lg p-6 shadow-lg">
                                <h2 className="text-3xl font-bold text-cyan-600 mb-2">Get 20% OFF</h2>
                                <h3 className="text-2xl font-bold text-cyan-600 mb-6">Your first Project!</h3>

                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-gray-700 mb-1">
                                            Full Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 mb-1">
                                            Email*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Leave us a message..."
                                            rows={4}
                                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <input type="checkbox" id="agreeToPolicy" name="agreeToPolicy" className="mt-1" />
                                        <label htmlFor="agreeToPolicy" className="text-gray-700">
                                            You agree to our friendly{" "}
                                            <a href="#" className="text-cyan-600 underline">
                                                privacy policy
                                            </a>
                                            .
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                                    >
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}

export default Content

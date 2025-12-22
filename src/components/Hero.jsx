import React from 'react';

const Hero = () => {

    return (
        <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20  lg:pl-[30px]">

                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left animate-slide-right">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide">
                            🚀 Launch Your Tech Career Today
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-dark dark:text-white mb-6 leading-tight">
                            Master the <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                Future of Tech
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Join over 5,000+ graduates getting hired at top companies. Learn from industry experts, build real-world projects, and get 100% placement support.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <a href="#programs" className="px-8 py-4 bg-secondary hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                                View Courses
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white dark:bg-gray-800 text-secondary dark:text-white border border-gray-200 dark:border-gray-700 font-bold rounded-xl shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                Get Consultation
                            </a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex -space-x-2">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900" alt="User" />
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900" alt="User" />
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900" alt="User" />
                            </div>
                            <span>Join 500+ Active Learners</span>
                        </div>
                    </div>

                    {/* Right Column: Visual/Image */}
                    <div className="lg:w-1/2 relative animate-slide-left">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/5 bg-white/5 backdrop-blur-sm">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                alt="Students learning"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Qualification Card */}
                        <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce z-20" style={{ animationDuration: '3s' }}>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full text-green-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">Placement</p>
                                    <p className="text-lg font-bold text-dark dark:text-white">100% Success</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

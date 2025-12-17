import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PlacementSupport = () => {
    const [leftRef, leftAnim] = useScrollAnimation('animate-fade-in');
    const [rightRef, rightAnim] = useScrollAnimation('animate-slide-up');

    const steps = [
        {
            title: 'Resume Building',
            description: 'Expert guidance to craft a resume that stands out to recruiters.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            title: 'Mock Interviews',
            description: 'Practice with industry experts to perfect your interview skills.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Job Referrals',
            description: 'Direct access to our network of 100+ hiring partners.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="placement" className="py-20 bg-primary dark:bg-dark border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 lg:pl-[30px] ">
                <div className="flex flex-col md:flex-row items-center gap-12 ">
                    {/* Left Content */}
                    <div ref={leftRef} className={`md:w-1/2 ${leftAnim}`}>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Your Career, Our <span className="text-accent">Priority</span>
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                            We don't just teach technology; we launch careers. Our dedicated placement cell works tirelessly to ensure you land your dream job.
                        </p>
                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm shrink-0">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                                        <p className="text-blue-200">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image/Content */}
                    <div ref={rightRef} className={`md:w-1/2 relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl ${rightAnim}`}>
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-accent rounded-full opacity-50 blur-xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-20 h-20 bg-secondary rounded-full opacity-50 blur-xl"></div>

                        <h3 className="text-2xl font-bold text-dark dark:text-white mb-8 text-center">Program Highlights</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Feature 1: Live Interactive Session */}
                            <div className="flex items-start">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white text-sm">LIVE Interactive Session</h4>
                                </div>
                            </div>

                            {/* Feature 2: Industry ratified certifications */}
                            <div className="flex items-start">
                                <div className="p-2 bg-green-100 rounded-lg text-green-600 mr-3 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white text-sm">Industry ratified certifications</h4>
                                </div>
                            </div>

                            {/* Feature 3: Expert Industry Mentor */}
                            <div className="flex items-start">
                                <div className="p-2 bg-purple-100 rounded-lg text-purple-600 mr-3 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white text-sm">Expert Industry Mentor</h4>
                                </div>
                            </div>

                            {/* Feature 4: Portfolio worthy projects */}
                            <div className="flex items-start">
                                <div className="p-2 bg-orange-100 rounded-lg text-orange-600 mr-3 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white text-sm">Portfolio worthy projects</h4>
                                </div>
                            </div>

                            {/* Feature 5: Dedicated query session */}
                            <div className="flex items-start">
                                <div className="p-2 bg-pink-100 rounded-lg text-pink-600 mr-3 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white text-sm">Dedicated query session</h4>
                                </div>
                            </div>

                            {/* Feature 6: Active Community */}
                            <div className="flex items-start">
                                <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600 mr-3 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white text-sm">Active Community</h4>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <a href="#contact" className="inline-block px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                Join Placement Program
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementSupport;

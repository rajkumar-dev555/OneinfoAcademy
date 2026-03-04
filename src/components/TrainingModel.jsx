import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const TrainingModel = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [stepsRef, stepsAnim] = useScrollAnimation();

    const steps = [
        {
            step: 1,
            title: 'Foundational Mastery',
            description: 'Master core concepts of your chosen domain from absolute scratch.',
            icon: '📚',
        },
        {
            step: 2,
            title: 'Practical Hands-On',
            description: 'Shift from theory to tools with implementation-heavy sessions.',
            icon: '🔨',
        },
        {
            step: 3,
            title: 'Real-Time Mini Projects',
            description: 'Work on specific module-based industry tasks and projects.',
            icon: '⚙️',
        },
        {
            step: 4,
            title: 'Capstone Industry Project',
            description: 'Solve a full-scale problem with a portfolio-worthy end-to-end project.',
            icon: '🚀',
        },
        {
            step: 5,
            title: 'Professional Profiles',
            description: 'Resume and LinkedIn optimization to stand out in the job market.',
            icon: '📝',
        },
        {
            step: 6,
            title: 'Mock Interview Prep',
            description: 'Rigorous interviews with direct feedback from the industry mentor.',
            icon: '🎙️',
        },
        {
            step: 7,
            title: 'Job Market Strategy',
            description: 'Learn how to apply, network, and crack high-paying tech roles.',
            icon: '🎯',
        },
    ];

    return (
        <section className="py-24 bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative">
                <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide border border-secondary/20">
                        ⚡ The Oneinfo Framework
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                        Our 7-Step <span className="text-secondary">Job-Ready System</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Every domain we teach follows this rigorous framework to ensure you don't just 'finish a course', but become an industry professional.
                    </p>
                </div>

                <div ref={stepsRef} className={`max-w-4xl mx-auto ${stepsAnim}`}>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent transform md:-translate-x-1/2"></div>

                        {steps.map((step, index) => (
                            <div
                                key={step.step}
                                className={`relative flex items-start mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Connector Icon */}
                                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                                    <div className={`w-12 h-12 bg-gray-900 border-2 border-secondary rounded-2xl flex items-center justify-center text-xl shadow-2xl group transition-transform hover:scale-110`}>
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-16' : 'md:w-1/2 md:pl-16'
                                    } ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'
                                    }`}>
                                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-secondary/30 transition-all duration-500 hover:bg-white/10 group">
                                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                                            <span className="text-secondary font-black text-3xl opacity-20 group-hover:opacity-100 transition-opacity">0{step.step}</span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">{step.title}</h3>
                                        </div>
                                        <p className="text-[15px] text-gray-400 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingModel;

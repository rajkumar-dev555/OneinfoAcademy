import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    const [ref, animationClass] = useScrollAnimation();

    const skills = [
        'DevSecOps & Cloud Engineering',
        'Full Stack Development',
        'AI & Applied AI Integration',
        'Network & Cyber Security',
        'Embedded Systems & IoT',
        'Digital Growth & Strategy'
    ];

    const stats = [
        { label: 'Industry Experience', value: '2+ Years' },
        { label: 'Training Experience', value: '1.5+ Years' },
        { label: 'Domains Covered', value: '10+' },
        { label: 'Project Focused', value: '100%' }
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div ref={ref} className={`flex flex-col lg:flex-row items-center gap-16 ${animationClass}`}>
                    {/* Left: Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase border border-secondary/20">
                                The Mentor
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white leading-tight">
                                Industry Experience Meets <br />
                                <span className="text-secondary">Multi-Domain Expertise</span>
                            </h2>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-secondary pl-6">
                            "My mission is simple: to make students industry-ready — not just course-complete. I teach what works in real product-based companies."
                        </p>

                        <div className="space-y-4">
                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                                With a background as a DevSecOps Lead in a product-based company, I've spent years managing complex infrastructures, building scalable apps, and securing systems. I bring that real-world exposure to every session.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-lg bg-primary/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                            <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-bold text-primary dark:text-gray-300 group-hover:text-secondary transition-colors">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="space-y-1">
                                    <div className="text-2xl font-black text-primary dark:text-secondary">{stat.value}</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual/Image Placeholder */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-50 dark:border-gray-800">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Your Name - Industry Mentor"
                                className="w-full h-auto object-cover aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-2xl font-black text-white">Vignesh Kumar</div>
                                <div className="text-secondary font-bold text-sm tracking-widest uppercase">DevSecOps Lead & Mentor</div>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-secondary/10 blur-[100px] -z-10 rounded-full animate-blob"></div>
                        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

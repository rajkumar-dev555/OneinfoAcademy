'use client';

import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Link from 'next/link';

const About = () => {
    const [ref, animationClass] = useScrollAnimation();

    const skills = [
        { name: 'MERN & Full Stack Engineering', slug: 'full-stack-development-course-coimbatore' },
        { name: 'AI & Applied Machine Learning', slug: 'ai-course-coimbatore' },
        { name: 'DevOps & Cloud Infrastructure', slug: 'devops-course-coimbatore' },
        { name: 'Cyber Security & Networking', slug: 'cyber-security-course-coimbatore' },
        { name: 'Data Science & Big Data', slug: 'data-science-course-coimbatore' },
        { name: 'UI/UX & Product Design', slug: 'ui-ux-design-training-coimbatore' }
    ];

    const stats = [
        { label: 'Domains Covered', value: '12+' },
        { label: 'MNC Partners', value: '100+' },
        { label: 'Project Focused', value: '100%' },
        { label: 'Mentorship', value: '1-on-1' }
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div ref={ref} className={`flex flex-col lg:flex-row items-center gap-16 ${animationClass}`}>
                    {/* Left: Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase border border-secondary/20">
                                Who We Are
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white leading-tight">
                                A Specialized <span className="text-secondary">Technical Hub</span> <br />
                                for Future Tech Leaders
                            </h2>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-secondary pl-6 font-medium">
                            "Most institutes teach you how to code. We teach you how to get hired."
                        </p>

                        <div className="space-y-4">
                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                                Based in <strong className="text-secondary">Coimbatore</strong>, Oneinfo Academy is where students transform into high-paid software professionals. We realized that traditional college degrees aren't enough for the 2026 tech market. That's why we built a training model that feels more like a <strong>tech internship</strong> than a classroom.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                                You'll be mentored by senior engineers who actually work in top companies. No boring lectures—just <strong>real-world projects</strong>, <strong>mock interviews</strong>, and <strong>direct placement support</strong> in Coimbatore's growing IT hubs.
                            </p>
                            <p className="text-sm text-secondary font-black uppercase tracking-widest">
                                Pick your path and start your journey today.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <Link key={index} href={`/${skill.slug}`} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-lg bg-primary/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                            <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-bold text-primary dark:text-gray-300 group-hover:text-secondary transition-colors">{skill.name}</span>
                                    </Link>
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
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Oneinfo Academy Team"
                                className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-center sm:text-left">
                                <div className="text-2xl font-black text-white">Oneinfo Academy</div>
                                <div className="text-secondary font-bold text-sm tracking-widest uppercase">Center for Excellence & Career Growth</div>
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

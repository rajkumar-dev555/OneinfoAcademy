'use client';

import React, { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { courses } from '@/data/courses';
import Link from 'next/link';

const Programs = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [headerRef, headerAnim] = useScrollAnimation();
    const [gridRef, gridAnim] = useScrollAnimation();

    return (
        <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide border border-secondary/20">
                        🎓 Industry-Leading Programs
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-6">
                        Explore Our <span className="text-secondary">Programs</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Master the most in-demand tech skills through our project-driven curriculum. From web engineering to security and AI, we offer comprehensive tracks led by industry experts.
                    </p>
                </div>

                {/* Programs Grid */}
                <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ${gridAnim}`}>
                    {courses.map((program) => (
                        <div
                            key={program.id}
                            className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-secondary`}
                        >
                            {/* Header Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 z-10">
                                    <span className="text-3xl mb-1 block">{program.icon}</span>
                                    <h2 className="text-xl font-bold text-white leading-tight">{program.title}</h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-secondary/10 text-secondary border border-secondary/20`}>
                                    Perfect for: {program.perfectFor}
                                </div>

                                {/* Topics & Details */}
                                <div className={`space-y-4 overflow-hidden transition-all duration-500 ${expandedCard === program.id ? 'max-h-[1000px]' : 'max-h-[100px]'
                                    }`}>
                                    {expandedCard === program.id && (
                                        <div className="mb-4 space-y-4">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                                {program.description}
                                            </p>
                                            
                                            {/* Student Stats */}
                                            <div className="grid grid-cols-2 gap-2 mt-4">
                                                <div className="bg-primary/5 dark:bg-primary/20 p-3 rounded-2xl">
                                                    <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 block mb-1">💼 Career Path</span>
                                                    <span className="text-xs font-bold text-primary dark:text-white leading-tight">{program.careerPath}</span>
                                                </div>
                                                <div className="bg-secondary/5 dark:bg-secondary/20 p-3 rounded-2xl">
                                                    <span className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 block mb-1">💰 Avg. Salary</span>
                                                    <span className="text-xs font-bold text-secondary">{program.averageSalary}</span>
                                                </div>
                                            </div>

                                            {/* Projects */}
                                            <div className="mt-4">
                                                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Hands-on Projects</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {program.projects.map((proj, idx) => (
                                                        <span key={idx} className="text-[10px] font-bold bg-white dark:bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                                                            🚀 {proj}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-[10px] font-black text-primary dark:text-secondary uppercase tracking-[0.2em] mb-2">What you'll master</h4>
                                        <div className="grid grid-cols-1 gap-1.5">
                                            {program.topics.slice(0, expandedCard === program.id ? 10 : 3).map((topic, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{topic}</span>
                                                </div>
                                            ))}
                                            {expandedCard !== program.id && (
                                                <span className="text-[10px] text-gray-400 font-bold ml-3.5">+ {program.topics.length - 3} more modules</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Toggle Button */}
                                <button
                                    onClick={() => setExpandedCard(expandedCard === program.id ? null : program.id)}
                                    className="mt-6 w-full py-2.5 rounded-xl border-2 border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
                                >
                                    {expandedCard === program.id ? (
                                        <>Hide Details <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" /></svg></>
                                    ) : (
                                        <>See Curriculum & Projects <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg></>
                                    )}
                                </button>

                                {/* Outcome */}
                                <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/20 dark:to-secondary/20 border-l-4 border-secondary group/goal">
                                    <Link href={`/${program.slug}`} className="block">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-[10px] font-black text-secondary uppercase block mb-1">The Goal</span>
                                                <p className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-tight">
                                                    {program.outcome}
                                                </p>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm group-hover/goal:translate-x-1 transition-transform">
                                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                {/* CTA */}
                                <div className="grid grid-cols-2 gap-3 mt-6">
                                    <a
                                        href="#contact"
                                        className="block text-center py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-md active:scale-95 text-xs"
                                    >
                                        Enquire Now
                                    </a>
                                    <Link
                                        href={`/${program.slug}`}
                                        className="block text-center py-3.5 rounded-xl font-bold text-white bg-secondary hover:bg-secondary/90 transition-all shadow-md active:scale-95 text-xs"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;

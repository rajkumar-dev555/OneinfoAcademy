import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';

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
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We offer specialized certification tracks across 12+ domains. Every program is expert-led, project-driven, and aligned with international industry standards.
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

                                {/* Topics */}
                                <div className={`space-y-4 overflow-hidden transition-all duration-500 ${expandedCard === program.id ? 'max-h-[800px]' : 'max-h-[100px]'
                                    }`}>
                                    {expandedCard === program.id && (
                                        <div className="mb-4">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                                                {program.description}
                                            </p>
                                            <Link
                                                to={`/${program.slug}`}
                                                className="text-secondary hover:underline text-xs font-bold uppercase mt-2 block"
                                            >
                                                Learn more about {program.title} →
                                            </Link>
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-xs font-bold text-primary dark:text-secondary uppercase tracking-wider mb-2">Key Areas</h4>
                                        {program.topics.map((topic, idx) => (
                                            <div key={idx} className="flex items-center gap-2 mb-1">
                                                <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{topic}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Toggle Button */}
                                <button
                                    onClick={() => setExpandedCard(expandedCard === program.id ? null : program.id)}
                                    className="mt-3 text-secondary hover:text-secondary/80 text-sm font-semibold transition-colors focus:outline-none"
                                >
                                    {expandedCard === program.id ? 'Show Less ↑' : 'Show Curriculum ↓'}
                                </button>

                                {/* Outcome */}
                                <div className={`mt-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border-l-4 border-secondary`}>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        <Link to={`/${program.slug}`} className="hover:text-secondary transition-colors">
                                            <span className="font-bold text-primary dark:text-white">Goal:</span> {program.outcome}
                                        </Link>
                                    </p>
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
                                        to={`/${program.slug}`}
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

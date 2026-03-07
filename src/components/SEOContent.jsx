import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SEOContent = () => {
    const [ref1, anim1] = useScrollAnimation();
    const [ref2, anim2] = useScrollAnimation();

    return (
        <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Section 1: Best IT Courses in Coimbatore */}
                    <div ref={ref1} className={`space-y-6 ${anim1}`}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase border border-secondary/20">
                            Top Recommendation
                        </div>
                        <h2 className="text-3xl font-heading font-black text-primary dark:text-white leading-tight">
                            Best IT Courses in Coimbatore
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            If you are searching for the <strong className="text-secondary">best IT courses in Coimbatore</strong> with practical training and career guidance, Oneinfo Academy offers industry-relevant programs designed to help students gain job-ready skills.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            Our training programs focus on high-demand domains such as <strong className="text-primary dark:text-white">Full Stack Development, Artificial Intelligence, Cyber Security, DevOps, Cloud Engineering, and Data Science</strong>. Each program includes real-time projects, mentor guidance, and career preparation support.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            Students from across Coimbatore join Oneinfo Academy to learn modern technologies and build successful careers in the IT industry.
                        </p>
                    </div>

                    {/* Section 2: Why Learn IT Skills in Coimbatore */}
                    <div ref={ref2} className={`space-y-6 ${anim2}`}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase border border-secondary/20">
                            Local Tech Growth
                        </div>
                        <h3 className="text-3xl font-heading font-black text-primary dark:text-white leading-tight">
                            Why Learn IT Skills in Coimbatore?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            <strong className="text-secondary">Coimbatore</strong> is rapidly growing as a technology and startup hub in <strong className="text-secondary">Tamil Nadu</strong>. Many IT companies, startups, and digital businesses are creating new opportunities for skilled professionals.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            By learning modern IT skills such as <strong className="text-primary dark:text-white">Full Stack Development, Data Science, Cyber Security, and DevOps</strong>, students can access high-paying career opportunities both locally and globally.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            Oneinfo Academy helps learners from <strong className="text-secondary">Coimbatore</strong> and across <strong className="text-secondary">India</strong> gain practical knowledge that matches industry requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SEOContent;

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
                            If you are searching for the <strong className="text-secondary">best IT courses in Coimbatore</strong> with practical training and career guidance, Oneinfo Academy offers industry-relevant programs designed to help students gain job-ready skills. As a premier <strong className="text-primary dark:text-white">Edutech platform</strong>, we bridge the gap between traditional academic learning and the rapidly evolving requirements of the global tech industry.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            Our training programs focus on high-demand domains such as <strong className="text-primary dark:text-white">Full Stack Development, AI, Cyber Security, DevOps, Cloud Engineering, Data Science, Software Testing (QA), and UI/UX Design</strong>. We don't just teach theory; we provide an immersive <strong className="text-secondary">Industry Mentor model</strong> where you learn from senior developers working in top MNCs. Each program includes real-time projects, personalized mentor guidance, and 100% career preparation support.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            Oneinfo Academy is recognized as the best IT training institute in Coimbatore because of our commitment to quality and outcomes. From <strong className="text-primary dark:text-white">Full Stack Engineering</strong> to <strong className="text-primary dark:text-white">Quality Assurance</strong> and <strong className="text-primary dark:text-white">Product Design</strong>, we cover the full software development lifecycle.
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
                            <strong className="text-secondary">Coimbatore</strong> is rapidly growing as a major technology and startup hub in <strong className="text-secondary">Tamil Nadu</strong>. With numerous IT parks and a flourishing ecosystem for innovation, the city offers a wealth of opportunities for skilled professionals in software development, cloud infrastructure, and data analytics.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            By mastering modern IT skills like <strong className="text-primary dark:text-white">Cloud Engineering, Cyber Security, and Software Testing</strong>, students can access high-paying career opportunities both locally and globally. At Oneinfo Academy, we ensure our learners are ready for this growth by providing hands-on exposure to enterprise tools and professional workflows used by modern <strong className="text-primary dark:text-white">Edutech companies</strong>.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            Whether you are a fresh graduate or a career switcher, our <strong className="text-primary dark:text-white">AI, MERN, and Design programs</strong> are designed to equip you with the expertise needed to excel in the 2025 job market. Join the thousands of learners from across India who have trusted Oneinfo Academy to transform their professional trajectory.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SEOContent;

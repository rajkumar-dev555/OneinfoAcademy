import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FAQSection = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [faqRef, faqAnim] = useScrollAnimation();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the best IT course in Coimbatore?",
            answer: "Full Stack Development, Artificial Intelligence, Cyber Security, DevOps, and Data Science are among the most in-demand IT courses in Coimbatore for students and professionals."
        },
        {
            question: "Does Oneinfo Academy provide placement support?",
            answer: "Yes. Oneinfo Academy provides comprehensive career mentorship including resume building, LinkedIn optimization, mock interviews, and job search guidance."
        },
        {
            question: "Who can join Oneinfo Academy programs?",
            answer: "Final-year students, fresh graduates, working professionals, and career switchers look for IT training in Coimbatore can join our programs."
        },
        {
            question: "Are the courses beginner friendly?",
            answer: "Yes. Our training programs start from fundamentals and gradually move toward advanced real-world projects, making them perfect for beginners."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <div ref={headerRef} className={`text-center mb-12 ${headerAnim}`}>
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide border border-secondary/20">
                        ❓ FAQ
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6">
                        Frequently Asked <span className="text-secondary">Questions</span>
                    </h2>
                </div>

                <div ref={faqRef} className={`space-y-4 ${faqAnim}`}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 rounded-3xl border-2 border-transparent hover:border-secondary/20 transition-all cursor-pointer group"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="p-6 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-primary dark:text-white group-hover:text-secondary transition-colors italic">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-6 h-6 text-secondary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <p className="p-6 pt-0 text-gray-600 dark:text-gray-400 font-medium">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

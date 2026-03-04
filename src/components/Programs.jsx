import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Programs = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [headerRef, headerAnim] = useScrollAnimation();
    const [gridRef, gridAnim] = useScrollAnimation();

    const programs = [
        {
            id: 1,
            title: 'Full Stack Development',
            perfectFor: 'Freshers & Career Switchers',
            icon: '💻',
            topics: [
                'Frontend (React, Next.js)',
                'Backend (Node.js, Express)',
                'Database (MongoDB, SQL)',
                'Git & Deployment',
                'API Integration',
                'System Design Basics',
            ],
            outcome: 'Build and deploy real full-stack applications.',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 2,
            title: 'Artificial Intelligence & Applied AI',
            perfectFor: 'Aspirants in AI/ML growth',
            icon: '🤖',
            topics: [
                'Python for AI',
                'Machine Learning Basics',
                'Generative AI & LLMs',
                'AI Model Integration',
                'Prompt Engineering',
            ],
            outcome: 'Work on real-world AI mini projects.',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 3,
            title: 'Cyber Security',
            perfectFor: 'Security-focused learners',
            icon: '🛡️',
            topics: [
                'Network Security',
                'Ethical Hacking Fundamentals',
                'VAPT Concepts',
                'Threat Intelligence',
                'Introduction to SOC',
            ],
            outcome: 'Comprehensive guide to cybersecurity job roles.',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 4,
            title: 'DevOps & Cloud Engineering',
            perfectFor: 'IT Pros looking for high-salary roles',
            icon: '☁️',
            topics: [
                'AWS/Azure/GCP Cloud',
                'CI/CD Pipelines (Jenkins, Gitlab)',
                'Docker & Kubernetes',
                'Infrastructure as Code (Terraform)',
                'Observability & Monitoring',
            ],
            outcome: 'Master industry-standard deployment automation.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 5,
            title: 'Data Science & Data Engineering',
            perfectFor: 'Data enthusiasts & Analysts',
            icon: '📊',
            topics: [
                'Python with Data Science',
                'Data Visualization (Tableau/BI)',
                'Big Data Fundamentals',
                'SQL for Data Analytics',
                'Predictive Modeling',
            ],
            outcome: 'Build data pipelines and dashboards.',
            image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 6,
            title: 'UI/UX Design',
            perfectFor: 'Creative minds & Developers',
            icon: '🎨',
            topics: [
                'Design Thinking Process',
                'Wireframing (Figma)',
                'User Research Principles',
                'Interactive Prototyping',
                'Visual Design Systems',
            ],
            outcome: 'Create high-fidelity designs for apps & web.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 7,
            title: 'Digital Marketing & Growth',
            perfectFor: 'Marketing students & Entrepreneurs',
            icon: '📈',
            topics: [
                'SEO & SEM Strategies',
                'Social Media Marketing',
                'Content Marketing & Strategy',
                'Email Automation',
                'Analytics & Performance Tracking',
            ],
            outcome: 'Run effective multi-channel digital campaigns.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 8,
            title: 'Software Testing (QA)',
            perfectFor: 'QA Aspirants & Manual Testers',
            icon: '🧪',
            topics: [
                'Manual Testing concepts',
                'Automation (Selenium/Playwright)',
                'API Testing (Postman)',
                'Bug Tracking (Jira)',
                'Mobile App Testing',
            ],
            outcome: 'Become a job-ready QA Automation Engineer.',
            image: 'https://images.unsplash.com/photo-1516259762381-2da9b4df7b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 9,
            title: 'Networking & Infrastructure',
            perfectFor: 'Hardware & Network enthusiasts',
            icon: '🔌',
            topics: [
                'CCNA Fundamentals',
                'Network Protocols & IP',
                'Server Configuration',
                'VPN & Security Networking',
                'Cloud Infrastructure Basics',
            ],
            outcome: 'Manage complex network and server environments.',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 10,
            title: 'Embedded Systems & IoT',
            perfectFor: 'Electronics & Hardware students',
            icon: '📟',
            topics: [
                'C/C++ for Microcontrollers',
                'Arduino & Raspberry Pi',
                'Sensor Integration',
                'IoT Protocols (MQTT)',
                'Real-world Smart Projects',
            ],
            outcome: 'Build smart connected IoT devices.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        },
    ];

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
                        We offer specialized coaching in all top industry domains. Every program is mentor-led and project-driven.
                    </p>
                </div>

                {/* Programs Grid */}
                <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ${gridAnim}`}>
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-secondary`}
                        >
                            {/* Header Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 z-10">
                                    <span className="text-3xl mb-1 block">{program.icon}</span>
                                    <h3 className="text-xl font-bold text-white leading-tight">{program.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-secondary/10 text-secondary border border-secondary/20`}>
                                    Perfect for: {program.perfectFor}
                                </div>

                                {/* Topics */}
                                <div className={`space-y-2 overflow-hidden transition-all duration-500 ${expandedCard === program.id ? 'max-h-[500px]' : 'max-h-[100px]'
                                    }`}>
                                    <h4 className="text-xs font-bold text-primary dark:text-secondary uppercase tracking-wider mb-2">Key Areas</h4>
                                    {program.topics.map((topic, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{topic}</span>
                                        </div>
                                    ))}
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
                                        <span className="font-bold text-primary dark:text-white">Goal:</span> {program.outcome}
                                    </p>
                                </div>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    className="mt-6 block text-center py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-secondary transition-all shadow-md active:scale-95"
                                >
                                    Enquire Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;

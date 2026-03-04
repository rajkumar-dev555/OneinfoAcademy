import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [ref, animationClass] = useScrollAnimation();

    const domains = [
        'AI & Applied AI',
        'Full Stack Development',
        'Cyber Security',
        'DevOps & Cloud',
        'Data Science',
        'UI/UX Design',
        'Digital Marketing',
        'Software Testing',
        'Networking',
        'Embedded Systems & IoT'
    ];

    useEffect(() => {
        let timer = setTimeout(() => {
            handleType();
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum]);

    const handleType = () => {
        const i = loopNum % domains.length;
        const fullText = domains[i];

        setDisplayText(
            isDeleting
                ? fullText.substring(0, displayText.length - 1)
                : fullText.substring(0, displayText.length + 1)
        );

        setTypingSpeed(isDeleting ? 75 : 150);

        if (!isDeleting && displayText === fullText) {
            setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 dark:bg-secondary/5 blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 dark:bg-primary/5 blur-[120px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 text-center">
                <div ref={ref} className={`${animationClass}`}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold text-sm mb-8 animate-bounce">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                        </span>
                        Industry-Level Project Training
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-7xl font-heading font-black text-primary dark:text-white leading-tight mb-6">
                        Master In-Demand IT Skills <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-600">
                            with an Industry Mentor
                        </span>
                    </h1>

                    {/* Typing Effect */}
                    <div className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-12">
                        Programs in: <span className="text-secondary border-r-4 border-secondary pr-1">{displayText}</span>
                    </div>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                        Gain practical, hands-on experience directly from a working professional with 2+ years of industry experience. Build real projects, prepare for interviews, and launch your career in top-tier tech domains.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#programs"
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
                        >
                            View All Programs
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-2"
                        >
                            Book Free Consultation
                        </a>
                    </div>

                    {/* Stats/Proof */}
                    <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-3xl font-black text-primary dark:text-white">10+</div>
                            <div className="text-sm text-gray-500 font-medium">Industry Domains</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-primary dark:text-white">Real</div>
                            <div className="text-sm text-gray-500 font-medium">Project Focus</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-primary dark:text-white">Live</div>
                            <div className="text-sm text-gray-500 font-medium">Online Classes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-primary dark:text-white">1-on-1</div>
                            <div className="text-sm text-gray-500 font-medium">Career Mentorship</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Badge */}
            <div className="hidden lg:block absolute right-12 bottom-20 animate-float">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border border-secondary/20 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white text-2xl">
                        🏆
                    </div>
                    <div className="text-left">
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Industry Mentor</div>
                        <div className="text-primary dark:text-white font-black">2+ Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
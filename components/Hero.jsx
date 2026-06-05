'use client';

import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { PHONE_TEL, whatsappUrl } from '@/lib/contact';

const Hero = () => {
    const [ref, animationClass] = useScrollAnimation();

    const domains = [
        'AI & Applied Fullstack',
        'Cyber Security',
        'DevOps & Cloud Engineering',
        'Data Science',
        'UI/UX Design',
        'Software Testing & QA',
        'Digital Marketing'
    ];

    return (
        <section id="home" className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Professional Background Elements */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 dark:bg-secondary/5 -skew-x-12 transform origin-top-right transition-all duration-1000"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div ref={ref} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${animationClass}`}>
                    {/* Left: Content */}
                    <div className="lg:w-[55%] text-left space-y-8 animate-fade-in">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-bold text-xs uppercase tracking-widest">
                            <span className="flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Premier Career Transformation Academy
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl font-heading font-black text-primary dark:text-white leading-[1.05] tracking-tight">
                            Build <span className="text-secondary text-shadow-sm">Real Projects</span>. <br />
                            Get <span className="text-secondary text-shadow-sm">Real Jobs</span>.
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed italic border-l-4 border-secondary pl-6">
                            "Stop struggling with theoretical books. Join Coimbatore's top-rated IT center and build <strong className="text-primary dark:text-white">3 real-world projects</strong> while getting trained for <strong className="text-primary dark:text-white">Tier-1 MNC placements</strong>."
                        </p>

                        {/* Course Tags */}
                        <div className="flex flex-wrap gap-2 py-2">
                            {domains.map((domain, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase rounded-md tracking-wider border border-transparent hover:border-secondary/30 transition-colors">
                                    {domain}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row flex-wrap items-stretch gap-3">
                            <a
                                href={whatsappUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
                            >
                                💬 WhatsApp — Free Consultation
                            </a>
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-5 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-2 active:scale-95"
                            >
                                Book Free Demo Class
                            </a>
                            <a
                                href={PHONE_TEL}
                                className="w-full sm:w-auto px-8 py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
                            >
                                📞 Call +91 99408 04524
                            </a>
                            <a
                                href="#programs"
                                className="w-full sm:w-auto px-8 py-5 bg-white dark:bg-gray-800 text-primary dark:text-white font-bold rounded-2xl border-2 border-primary/10 dark:border-white/10 hover:border-secondary flex items-center justify-center gap-2 active:scale-95"
                            >
                                Explore Programs →
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="pt-8 flex flex-wrap items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((n) => (
                                    <div key={n} className={`w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 bg-gray-${n * 100 + 100} flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all`}>
                                        <img src={`https://i.pravatar.cc/150?img=${n + 10}`} alt="Student" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 bg-secondary flex items-center justify-center text-white font-black text-xs">
                                    500+
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex gap-1 text-secondary">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-gray-500 dark:text-gray-400">4.8/5 from 27 Reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual / Image */}
                    <div className="lg:w-[45%] relative animate-slide-up">
                        {/* Main Image Container */}
                        <div className="relative z-10 w-full h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group">
                            <img
                                src="/images/hero-visual.png"
                                alt="Professional IT Training at Oneinfo Academy"
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-linear"
                                onError={(e) => { e.target.src = '/images/hero-visual.png'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Card 1 - Placement Badge */}
                        <div className="absolute -left-10 bottom-24 z-20 bg-white dark:bg-gray-800 p-5 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 animate-bounce-slow max-w-[280px] transition-colors duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl shadow-inner">
                                    🚀
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-primary dark:text-white uppercase tracking-[0.2em] mb-0.5">Placement Support</div>
                                    <div className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-tight">100+ hiring partners · Security Analyst 4 LPA placed</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 2 - Mentor Badge */}
                        <div className="absolute -right-6 top-16 z-20 bg-white dark:bg-gray-800 p-5 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in delay-500 max-w-[260px] transition-colors duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl shadow-inner">
                                    🏆
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-primary dark:text-white uppercase tracking-[0.2em] mb-0.5">ELITE MNC MENTORS</div>
                                    <div className="text-sm font-bold text-gray-500 dark:text-gray-400 leading-tight">Learn from Top Engineering Leads</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Elements behind image */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-secondary/20 to-primary/10 blur-[80px] rounded-full"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
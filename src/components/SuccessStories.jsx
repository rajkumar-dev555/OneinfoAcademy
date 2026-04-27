import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Counter from './Counter';

const SuccessStories = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [statsRef, statsAnim] = useScrollAnimation();
    const [storiesRef, storiesAnim] = useScrollAnimation();
    const [activePage, setActivePage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Realistic stats - Sync with multi-domain
    const stats = [
        { label: 'Students Mentored', value: 500, suffix: '+' },
        { label: 'Skill Domains', value: 12, suffix: '' },
        { label: 'Job Readiness', value: 100, suffix: '%' },
        { label: 'Avg Salary Hike', value: 40, suffix: '%' },
    ];

    const stories = [
        {
            name: "Jaya J",
            role: "Full Stack Python Development",
            image: "https://ui-avatars.com/api/?name=Jaya+J&background=random",
            quote: "OneInfo Academy is one of the best IT training institutes for Full Stack Python Development. The trainers are knowledgeable, and the friendly staff create a supportive learning environment. Highly recommended for anyone looking to build a strong career in software development."
        },
        {
            name: "Riya Thanishka",
            role: "AWS & Cloud Solutions",
            image: "https://ui-avatars.com/api/?name=Riya+Thanishka&background=random",
            quote: "I have completed my AWS Project course here, and it was a great learning experience. The trainers explained concepts clearly with real-time examples, which helped me understand the practical aspects. Highly recommended for anyone looking for quality cloud training!"
        },
        {
            name: "Vasantha kohila",
            role: "Cloud & DevOps Engineering",
            image: "https://ui-avatars.com/api/?name=Vasantha+kohila&background=random",
            quote: "I successfully completed the Cloud and DevOps course, and I am extremely satisfied with the overall learning experience. The course was well-structured and covered important technologies such as AWS, Docker, Kubernetes, and CI/CD pipelines."
        },
        {
            name: "Chandra Chinnadurai",
            role: "Cyber Security Specialist",
            image: "https://ui-avatars.com/api/?name=Chandra+Chinnadurai&background=random",
            quote: "I have enjoyed the 'Cyber Security' course. The instructor was incredibly knowledgeable and kept the energy high, making complex topics like Ethical hacking and VAPT easy to understand."
        },
        {
            name: "Bavanya Mani",
            role: "Cloud & DevOps",
            image: "https://ui-avatars.com/api/?name=Bavanya+Mani&background=random",
            quote: "I've completed my Cloud and DevOps course here, and it was a fantastic experience! The trainers broke down complex concepts into bite-sized, real-time examples that made learning smooth. Got hands-on with tools like Jenkins and CI/CD."
        },
        {
            name: "Navi",
            role: "Data Analytics Student",
            image: "https://ui-avatars.com/api/?name=Navi&background=random",
            quote: "I recently learned the Data Analytics course in this institute. It's really awesome, the staff are very friendly, and it's worth comparing to other institutes!!"
        }
    ];

    const ITEMS_PER_PAGE = 3;
    const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);

    useEffect(() => {
        if (!isPaused && totalPages > 1) {
            const interval = setInterval(() => {
                setActivePage((prev) => (prev + 1) % totalPages);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused, totalPages]);

    const currentStories = stories.slice(
        activePage * ITEMS_PER_PAGE,
        (activePage + 1) * ITEMS_PER_PAGE
    );

    return (
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Stats Section */}
                <div ref={statsRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 ${statsAnim}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="relative p-10 bg-white dark:bg-gray-800 rounded-2xl text-center group hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700 shadow-xl shadow-primary/5">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-full"></div>
                            <div className="text-4xl font-black text-primary dark:text-secondary mb-2">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Stories Header */}
                <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase border border-secondary/20">
                        🌟 Google Reviews
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-primary dark:text-white mb-6">
                        Hear From Our <span className="text-secondary text-shadow-sm">Global Alumni</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic leading-relaxed">
                        Actual feedback from our GMB profile. We take pride in transforming careers across multiple tech domains.
                    </p>
                </div>

                {/* Carousel / Sliding Area */}
                <div
                    className="relative max-w-7xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div ref={storiesRef} className="overflow-hidden py-4">
                        <div
                            key={activePage}
                            className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 ease-in-out ${storiesAnim} animate-fade-in-up`}
                        >
                            {(stories.length > ITEMS_PER_PAGE ? stories.slice(activePage * ITEMS_PER_PAGE, (activePage + 1) * ITEMS_PER_PAGE) : stories).map((story, index) => (
                                <div key={index} className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 transition-all duration-500 flex flex-col h-full transform group relative">
                                    {/* Google 'G' Icon Branding */}
                                    <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                                            <path
                                                fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.27.81-.57z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            />
                                        </svg>
                                    </div>

                                    {/* Header: Profile & Name */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden shadow-inner bg-gray-100 dark:bg-gray-700">
                                            <img
                                                src={story.image}
                                                alt={story.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="pr-8">
                                            <h3 className="font-bold text-[15px] text-gray-900 dark:text-white leading-tight mb-0.5">{story.name}</h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">Local Guide</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                                <span className="text-[11px] text-gray-400 font-medium">1 month ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-3">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <svg key={s} className="w-4 h-4 text-[#fbbc04] fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-[#3c4043] dark:text-gray-300 text-[14px] leading-[1.6] flex-grow font-sans antialiased text-ellipsis line-clamp-4 group-hover:line-clamp-none transition-all duration-300 italic">
                                        "{story.quote}"
                                    </p>

                                    {/* Footer: Course Category */}
                                    <div className="mt-6 pt-4 border-t border-gray-50 dark:border-gray-700 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{story.role}</span>
                                        </div>
                                        <div className="text-[10px] font-medium text-blue-500 hover:underline cursor-pointer">Google Review</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-12 gap-3">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActivePage(idx)}
                                    className={`h-2 rounded-full transition-all duration-700 ${activePage === idx ? 'w-12 bg-secondary' : 'w-2 bg-gray-200 dark:bg-gray-700 hover:bg-secondary/40'}`}
                                    aria-label={`Go to page ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;

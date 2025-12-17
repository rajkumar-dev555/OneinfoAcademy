import React, { useState, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Counter from './Counter';

const SuccessStories = () => {
    const [headerRef, headerAnim] = useScrollAnimation();
    const [statsRef, statsAnim] = useScrollAnimation();
    const [storiesRef, storiesAnim] = useScrollAnimation();
    const [activePage, setActivePage] = useState(0);

    const stats = [
        { label: 'Students Placed', value: 500, suffix: '+' },
        { label: 'Hiring Partners', value: 100, suffix: '+' },
        { label: 'Salary Hike', value: 120, suffix: '%' },
        { label: 'Course Completion', value: 95, suffix: '%' },
    ];

    const stories = [
        {
            name: 'Priya Sharma',
            role: 'Data Scientist at TechGliders',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            quote: "Kodopetiya's Data Science bootcamp was a game changer. The hands-on projects gave me the confidence to crack my dream job interview.",
        },
        {
            name: 'Rohan Mehta',
            role: 'Full Stack Developer at InnovateX',
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            quote: "The curriculum is updated with the latest tech stack. I went from knowing zero coding to building full-scale web apps in 6 months.",
        },
        {
            name: 'Anjali Gupta',
            role: 'UI/UX Designer at CreativeMinds',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            quote: "The design mentorship was exceptional. I learned not just tools, but design thinking which is crucial for the industry.",
        },
        // New Data for Carousel
        {
            name: 'Vikram Singh',
            role: 'Cloud Engineer at SkyHigh Stats',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            quote: "The AWS training module is world-class. I cleared my certification on the first attempt and got placed within a week!",
        },
        {
            name: 'Sneha Patel',
            role: 'Frontend Dev at WebWizards',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            quote: "I loved the flexible learning schedule. It allowed me to switch careers from marketing to coding without quitting my job.",
        },
        {
            name: 'Arjun Das',
            role: 'Product Manager at BuildIt',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            quote: "Understanding the tech side of things helped me transition from sales to Product Management. Highly recommended!",
        }
    ];

    const ITEMS_PER_PAGE = 3;
    const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);

    const handleNext = () => {
        setActivePage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Calculate current items
    const currentStories = stories.slice(
        activePage * ITEMS_PER_PAGE,
        (activePage + 1) * ITEMS_PER_PAGE
    );

    return (
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Stats Section */}
                <div ref={statsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 ${statsAnim}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white dark:bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-200 dark:border-green-500 dark:border-2">
                            <div className="text-4xl font-bold text-secondary dark:text-black mb-2">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-gray-600 dark:text-black font-medium uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Stories Section Header */}
                <div ref={headerRef} className={`text-center mb-12 ${headerAnim}`}>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark dark:text-white mb-6">
                        Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Real people, real results. Hear from our alumni who transformed their careers.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 bg-white dark:bg-gray-800 text-secondary dark:text-white rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Content Grid */}
                    <div ref={storiesRef} className="overflow-hidden px-2 py-4">
                        {/* Key property forces re-render animation when page changes */}
                        <div key={activePage} className={`grid md:grid-cols-3 gap-8 ${storiesAnim} animate-fade-in-up`}>
                            {currentStories.map((story, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full transform animate-slide-up-fade" style={{ animationDelay: `${index * 150}ms` }}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary dark:border-blue-500" />
                                        <div>
                                            <h3 className="font-bold text-lg text-dark dark:text-white">{story.name}</h3>
                                            <p className="text-sm text-secondary dark:text-blue-400">{story.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 italic flex-grow">"{story.quote}"</p>

                                    {/* Quote Icon Decoration */}
                                    <div className="mt-4 text-right opacity-20">
                                        <svg className="w-8 h-8 text-primary dark:text-white inline-block" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46463 8 5.01691 8.44772 5.01691 9V11C5.01691 11.5523 4.56919 12 4.01691 12H3.01691V5H13.0169V15C13.0169 18.3137 10.3306 21 7.01691 21H5.01691Z" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 bg-white dark:bg-gray-800 text-secondary dark:text-white rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all focus:outline-none hover:scale-110"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 gap-2">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActivePage(idx)}
                                className={`h-3 rounded-full transition-all duration-300 ${activePage === idx ? 'w-8 bg-secondary' : 'w-3 bg-gray-300 dark:bg-gray-600'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';

const CourseDetail = () => {
    const { slug } = useParams();
    const course = courses.find((c) => c.slug === slug);

    useEffect(() => {
        if (course) {
            window.scrollTo(0, 0);
            document.title = `${course.title} | Oneinfo Academy Coimbatore`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', course.description);
            }
        }
    }, [course]);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark text-dark dark:text-light">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
                    <Link to="/" className="text-secondary hover:underline font-semibold">Return to Homepage</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <section className="relative h-[400px] mb-16 overflow-hidden">
                    <img
                        src={course.image}
                        alt={course.alt}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 flex items-center justify-center">
                        <div className="container mx-auto px-4 text-center">
                            <span className="text-6xl mb-6 block drop-shadow-lg">{course.icon}</span>
                            <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight mb-4 drop-shadow-md">
                                {course.title}
                            </h1>
                            <div className="inline-block px-4 py-2 bg-secondary text-white rounded-full font-bold text-sm uppercase tracking-wider">
                                Perfect for: {course.perfectFor}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Course Overview */}
                            <section>
                                <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-6 border-l-8 border-secondary pl-4">
                                    About this Course
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                    {course.description}
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {course.detailedContent}
                                </p>
                            </section>

                            {/* Curriculum */}
                            <section className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 py-10">
                                <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-8">
                                    Course Curriculum & <span className="text-secondary">Key Areas</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {course.topics.map((topic, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 group hover:border-secondary transition-all">
                                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Goal */}
                            <section className="bg-secondary/10 p-8 rounded-3xl border-2 border-dashed border-secondary/30">
                                <h3 className="text-xl font-bold text-primary dark:text-white mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🎯</span> Your Career Goal
                                </h3>
                                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium italic">
                                    {course.outcome}
                                </p>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            {/* Enrollment Card */}
                            <div className="bg-primary text-white p-8 rounded-3xl shadow-2xl sticky top-28">
                                <h3 className="text-2xl font-bold mb-6">Start Your Journey Today</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">✓</span>
                                        <span>Industry Mentor Led Programs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">✓</span>
                                        <span>Hands-on Live Projects</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">✓</span>
                                        <span>100% Placement Support</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">✓</span>
                                        <span>Flexible Batch Timings</span>
                                    </li>
                                </ul>
                                <a
                                    href="#contact"
                                    className="block w-full text-center py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl transition-all shadow-lg hover:translate-y-[-2px]"
                                >
                                    Book a Free Demo
                                </a>
                                <p className="text-center text-xs text-white/50 mt-4">
                                    Limited seats available for the next batch.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>

                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default CourseDetail;

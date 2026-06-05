'use client';

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-16 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-heading font-black tracking-tight">
                            Oneinfo<span className="text-secondary">Academy</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Top-tier multi-domain IT training and mentorship. Learn from working professionals and stay ahead in the tech industry.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/people/Oneinfo-it-academy/61585760608714/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary transition-all group">
                                <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/oneinfo_academy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary transition-all group">
                                <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.307-1.459.718-2.125 1.384-.666.666-1.077 1.335-1.384 2.125-.297.763-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.307.79.718 1.459 1.384 2.125.666.666 1.335 1.077 2.125 1.384.763.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.307 1.459-.718 2.125-1.384.666-.666 1.077-1.335 1.384-2.125.297-.763.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.307-.79-.718-1.459-1.384-2.125-.666-.666-1.335-1.077-2.125-1.384-.763-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/oneinfoacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary transition-all group">
                                <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Courses 1 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">Popular Tracks</h4>
                        <ul className="space-y-3 text-gray-400 text-sm font-medium">
                            <li><a href="/full-stack-development-course-coimbatore" className="hover:text-secondary transition-colors">Full Stack Development</a></li>
                            <li><a href="/ai-course-coimbatore" className="hover:text-secondary transition-colors">AI & Applied AI</a></li>
                            <li><a href="/cyber-security-course-coimbatore" className="hover:text-secondary transition-colors">Cyber Security</a></li>
                            <li><a href="/cyber-security-course-saravanampatti" className="hover:text-secondary transition-colors text-gray-500">Cyber Security · Saravanampatti</a></li>
                            <li><a href="/devops-course-coimbatore" className="hover:text-secondary transition-colors">DevOps & Cloud</a></li>
                        </ul>
                    </div>

                    {/* Quick Courses 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">Advanced Tracks</h4>
                        <ul className="space-y-3 text-gray-400 text-sm font-medium">
                            <li><a href="/data-science-course-coimbatore" className="hover:text-secondary transition-colors">Data Science</a></li>
                            <li><a href="/ui-ux-design-training-coimbatore" className="hover:text-secondary transition-colors">UI/UX Design</a></li>
                            <li><a href="/aws-training-coimbatore" className="hover:text-secondary transition-colors">AWS Training</a></li>
                            <li><a href="/cloud-computing-course-coimbatore" className="hover:text-secondary transition-colors">Cloud Computing</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">Explore</h4>
                        <ul className="space-y-3 text-gray-400 text-sm font-medium">
                            <li><a href="#about" className="hover:text-secondary transition-colors">About the Mentor</a></li>
                            <li><a href="/student-success-stories" className="hover:text-secondary transition-colors">Student Stories</a></li>
                            <li><a href="/placements" className="hover:text-secondary transition-colors">Career Support</a></li>
                            <li><a href="/cyber-security-placement-program" className="hover:text-secondary transition-colors">Cyber Security Placements</a></li>
                            <li><a href="/blog" className="hover:text-secondary transition-colors">Blog</a></li>
                            <li><a href="/resources" className="hover:text-secondary transition-colors">Resources</a></li>
                            <li><a href="#contact" className="hover:text-secondary transition-colors">Book Consultation</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-500 text-xs font-semibold">
                        <p className="mb-2">&copy; {new Date().getFullYear()} OneinfoAcademy. All rights reserved.</p>
                        <p className="text-gray-400">Oneinfo Academy – Premium IT Skill Academy in Coimbatore. Not affiliated with any degree-granting engineering colleges.</p>
                    </div>
                    <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                        <span>Industry Ready</span>
                        <span className="w-1 h-1 bg-secondary rounded-full"></span>
                        <span>Project Driven</span>
                        <span className="w-1 h-1 bg-secondary rounded-full"></span>
                        <span>Mentor Led</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

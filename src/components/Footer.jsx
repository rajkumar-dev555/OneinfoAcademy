import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">
                            Oneinfo<span className="text-secondary">Academy</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering the next generation of tech leaders with world-class education and comprehensive career support.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Programs</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-secondary transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Data Science</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Cyber Security</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Success Stories</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/people/Oneinfo-it-academy/61585760608714/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/oneinfo_academy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.307-1.459.718-2.125 1.384-.666.666-1.077 1.335-1.384 2.125-.297.763-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.307.79.718 1.459 1.384 2.125.666.666 1.335 1.077 2.125 1.384.763.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.307 1.459-.718 2.125-1.384.666-.666 1.077-1.335 1.384-2.125.297-.763.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.307-.79-.718-1.459-1.384-2.125-.666-.666-1.335-1.077-2.125-1.384-.763-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/oneinfoacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Oneinfoacademy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

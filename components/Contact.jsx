'use client';

import React, { useState } from 'react';
import { PHONE_DISPLAY, PHONE_TEL, whatsappUrl } from '@/lib/contact';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "cd7a08c7-eba8-4c94-8b7d-b29fe55bcead");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Enquiry sent successfully! We will contact you soon.");
                event.target.reset();
            } else {
                setResult("❌ Something went wrong. Please try again.");
            }
        } catch {
            setResult("❌ Network error. Please try again.");
        }

        setTimeout(() => {
            setResult("");
        }, 5000);
    };

    const courses = [
        "Full Stack Development",
        "Artificial Intelligence & Machine Learning",
        "Cyber Security",
        "DevOps & Cloud Engineering",
        "Data Science & Analytics",
        "UI/UX Design",
        "Digital Marketing",
        "Software Testing (QA)",
        "Networking & Infrastructure",
        "Not Sure – Need Career Guidance",
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Roadmap Section */}
                <div className="bg-gradient-to-br from-primary to-gray-900 rounded-[3rem] p-12 text-center mb-16 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-bold tracking-widest uppercase border border-secondary/30">
                            Exclusive Offer
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight">
                            Free IT Career <span className="text-secondary">Roadmap for 2026</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                            Not sure where to start? Get a free 1-on-1 career consultation for students who want to enter the highly competitive IT industry.
                        </p>
                        <div className="pt-4">
                            <a
                                href="#contact-form"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-secondary hover:bg-secondary/90 text-white font-black text-xl rounded-2xl transition-all shadow-xl shadow-secondary/20 active:scale-95 group"
                            >
                                Get Your Free Roadmap
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div id="contact-form" className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide border border-secondary/20">
                        🚀 Take the Next Step
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-4">
                        Book a <span className="text-secondary">Free Consultation</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Speak directly with an industry professional to decide the right career path for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left - Benefits */}
                    <div className="bg-primary rounded-3xl p-10 text-white flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                        <h3 className="text-2xl font-bold mb-8 relative">Why Consult with Us?</h3>
                        <div className="space-y-6 relative">
                            {[
                                { text: 'Analyze your current skills & background', icon: '🔍' },
                                { text: 'Find the right high-demand domain', icon: '🎯' },
                                { text: 'Understand the industry reality & salaries', icon: '💰' },
                                { text: 'Get a personalized learning roadmap', icon: '🗺️' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="font-medium text-gray-100">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10 relative">
                            <a
                                href={whatsappUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-2xl transition-all shadow-lg active:scale-95"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Consultant
                            </a>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-800">
                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div>
                                <label className="block text-sm font-bold text-primary dark:text-gray-300 mb-2 px-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 transition-all text-primary dark:text-white"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-primary dark:text-gray-300 mb-2 px-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 transition-all text-primary dark:text-white"
                                    placeholder="yourname@domain.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-primary dark:text-gray-300 mb-2 px-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 transition-all text-primary dark:text-white"
                                    placeholder="+91 00000 00000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-primary dark:text-gray-300 mb-2 px-1">Program of Interest</label>
                                <select
                                    name="course"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 transition-all text-primary dark:text-white appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select a Program</option>
                                    {courses.map((course, index) => (
                                        <option key={index} value={course}>{course}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 mt-4 bg-secondary hover:bg-secondary/90 text-white font-black text-lg rounded-2xl transition-all shadow-lg active:scale-95"
                            >
                                Book Consultation Now
                            </button>

                            {result && (
                                <div className={`p-4 rounded-xl text-center text-sm font-bold animate-fade-in ${result.includes("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                    {result}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-20">
                    <h4 className="text-xl font-bold text-primary dark:text-white mb-6 text-center">Visit Our Academy in Coimbatore</h4>
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44153110294!2d76.88483286383637!3d11.011709403862793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f976681%3A0x2e9cffddad9db251!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741328000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Oneinfo Academy Coimbatore Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

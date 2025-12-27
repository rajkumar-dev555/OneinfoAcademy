// import React from 'react';

// const Contact = () => {
//     return (
//         <section id="contact" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
//             <div className="container mx-auto px-4 max-w-4xl">
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark dark:text-white mb-4">
//                         Get in <span className="text-secondary">Touch</span>
//                     </h2>
//                     <p className="text-lg text-gray-600 dark:text-gray-300">
//                         Have questions about our programs? We're here to help.
//                     </p>
//                 </div>

//                 <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-300">
//                     <form className="space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
//                                 <input
//                                     type="text"
//                                     className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-dark dark:text-white transition-colors"
//                                     placeholder="Your Name"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
//                                 <input
//                                     type="email"
//                                     className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-dark dark:text-white transition-colors"
//                                     placeholder="john@example.com"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Program of Interest</label>
//                             <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-dark dark:text-white transition-colors">
//                                 <option>Full Stack Web Development</option>
//                                 <option>Data Science</option>
//                                 <option>UI/UX Design</option>
//                                 <option>Cloud Computing</option>
//                                 <option>Cyber Security</option>
//                                 <option>Others</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
//                             <textarea
//                                 rows="4"
//                                 className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-dark dark:text-white transition-colors"
//                                 placeholder="How can we help you?"
//                             ></textarea>
//                         </div>

//                         <button type="submit" className="w-full py-4 bg-secondary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg">
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;
import React, { useState } from 'react';

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
        } catch (error) {
            setResult("❌ Network error. Please try again.");
        }

        // 🔥 Hide message after 5 seconds
        setTimeout(() => {
            setResult("");
        }, 5000);
    };

    const courses = [
        "Full Stack Web Development",
        "Data Science with Python",
        "Cyber Security Essentials",
        "AI & Machine Learning",
        "UI/UX Design Masterclass",
        "Graphic Design Professional",
        "Advanced SEO Mastery",
        "Digital Marketing Expert",
        "Cloud Computing and DevOps (AWS)",
        "Embedded Systems & IoT",
        "Others"
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark dark:text-white mb-4">
                        Enquire <span className="text-secondary">Now</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Fill out the form below to get more details about our courses.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-300">
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-dark dark:text-white transition-colors"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-dark dark:text-white transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-dark dark:text-white transition-colors"
                                placeholder="+91 98765 43210"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Course of Interest
                            </label>
                            <select
                                name="course"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-gray-800 focus:ring-0 text-dark dark:text-white transition-colors"
                            >
                                <option value="" disabled selected>Select a Course</option>
                                {courses.map((course, index) => (
                                    <option key={index} value={course}>{course}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-secondary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg"
                        >
                            Submit Enquiry
                        </button>

                        {result && (
                            <p className={`text-center text-sm font-medium ${result.includes("✅") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                                {result}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

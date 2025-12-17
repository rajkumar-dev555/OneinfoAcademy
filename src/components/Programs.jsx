// import React, { useState } from 'react';
// import CourseCard from './CourseCard';
// import useScrollAnimation from '../hooks/useScrollAnimation';

// const Programs = () => {
//     const [activeTab, setActiveTab] = useState('All');
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [headerRef, headerAnim] = useScrollAnimation();
//     const [gridRef, gridAnim] = useScrollAnimation();

//     const programs = [
//         // Tech & Data
//         {
//             id: 1,
//             title: 'Full Stack Web Development',
//             category: 'Tech & Data',
//             image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '6 Months',
//             level: 'Beginner to Advanced',
//         },
//         {
//             id: 2,
//             title: 'Data Science with Python',
//             category: 'Tech & Data',
//             image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '4 Months',
//             level: 'Intermediate',
//         },
//         {
//             id: 3,
//             title: 'Cyber Security Essentials',
//             category: 'Tech & Data',
//             image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '3 Months',
//             level: 'Beginner',
//         },
//         {
//             id: 4,
//             title: 'AI & Machine Learning',
//             category: 'Tech & Data',
//             image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '5 Months',
//             level: 'Advanced',
//         },
//         // Design
//         {
//             id: 5,
//             title: 'UI/UX Design Masterclass',
//             category: 'Design',
//             image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '4 Months',
//             level: 'Beginner',
//         },
//         {
//             id: 6,
//             title: 'Graphic Design Professional',
//             category: 'Design',
//             image: 'https://img.freepik.com/premium-vector/vector-man-working-computer-graphic-designing-with-pen-tool_1272652-757.jpg?semt=ais_hybrid&w=740&q=80',
//             duration: '3 Months',
//             level: 'Beginner',
//         },
//         // Marketing
//         {
//             id: 9,
//             title: 'Advanced SEO Mastery',
//             category: 'Marketing',
//             image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '3 Months',
//             level: 'Beginner',
//         },
//         {
//             id: 10,
//             title: 'Digital Marketing Expert',
//             category: 'Marketing',
//             image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '4 Months',
//             level: 'Advanced',
//         },
//         // Bootcamps
//         {
//             id: 7,
//             title: 'Cloud Computing Bootcamp (AWS)',
//             category: 'Bootcamps',
//             image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '8 Weeks',
//             level: 'Intensive',
//         },
//         // Advanced
//         {
//             id: 8,
//             title: 'Embedded Systems & IoT',
//             category: 'Advanced',
//             image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//             duration: '5 Months',
//             level: 'Advanced',
//         },
//     ];

//     const categories = ['All', 'Tech & Data', 'Design', 'Marketing', 'Bootcamps', 'Advanced'];

//     const filteredPrograms = activeTab === 'All'
//         ? programs
//         : programs.filter(p => p.category === activeTab);

//     return (
//         <section id="programs" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
//             <div className="container mx-auto px-4">
//                 <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
//                     <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark dark:text-white mb-6">
//                         Explore Our <span className="text-secondary">Programs</span>
//                     </h2>
//                     <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
//                         Future-proof your career with our industry-aligned courses.
//                     </p>

//                     {/* Tabs */}
//                     <div className="flex flex-wrap justify-center gap-3 mb-10">
//                         {categories.map((tab) => (
//                             <button
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab)}
//                                 className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
//                                     ? 'bg-secondary text-white shadow-lg scale-105'
//                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
//                                     }`}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Course Details View */}
//                 {selectedCourse ? (
//                     <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
//                         <div className="relative h-64 md:h-96">
//                             <img
//                                 src={selectedCourse.image}
//                                 alt={selectedCourse.title}
//                                 className="w-full h-full object-cover"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
//                                 <div>
//                                     <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
//                                         {selectedCourse.category}
//                                     </span>
//                                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedCourse.title}</h2>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => {
//                                     setSelectedCourse(null);
//                                     // Smooth scroll back to programs header when closing
//                                     setTimeout(() => {
//                                         document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
//                                     }, 100);
//                                 }}
//                                 className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
//                             >
//                                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         <div className="p-8 md:p-12">
//                             <div className="flex flex-wrap gap-6 mb-8 text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-8">
//                                 <div className="flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-secondary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                     </svg>
//                                     <span className="font-semibold text-dark dark:text-white">Duration:</span>&nbsp;{selectedCourse.duration}
//                                 </div>
//                                 <div className="flex items-center">
//                                     <svg className="w-5 h-5 mr-2 text-secondary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                     </svg>
//                                     <span className="font-semibold text-dark dark:text-white">Level:</span>&nbsp;{selectedCourse.level}
//                                 </div>
//                             </div>

//                             <div className="space-y-6 text-gray-700 dark:text-gray-300">
//                                 <h3 className="text-2xl font-bold text-dark dark:text-white">About the Course</h3>
//                                 <p className="leading-relaxed">
//                                     This comprehensive {selectedCourse.title} program is designed to take you from basics to advanced concepts.
//                                     You will work on real-world projects, learn industry-standard tools, and receive personalized mentorship
//                                     to launch your career in {selectedCourse.category}.
//                                 </p>

//                                 <h4 className="text-xl font-bold text-dark dark:text-white mt-8">What You'll Learn</h4>
//                                 <ul className="grid md:grid-cols-2 gap-4">
//                                     <li className="flex items-start">
//                                         <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         <span>Industry-relevant curriculum</span>
//                                     </li>
//                                     <li className="flex items-start">
//                                         <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         <span>Hands-on projects & Portfolio</span>
//                                     </li>
//                                     <li className="flex items-start">
//                                         <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         <span>Job placement assistance</span>
//                                     </li>
//                                     <li className="flex items-start">
//                                         <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         <span>Lifetime access to material</span>
//                                     </li>
//                                 </ul>
//                             </div>

//                             <div className="mt-10 flex gap-4">
//                                 <button
//                                     onClick={() => {
//                                         setSelectedCourse(null);
//                                         // Smooth scroll back to programs header when closing
//                                         setTimeout(() => {
//                                             document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
//                                         }, 100);
//                                     }}
//                                     className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-semibold"
//                                 >
//                                     Back to Programs
//                                 </button>
//                                 <a href="#contact" className="px-8 py-3 bg-secondary hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold flex-1 text-center">
//                                     Enroll Now
//                                 </a>
//                             </div>

//                             {/* Additional Information Cards */}
//                             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {/* Card 1: Job Openings & Growth */}
//                                 <div className="p-6 bg-blue-50 dark:bg-gray-700/50 rounded-2xl border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
//                                     <div className="flex items-center mb-4">
//                                         <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
//                                             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-xl font-bold text-dark dark:text-white">Market Demand</h3>
//                                     </div>
//                                     <p className="text-gray-600 dark:text-gray-300 mb-4">
//                                         Explosive growth in job openings for {selectedCourse.title} roles.
//                                     </p>
//                                     <ul className="space-y-2">
//                                         <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
//                                             <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                                             High demand in top tech companies
//                                         </li>
//                                         <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
//                                             <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                                             Projected 25% growth year-over-year
//                                         </li>
//                                     </ul>
//                                 </div>

//                                 {/* Card 2: Salary Packages */}
//                                 <div className="p-6 bg-green-50 dark:bg-gray-700/50 rounded-2xl border border-green-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
//                                     <div className="flex items-center mb-4">
//                                         <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400 mr-4">
//                                             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-xl font-bold text-dark dark:text-white">Salary Potential</h3>
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-4">
//                                         <div>
//                                             <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold">India</p>
//                                             <p className="text-lg font-bold text-dark dark:text-white">₹6L - ₹24L</p>
//                                         </div>
//                                         <div>
//                                             <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold">USA</p>
//                                             <p className="text-lg font-bold text-dark dark:text-white">$80k - $150k</p>
//                                         </div>
//                                     </div>
//                                     <p className="text-xs text-gray-500 mt-2">*Based on industry averages for experienced professionals</p>
//                                 </div>

//                                 {/* Card 3: Why Choose This */}
//                                 <div className="p-6 bg-purple-50 dark:bg-gray-700/50 rounded-2xl border border-purple-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
//                                     <div className="flex items-center mb-4">
//                                         <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
//                                             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-xl font-bold text-dark dark:text-white">Why This Program?</h3>
//                                     </div>
//                                     <ul className="space-y-3">
//                                         <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
//                                             <svg className="w-5 h-5 text-purple-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                             </svg>
//                                             Live Mentorship from Experts
//                                         </li>
//                                         <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
//                                             <svg className="w-5 h-5 text-purple-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                             </svg>
//                                             Real-world Capstone Projects
//                                         </li>
//                                         <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
//                                             <svg className="w-5 h-5 text-purple-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                             </svg>
//                                             100% Placement Support
//                                         </li>
//                                     </ul>
//                                 </div>

//                                 {/* Card 4: Learning Path */}
//                                 <div className="p-6 bg-orange-50 dark:bg-gray-700/50 rounded-2xl border border-orange-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
//                                     <div className="flex items-center mb-4">
//                                         <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-lg text-orange-600 dark:text-orange-400 mr-4">
//                                             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-xl font-bold text-dark dark:text-white">Your Journey</h3>
//                                     </div>
//                                     <div className="relative pl-4 border-l-2 border-orange-200 dark:border-orange-800 space-y-4">
//                                         <div className="relative">
//                                             <span className="absolute -left-[21px] top-1 w-3 h-3 bg-orange-400 rounded-full"></span>
//                                             <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Fundamentals & Basics</p>
//                                         </div>
//                                         <div className="relative">
//                                             <span className="absolute -left-[21px] top-1 w-3 h-3 bg-orange-400 rounded-full"></span>
//                                             <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Advanced Concepts</p>
//                                         </div>
//                                         <div className="relative">
//                                             <span className="absolute -left-[21px] top-1 w-3 h-3 bg-orange-400 rounded-full"></span>
//                                             <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Live Projects</p>
//                                         </div>
//                                         <div className="relative">
//                                             <span className="absolute -left-[21px] top-1 w-3 h-3 bg-orange-400 rounded-full ring-4 ring-orange-100 dark:ring-orange-900"></span>
//                                             <p className="text-sm font-bold text-orange-600 dark:text-orange-400">Job Ready!</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div ref={gridRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${gridAnim}`}>
//                         {filteredPrograms.map((program) => (
//                             <CourseCard
//                                 key={program.id}
//                                 {...program}
//                                 onClick={() => {
//                                     setSelectedCourse(program);
//                                     // Smooth scroll to details view top
//                                     setTimeout(() => {
//                                         document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
//                                     }, 100);
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Programs;



import React, { useState } from 'react';
import CourseCard from './CourseCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Programs = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [headerRef, headerAnim] = useScrollAnimation();
    const [gridRef, gridAnim] = useScrollAnimation();

    const programs = [
        // Tech & Data
        {
            id: 1,
            title: 'Full Stack Web Development',
            category: 'Tech & Data',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '6 Months',
            level: 'Beginner to Advanced',
        },
        {
            id: 2,
            title: 'Data Science with Python',
            category: 'Tech & Data',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '4 Months',
            level: 'Intermediate',
        },
        {
            id: 3,
            title: 'Cyber Security Essentials',
            category: 'Tech & Data',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '3 Months',
            level: 'Beginner',
        },
        {
            id: 4,
            title: 'AI & Machine Learning',
            category: 'Tech & Data',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '5 Months',
            level: 'Advanced',
        },
        // Design
        {
            id: 5,
            title: 'UI/UX Design Masterclass',
            category: 'Design',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '4 Months',
            level: 'Beginner',
        },
        {
            id: 6,
            title: 'Graphic Design Professional',
            category: 'Design',
            image: 'https://img.freepik.com/premium-vector/vector-man-working-computer-graphic-designing-with-pen-tool_1272652-757.jpg?semt=ais_hybrid&w=740&q=80',
            duration: '3 Months',
            level: 'Beginner',
        },
        // Marketing
        {
            id: 9,
            title: 'Advanced SEO Mastery',
            category: 'Marketing',
            image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '3 Months',
            level: 'Beginner',
        },
        {
            id: 10,
            title: 'Digital Marketing Expert',
            category: 'Marketing',
            image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '4 Months',
            level: 'Advanced',
        },
        // Bootcamps
        {
            id: 7,
            title: 'Cloud Computing Bootcamp (AWS)',
            category: 'Bootcamps',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '8 Weeks',
            level: 'Intensive',
        },
        // Advanced
        {
            id: 8,
            title: 'Embedded Systems & IoT',
            category: 'Advanced',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            duration: '5 Months',
            level: 'Advanced',
        },
    ];

    const [visibleCount, setVisibleCount] = useState(4);

    const categories = ['All', 'Tech & Data', 'Design', 'Marketing', 'Bootcamps', 'Advanced'];

    const filteredPrograms = activeTab === 'All'
        ? programs
        : programs.filter(p => p.category === activeTab);

    // Reset visible count when tab changes
    React.useEffect(() => {
        setVisibleCount(4);
    }, [activeTab]);

    const displayedPrograms = filteredPrograms.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    const handleShowLess = () => {
        setVisibleCount(4);
    };

    return (
        <section id="programs" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div ref={headerRef} className={`text-center mb-16 ${headerAnim}`}>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark dark:text-white mb-6">
                        Explore Our <span className="text-secondary">Programs</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                        Future-proof your career with our industry-aligned courses.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
                                    ? 'bg-secondary text-white shadow-lg scale-105'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Details View */}
                {selectedCourse ? (
                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
                        <div className="relative h-64 md:h-96">
                            <img
                                src={selectedCourse.image}
                                alt={selectedCourse.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div>
                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                                        {selectedCourse.category}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedCourse.title}</h2>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setSelectedCourse(null);
                                    // Smooth scroll back to programs header when closing
                                    setTimeout(() => {
                                        document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex flex-wrap gap-6 mb-8 text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-8">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-secondary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-semibold text-dark dark:text-white">Duration:</span>&nbsp;{selectedCourse.duration}
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-secondary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="font-semibold text-dark dark:text-white">Level:</span>&nbsp;{selectedCourse.level}
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-700 dark:text-gray-300">
                                <h3 className="text-2xl font-bold text-dark dark:text-white">About the Course</h3>
                                <p className="leading-relaxed">
                                    This comprehensive {selectedCourse.title} program is designed to take you from basics to advanced concepts.
                                    You will work on real-world projects, learn industry-standard tools, and receive personalized mentorship
                                    to launch your career in {selectedCourse.category}.
                                </p>

                                <h4 className="text-xl font-bold text-dark dark:text-white mt-8">What You'll Learn</h4>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Industry-relevant curriculum</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Hands-on projects & Portfolio</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Job placement assistance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Lifetime access to material</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <button
                                    onClick={() => {
                                        setSelectedCourse(null);
                                        // Smooth scroll back to programs header when closing
                                        setTimeout(() => {
                                            document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }}
                                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-semibold"
                                >
                                    Back to Programs
                                </button>
                                <a href="#contact" className="px-8 py-3 bg-secondary hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold flex-1 text-center">
                                    Enroll Now
                                </a>
                            </div>

                            {/* Additional Information Cards */}
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Card 1: Job Openings & Growth */}
                                <div className="p-6 bg-blue-50 dark:bg-gray-700/50 rounded-2xl border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-dark dark:text-white">Market Demand</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Explosive growth in job openings for {selectedCourse.title} roles.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            High demand in top tech companies
                                        </li>
                                        <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            Projected 25% growth year-over-year
                                        </li>
                                    </ul>
                                </div>

                                {/* Card 2: Salary Packages */}
                                <div className="p-6 bg-green-50 dark:bg-gray-700/50 rounded-2xl border border-green-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400 mr-4">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-dark dark:text-white">Salary Potential</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold">India</p>
                                            <p className="text-lg font-bold text-dark dark:text-white">₹6L - ₹24L</p>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold">USA</p>
                                            <p className="text-lg font-bold text-dark dark:text-white">$80k - $150k</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">*Based on industry averages for experienced professionals</p>
                                </div>

                                {/* Card 3: Why Choose This */}
                                <div className="p-6 bg-purple-50 dark:bg-gray-700/50 rounded-2xl border border-purple-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-dark dark:text-white">Why This Program?</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                            <svg className="w-5 h-5 text-purple-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Live Mentorship from Experts
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                            <svg className="w-5 h-5 text-purple-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Real-world Capstone Projects
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                                            <svg className="w-5 h-5 text-purple-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            100% Placement Support
                                        </li>
                                    </ul>
                                </div>

                                {/* Card 4: Learning Path */}
                                <div className="p-6 bg-orange-50 dark:bg-gray-700/50 rounded-2xl border border-orange-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-lg text-orange-600 dark:text-orange-400 mr-4">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-dark dark:text-white">Your Journey</h3>
                                    </div>
                                    <div className="relative pl-4 border-l-2 border-orange-200 dark:border-orange-800 space-y-4">
                                        <div className="relative">
                                            <span className="absolute -left-[21px] top-1 w-3 h-3 bg-orange-400 rounded-full"></span>
                                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Fundamentals & Basics</p>
                                        </div>
                                        <div className="relative">
                                            <span className="absolute -left-[21px] top-1 w-3 h-3 bg-orange-400 rounded-full"></span>
                                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Advanced Concepts</p>
                                        </div>
                                        <div className="relative">
                                            <span className="absolute -left-[21px] top-1 w-3 h-3 bg-orange-400 rounded-full"></span>
                                            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Live Projects</p>
                                        </div>
                                        <div className="relative">
                                            <span className="absolute -left-[21px] top-1 w-3 h-3 bg-orange-400 rounded-full ring-4 ring-orange-100 dark:ring-orange-900"></span>
                                            <p className="text-sm font-bold text-orange-600 dark:text-orange-400">Job Ready!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div ref={gridRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${gridAnim}`}>
                            {displayedPrograms.map((program) => (
                                <CourseCard
                                    key={program.id}
                                    {...program}
                                    onClick={() => {
                                        setSelectedCourse(program);
                                        // Smooth scroll to details view top
                                        setTimeout(() => {
                                            document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }}
                                />
                            ))}
                        </div>

                        {/* Load More / Show Less Buttons */}
                        <div className="mt-12 text-center">
                            {visibleCount < filteredPrograms.length && (
                                <button
                                    onClick={handleLoadMore}
                                    className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-dark dark:text-white font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
                                >
                                    Load More
                                </button>
                            )}
                            {visibleCount > 4 && (
                                <button
                                    onClick={handleShowLess}
                                    className="px-8 py-3 ml-4 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                                >
                                    Show Less
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Programs;

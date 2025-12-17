import React from 'react';

const CourseCard = ({ title, category, image, duration, level, onClick }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">
                        {category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {duration}
                    </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-dark dark:text-white mb-2 line-clamp-2">{title}</h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <svg className="w-4 h-4 mr-1 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {level}
                </div>
                <button onClick={onClick} className="w-full py-2 px-4 border border-secondary text-secondary dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-secondary hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors font-medium text-sm">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default CourseCard;

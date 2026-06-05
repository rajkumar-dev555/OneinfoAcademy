'use client';

import React from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contact';

const CallWidget = () => {
    return (
        <div className="fixed bottom-[5.5rem] md:bottom-24 right-4 md:right-6 z-[9999] group">
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-dark dark:text-white px-4 py-2 rounded-lg shadow-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100 dark:border-gray-700">
                Call us at {PHONE_DISPLAY}
                {/* Triangle arrow */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-2 border-y-8 border-y-transparent border-l-8 border-l-white dark:border-l-gray-800"></div>
            </div>

            {/* Floating Button */}
            <a
                href={PHONE_TEL}
                className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce-slow"
                aria-label="Call us"
            >
                <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </a>
        </div>
    );
};

export default CallWidget;

import React from 'react';

const WhatsAppWidget = () => {
    // Replace with your actual WhatsApp number (including country code)
    const phoneNumber = "+919940804524";
    const message = "Hi OneinfoAcademy, I'm interested in your programs and would like to know more!";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-24 right-6 z-[9999] group">
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-dark dark:text-white px-4 py-2 rounded-lg shadow-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100 dark:border-gray-700">
                Chat with us on WhatsApp
                {/* Triangle arrow */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-2 border-y-8 border-y-transparent border-l-8 border-l-white dark:border-l-gray-800"></div>
            </div>

            {/* Floating Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce-slow"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 01-4.077-1.102l-.292-.174-3.038.797.81-2.96-.192-.303a8.142 8.142 0 01-1.247-4.321c0-4.502 3.662-8.164 8.166-8.164a8.16 8.16 0 015.772 2.39 8.11 8.11 0 012.39 5.774c0 4.503-3.663 8.165-8.168 8.165m8.166-17.653A9.22 9.22 0 0012.658 1.157c-5.113 0-9.273 4.16-9.273 9.274 0 1.635.427 3.23 1.238 4.646l-1.314 4.8 4.909-1.288A9.24 9.24 0 0012.658 20.97c5.111 0 9.271-4.16 9.271-9.274a9.213 9.213 0 00-2.716-6.556" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppWidget;

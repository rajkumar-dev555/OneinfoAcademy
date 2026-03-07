import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Lazy load components that are below the fold
const About = lazy(() => import('../components/About'));
const Programs = lazy(() => import('../components/Programs'));
const WhoShouldJoin = lazy(() => import('../components/WhoShouldJoin'));
const TrainingModel = lazy(() => import('../components/TrainingModel'));
const SuccessStories = lazy(() => import('../components/SuccessStories'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const PlacementSupport = lazy(() => import('../components/PlacementSupport'));
const SEOContent = lazy(() => import('../components/SEOContent'));
const FAQSection = lazy(() => import('../components/FAQ'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));
const ScrollToTop = lazy(() => import('../components/ScrollToTop'));
const WhatsAppWidget = lazy(() => import('../components/WhatsAppWidget'));

// Loading fallback
const LoadingSection = () => (
    <div className="py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
    </div>
);

const Home = () => {
    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light font-sans transition-colors duration-300">
            <Navbar />
            <Hero />
            <main>
                <Suspense fallback={<LoadingSection />}>
                    <About />
                    <Programs />
                    <SEOContent />
                    <WhoShouldJoin />
                    <TrainingModel />
                    <SuccessStories />
                    <WhyChooseUs />
                    <PlacementSupport />
                    <FAQSection />
                    <Contact />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
                <ScrollToTop />
                <WhatsAppWidget />
            </Suspense>
        </div>
    );
};

export default Home;

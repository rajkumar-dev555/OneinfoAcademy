import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    React.useEffect(() => {
        document.title = "Blog - Oneinfo Academy | Best IT Training Institute in Coimbatore";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Stay updated with the latest trends in IT, career advice, and success stories from Coimbatore's leading tech hub. We cover AI, Full Stack, Data Science and more.");
        }
    }, []);

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
            <Navbar />
            <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Oneinfo Academy Blog
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest trends in IT, career advice, and success stories from Coimbatore's leading tech hub.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                            <Link to={`/blog/${post.slug}`}>
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.author}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-primary font-bold hover:underline">
                                        Read More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;

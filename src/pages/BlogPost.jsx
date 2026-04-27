import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    React.useEffect(() => {
        if (post) {
            document.title = `${post.title} | Oneinfo Academy`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", post.excerpt);
            }
        }
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" />;
    }

    return (
        <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
            <Navbar />
            <div className="pt-24 pb-16">
                <article className="max-w-4xl mx-auto px-4">
                    <Link to="/blog" className="inline-flex items-center text-primary font-medium mb-8 hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs mr-4">
                                {post.category}
                            </span>
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.author}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 h-[400px]">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="blog-content max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.keywords && post.keywords.map((kw, idx) => (
                                <span key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-lg text-sm">
                                    #{kw.replace(/\s+/g, '')}
                                </span>
                            ))}
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to kickstart your IT career?</h3>
                            <p className="mb-6 text-gray-600 dark:text-gray-300">
                                Join Oneinfo Academy and get trained in the latest technologies with placement support in Coimbatore.
                            </p>
                            <Link 
                                to="/" 
                                className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-dark transition-all transform hover:scale-105"
                            >
                                Explore Our Courses
                            </Link>
                        </div>
                    </footer>
                </article>
            </div>
            <Footer />
        </div>
    );
};

export default BlogPost;

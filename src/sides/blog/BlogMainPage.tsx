import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const SimpleBlogPage: React.FC = () => {
    // Sample blog post data with slugs for URLs
    const blogPosts = [
        {
            id: 1,
            title: "Trying to make Sense out of LLM Architecture",
            date: "10. April 2025",
            excerpt: "currently in the making :)",
            slug: "trying-to-make-sense-out-of-llm-architecture",
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Simple Header */}
            <div className="max-w-3xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6">Jonathan's Blog</h1>
                <p className="text-xl mb-8">
                    Thoughts and explorations on coding, AI, and computer science.
                </p>

                {/* Navigation Links */}
                <div className="flex space-x-6 text-lg mb-10">
                    <Link to="/" className="hover:underline">home</Link>
                    <Link to="/blog" className="font-medium">blog</Link>
                    <a href="https://github.com/TigaByte" className="hover:underline">github</a>
                </div>

                {/* Blog Posts - Simple List with functional links */}
                <div className="space-y-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white rounded p-6 shadow-sm">
                            <Link to={`/blog/${post.slug}`}>
                                <h2 className="text-2xl font-bold mb-2 hover:text-emerald-800">{post.title}</h2>
                            </Link>
                            <div className="text-gray-500 mb-3 text-sm">{post.date}</div>
                            <p className="text-gray-700 mb-4">{post.excerpt}</p>
                            <Link to={`/blog/${post.slug}`} className="text-emerald-800 hover:underline">
                                Read more →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Simple Footer */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600">
                    <a href="mailto:me" className="hover:underline">email</a> ·
                    <a href="https://github.com/TigaByte" className="hover:underline ml-3">github</a> ·
                    <a href="#" className="hover:underline ml-3">discord</a>
                </div>
            </div>
        </div>
    );
};

export default SimpleBlogPage;
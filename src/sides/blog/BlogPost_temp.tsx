import React from 'react';

const BlogPost: React.FC = () => {
    // Sample blog post data
    const post = {
        title: "Lorem Ipsum dolor",
        date: "April 5, 2025",
        author: "Jonathan",
        content: `
           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        `
    };

    // Function to convert markdown-style headings to JSX
    const formatContent = (content: string) => {
        // Split content by lines
        const lines = content.trim().split('\n');

        return lines.map((line, index) => {
            // Check for markdown headings (##)
            if (line.trim().startsWith('## ')) {
                return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                        {line.trim().substring(3)}
                    </h2>
                );
            }
            // Regular paragraph with appropriate spacing
            return line.trim() ? (
                <p key={index} className="my-4">
                    {line.trim()}
                </p>
            ) : null;
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto p-8">
                {/* Navigation */}
                <div className="mb-10">
                    <a href="/blog" className="text-emerald-800 hover:underline">← Back to Blog</a>
                </div>

                {/* Blog Post Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

                    {/* Author and Date Row */}
                    <div className="flex justify-between items-center mb-6">
                        {/* Author with profile pic */}
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-emerald-700 mr-3 flex items-center justify-center text-white font-bold">
                                {/* Placeholder for profile picture */}
                                J
                            </div>
                            <span className="font-medium">{post.author}</span>
                        </div>

                        {/* Date */}
                        <div className="text-gray-500">{post.date}</div>
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-gray-300 my-6"></div>
                </div>

                {/* Blog Post Content */}
                <div className="prose">
                    {formatContent(post.content)}
                </div>

                {/* Simple Footer */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <div className="text-gray-700">© 2025 Jonathan</div>
                        <div className="flex space-x-6 text-gray-600">
                            <a href="#" className="hover:underline">discord</a>
                            <a href="https://github.com/TigaByte" className="hover:underline">github</a>
                            <a href="mailto:me" className="hover:underline">email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
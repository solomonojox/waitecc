import React, { useState } from 'react';
import { blogPosts } from '../Components/Blog/BlogData';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    const post = blogPosts.find(post => post.id === postId);
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">My Classic Blog</h1>
          <p className="text-gray-600 italic">Thoughts, stories and ideas</p>
          <div className="w-16 h-1 bg-gray-300 mx-auto mt-4"></div>
        </header>

        {selectedPost ? (
          <div className="mb-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to all posts
            </button>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {selectedPost.imageUrl && (
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-6">
                <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">{selectedPost.title}</h2>

                <div className="flex items-center text-gray-600 text-sm mb-6">
                  <span>{new Date(selectedPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedPost.author}</span>
                  {selectedPost.categories && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{selectedPost.categories.join(', ')}</span>
                    </>
                  )}
                </div>

                <div className="prose prose-lg max-w-none">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map(post => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => handlePostClick(post.id)}
              >
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <h2 className="text-xl font-serif font-bold text-gray-800 mb-2">{post.title}</h2>

                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>

                  <p className="text-gray-700 line-clamp-3">{post.excerpt || post.content[0]}</p>

                  <div className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    Read more →
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
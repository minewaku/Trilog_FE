import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react';

const Feed = () => {
    const [likedPosts, setLikedPosts] = useState(new Set());

    // Sample data - in real app, this would come from your backend
    const posts = [
        {
            id: 1,
            user: {
                username: 'johndoe',
                avatar: '/api/placeholder/32/32',
                isVerified: true,
                fullName: 'John Doe',
            },
            image: '/api/placeholder/600/600',
            caption: 'Beautiful sunset at the beach! 🌅 #sunset #beach #vacation',
            likes: 1234,
            commentsCount: 56,
            timestamp: '2h',
            location: 'Malibu, California',
            comments: [
                {
                    username: 'janedoe',
                    text: 'Absolutely gorgeous! 😍',
                    likes: 24,
                },
                {
                    username: 'mike_smith',
                    text: 'Wish I was there!',
                    likes: 12,
                },
            ],
        },
        // Add more posts...
    ];

    const handleLike = (postId) => {
        setLikedPosts((prev) => {
            const newLiked = new Set(prev);
            if (newLiked.has(postId)) {
                newLiked.delete(postId);
            } else {
                newLiked.add(postId);
            }
            return newLiked;
        });
    };

    return (
        <div className="scrollbar mx-auto max-w-xl pb-8 pt-20">
            {posts.map((post) => (
                <article key={post.id} className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                    {/* Post Header */}
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <img src={post.user.avatar} alt={post.user.username} className="h-10 w-10 rounded-full ring-2 ring-gray-100" />
                                {post.user.isVerified && (
                                    <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-blue-500 ring-2 ring-white">
                                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center space-x-1">
                                    <span className="cursor-pointer font-semibold hover:underline">{post.user.username}</span>
                                </div>
                                {post.location && <div className="text-xs text-gray-500">{post.location}</div>}
                            </div>
                        </div>
                        <button className="rounded-full p-1 transition-colors duration-200 hover:bg-gray-100">
                            <MoreHorizontal className="h-5 w-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Post Image */}
                    <div className="relative aspect-square">
                        <img src={post.image} alt="Post content" className="h-full w-full object-cover" />
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button
                                    className={`transform transition-transform duration-200 hover:scale-110 ${
                                        likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
                                    }`}
                                    onClick={() => handleLike(post.id)}
                                >
                                    <Heart className={`h-6 w-6 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                                </button>
                                <button className="transform transition-transform duration-200 hover:scale-110">
                                    <MessageCircle className="h-6 w-6" />
                                </button>
                                <button className="transform transition-transform duration-200 hover:scale-110">
                                    <Send className="h-6 w-6" />
                                </button>
                            </div>
                            <button className="transform transition-transform duration-200 hover:scale-110">
                                <Bookmark className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Likes */}
                        <div className="mb-2 font-semibold">{(post.likes + (likedPosts.has(post.id) ? 1 : 0)).toLocaleString()} likes</div>

                        {/* Caption */}
                        <div className="mb-3 space-y-1">
                            <div className="break-words">
                                <span className="mr-2 cursor-pointer font-semibold hover:underline">{post.user.username}</span>
                                {post.caption}
                            </div>
                        </div>

                        {/* Comments */}
                        {post.commentsCount > 0 && <button className="mb-2 text-sm text-gray-500 hover:text-gray-700">View all {post.commentsCount} comments</button>}
                        {post.comments.slice(0, 2).map((comment, index) => (
                            <div key={index} className="mb-1 text-sm">
                                <span className="mr-2 cursor-pointer font-semibold hover:underline">{comment.username}</span>
                                {comment.text}
                            </div>
                        ))}

                        {/* Timestamp */}
                        <div className="mt-2 text-xs uppercase tracking-wide text-gray-500">{post.timestamp} ago</div>
                    </div>

                    {/* Comment Input */}
                    <div className="border-t border-gray-100 p-4">
                        <div className="flex items-center space-x-3">
                            <button className="text-gray-400 hover:text-gray-500">
                                <Smile className="h-6 w-6" />
                            </button>
                            <input type="text" placeholder="Add a comment..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400" />
                            <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:hover:text-blue-500">Post</button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Feed;

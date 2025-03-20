import React, { useState } from 'react';
import { GoHeart } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Comment = ({ comment, replyHook, handleReply }) => {
    console.log('replyHook from Comment: ', replyHook);

    // Function to parse content and convert @username to Link components
    const renderContentWithLinks = (content) => {
        // Split the content by spaces and map over each part
        const parts = content.split(/(\s+)/); // Preserve spaces
        return parts.map((part, index) => {
            // Check if the part matches @something
            if (part.match(/^@\w+$/)) {
                const username = part.slice(1); // Remove the "@"
                return (
                    <Link key={index} to={`/profile/${username}`} className="font-normal text-blue-600 hover:underline">
                        {part}
                    </Link>
                );
            }
            // Return plain text for non-matching parts
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <div key={comment.id} className="flex space-x-2 text-sm">
            <div className="flex h-9 w-9 flex-col space-y-2">
                <Link to={`/profile/${comment.user.username}`} className="h-9 w-9">
                    <img src={comment.user.avatar || '/placeholder.svg'} alt={comment.user.username} className="mr-3 h-9 w-9 rounded-full object-cover" />
                </Link>
                <div className="flex items-center justify-center text-gray-500">
                    <button>
                        <GoHeart size={20} />
                    </button>
                </div>
            </div>
            <div className="flex flex-1 flex-col">
                <Link to={`/profile/${comment.user.username}`} className="mb-1 h-fit w-fit">
                    <span className="text-sm font-semibold text-gray-800">{comment.user.username}</span>
                </Link>
                <div className="mb-2">
                    <span className="text-sm">
                        {comment.reply && (
                            <span className="font-normal text-blue-600">
                                <Link to={`/profile/${comment.reply.username}`}>{'@' + comment.reply.username}</Link>{' '}
                            </span>
                        )}
                        {renderContentWithLinks(comment.content)}
                    </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">{comment.date}</span>
                        {comment.likes > 0 && (
                            <button className="text-sm text-gray-500 hover:text-gray-800">
                                {comment.likes} {comment.likes > 1 ? 'Likes' : 'Like'}
                            </button>
                        )}
                        <button
                            className="text-sm text-gray-500 hover:text-gray-800"
                            onClick={() => {
                                replyHook.setReply(comment.user);
                                handleReply(comment.user);
                                console.log('replyHook from Comment: ', replyHook);
                            }}
                        >
                            Reply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;

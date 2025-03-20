import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { IconButton } from '~/components/Button';
import { SlOptions } from 'react-icons/sl';
import { IMAGE_1 } from '~/assets';
import { MessageBox } from '~/components/Input';
import { GoHeart } from 'react-icons/go';
import { useReply } from '~/hooks';
import { Link } from 'react-router-dom';
import { useModal } from '~/hooks';
import { PostModal } from '~/components/Modal';
import { CommentBox, CommentGroup } from '~/components/Comment';

const Post = ({ post, onClick }) => {
    const { openModal, closeModal } = useModal();
    const [showComments, setShowComments] = useState(false); // Renamed for clarity
    const replyHook = useReply('');

    const handleReply = (destinationUser) => {
        replyHook.setReply(destinationUser);
    }

    return (
        <div className="h-fit w-[86.91%] rounded-lg border border-gray-300 bg-white" onClick={onClick}>
            <Header post={post} />

            {/* content */}
            <p className="px-4">{post.description}</p>

            {/* tags     */}
            <p className="px-4 pb-2 pt-2">
                {post.tags?.map((tag, index) => (
                    <Link to={`/tags/${tag}`} key={index} className="mr-2">
                        <span className="text-blue-600 hover:underline">#{tag}</span>
                    </Link>
                ))}
            </p>

            {/* images */}
            <div className="relative hover:cursor-pointer" onClick={() => openModal(<PostModal post={post} onClose={closeModal} />)}>
                <img src={post.images[0] || '/placeholder.svg'} alt="Post" className="w-full object-contain" />
                {post.images.length > 1 && <span className="absolute right-4 top-4 rounded-full bg-gray-800 px-2 py-1 text-xs text-white">+{post.images.length - 1}</span>}
            </div>

            <div className="p-4">
                {/* utilities */}
                <div className="mb-2 flex justify-between text-gray-700">
                    <div className="flex space-x-4">
                        <Heart className="h-6 w-6" />
                        <MessageCircle className="h-6 w-6" />
                        <Send className="h-6 w-6" />
                    </div>
                    <Bookmark className="h-6 w-6" />
                </div>

                {/* likes */}
                <p className="mb-1 font-medium text-gray-700">{post.likes} likes</p>

                {/* comments */}
                <div>
                    {post.comment_groups.length > 0 ? (
                        showComments ? (
                            <div className="mt-4 space-y-6">
                                {post.comment_groups.map((group) => (
                                    <CommentGroup key={group.id} group={group} replyHook={replyHook}/>
                                ))}
                            </div>
                        ) : (
                            <span className="text-sm text-gray-500 hover:cursor-pointer" onClick={() => setShowComments(true)}>
                                View all {post.comments} comments
                            </span>
                        )
                    ) : (
                        <span className="text-sm text-gray-500">No comments yet.</span>
                    )}
                </div>

                {/* MessageBox */}
                <div className="mt-6 pb-2">
                    <CommentBox replyHook={replyHook}/>
                </div>
            </div>
        </div>
    );
};

const Header = ({ post }) => {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
                <Link to={`profile/${post.user.username}`}>
                    <img src={post.user.avatar || '/placeholder.svg'} alt={post.user.username} className="mr-3 h-10 w-10 rounded-full" />
                </Link>
                <div className="flex flex-col justify-center">
                    <Link to={`profile/${post.user.username}`}>
                        <span className="text-base font-semibold text-gray-800">{post.user.username}</span>
                    </Link>
                    <Link to={`post/${post.id}`}>
                        <span className="text-sm text-gray-500">{post.date}</span>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <IconButton variant="icon">
                    <SlOptions className="h-5 w-5 text-blue-900" />
                </IconButton>
            </div>
        </div>
    );
};

export default Post;

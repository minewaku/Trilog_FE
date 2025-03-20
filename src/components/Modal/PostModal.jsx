import React, { useState, useContext, useMemo } from 'react';
import { X, Smile } from 'lucide-react';
import { useRatio } from '~/hooks';
import { Carousel } from '../Carousel';
import { IMAGE_1 } from '~/assets';
import { GoHeart } from 'react-icons/go';
import { MessageBox } from '~/components/Input';
import EmojiPicker from 'emoji-picker-react';

import { Link } from 'react-router-dom';

const PostModal = ({ post, onClose }) => {
    const [ref, size] = useRatio({ hr: 1875 / 2048, wr: 3125 / 4096 });
    const [showPicker, setShowPicker] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleEmojiClick = (emojiObject) => {
        setInputValue((prev) => prev + emojiObject.emoji);
    };

    console.log('size here: ', size);

    return (
        <div ref={ref} className="flex h-[91.55%] w-[76.29%] overflow-hidden rounded-lg bg-white">
            <div className="flex h-full w-3/5 items-center justify-center overflow-hidden bg-black">
                <Carousel>
                    {post.images.map((image, index) => (
                        <img key={index} src={image} alt={post.username} className="object-contain" />
                    ))}
                </Carousel>
            </div>
            <div className="flex h-full w-2/5 flex-col">
                <div className="flex items-center justify-between border-b px-4 py-3">
                    <div className="flex items-center">
                        <Link to={`profile/${post.username}`} className="w-fit">
                            <img src={IMAGE_1 || '/placeholder.svg'} alt={post.username} className="mr-3 h-10 w-10 rounded-full" />
                        </Link>

                        <div className="flex flex-col justify-center">
                            <Link to={`profile/${post.username}`}>
                                <span className="text-base font-semibold text-gray-800">{post.username}</span>
                            </Link>

                            <Link to={`post/${post.id}`}>
                                <span className="text-sm text-gray-500">{post.date}</span>
                            </Link>
                        </div>
                    </div>
                    <button onClick={onClose} className="rounded-full bg-white/80 p-1 text-gray-800 opacity-60 hover:bg-gray-100">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    <p className="mb-4">
                        <span className="font-semibold"></span> {post.description}
                    </p>

                    <div className="space-y-6">
                        {post.comments.map((comment, index) => (
                            <div key={index} className="flex space-x-2 text-sm">
                                <div className="flex h-9 w-9 flex-col space-y-2">
                                    <Link className="h-9 w-9" to={`profile/${post.username}`}>
                                        <img src={IMAGE_1 || '/placeholder.svg'} alt={post.username} className="mr-3 h-9 w-9 rounded-full" />
                                    </Link>

                                    <div className="flex items-center justify-center text-gray-500">
                                        <button>
                                            <GoHeart size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col">
                                    <Link to={`profile/${comment.username}`} className="h-fit w-fit">
                                        <span className="align-middle text-base font-semibold text-gray-800">{comment.username}</span>
                                    </Link>

                                    <div className="mb-2">
                                        <span className="text-sm">{comment.text}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-sm text-gray-500">{post.date}</span>
                                            {comment.likes > 0 && (
                                                <button className="text-sm text-gray-500 hover:text-gray-800">
                                                    {comment.likes} {comment.likes > 1 ? 'Likes' : 'Like'}
                                                </button>
                                            )}
                                            <button className="text-sm text-gray-500 hover:text-gray-800">MessageBox</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t p-4">
                    <div className="mb-4">
                        <p className="font-semibold">{post.likes} likes</p>
                    </div>
                    <div className="flex space-x-2 text-sm">
                        <div className="flex h-9 w-9 flex-col space-y-2">
                            <Link className="h-9 w-9" to={`profile/${post.username}`}>
                                <img src={IMAGE_1 || '/placeholder.svg'} alt={post.username} className="mr-3 h-9 w-9 rounded-full" />
                            </Link>
                        </div>

                        <MessageBox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostModal;

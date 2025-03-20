import React, { useState, useEffect, useRef } from 'react';
import { Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IconButton } from '~/components/Button';
import EmojiPicker from 'emoji-picker-react';

const MessageBox = ({ replyHook }) => {
    const [showPicker, setShowPicker] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const pickerRef = useRef(null);

    // Effect to handle outside clicks for closing the emoji picker
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setShowPicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Effect to prefill the textarea with @username when replyHook changes
    useEffect(() => {
        if (replyHook?.reply && replyHook?.reply.username) {
            const usernameTag = `@${replyHook.reply.username} `;
            // Only set the username if it's not already in the inputValue
            if (!inputValue.startsWith(usernameTag)) {
                setInputValue(usernameTag);
            }
        } else {
            // Clear inputValue if there's no replyHook.reply
            if (inputValue.startsWith('@')) {
                setInputValue('');
            }
        }
    }, [replyHook]);

    const handleEmojiClick = (emojiObject) => {
        setInputValue((prev) => prev + emojiObject.emoji);
    };

    const handlePost = () => {
        if (!inputValue.trim()) return;
        // Here you might want to send the message to a backend or parent component
        console.log('Posting:', inputValue);
        setInputValue(''); // Clear the textarea after posting
    };

    console.log('replyHook from MessageBox: ', replyHook?.reply?.username);

    return (
        <div className="relative flex flex-1 flex-col">
            <div className="flex w-full flex-col">
                <div className="flex">
                    {/* Remove the inline username display since it's now in the textarea */}
                    <textarea
                        placeholder="Add a comment..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="p-x-2 max-h-[200px] w-full resize-none overflow-y-auto break-words border-b border-gray-300 pb-2 focus:outline-none focus:ring-0"
                        rows={1}
                        onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
                        }}
                    />
                    <div className="relative ms-3">
                        <button type="button" onClick={() => setShowPicker((prev) => !prev)} className="rounded-full p-1 hover:bg-gray-200">
                            <Smile size={24} className="text-gray-500" />
                        </button>

                        {showPicker && (
                            <div ref={pickerRef} className="absolute bottom-full left-0 mb-2 rounded-lg border bg-white shadow-md">
                                <EmojiPicker className="z-50" onEmojiClick={handleEmojiClick} searchDisabled={true} />
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-2 flex justify-between pe-2">
                    <button
                        type="button"
                        onClick={handlePost}
                        className={`font-semibold text-blue-500 ${!inputValue.trim() ? 'cursor-not-allowed opacity-50' : 'hover:text-blue-600'}`}
                        disabled={!inputValue.trim()}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageBox;

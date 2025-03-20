import { MessageBox } from '~/components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IMAGE_1 } from '~/assets';

const CommentBox = ({ replyHook }) => {
    console.log('replyHook from CommentBox: ', replyHook);

    return (
        <div className="flex space-x-2 text-sm">
            <div className="flex h-9 w-9 flex-col space-y-2">
                <Link to={`profile/`} className="h-9 w-9">
                    <img src={IMAGE_1 || '/placeholder.svg'} className="mr-3 h-9 w-9 rounded-full object-cover" />
                </Link>
            </div>
            <MessageBox replyHook={replyHook} />
        </div>
    );
};

export default CommentBox;

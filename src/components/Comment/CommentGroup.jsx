import { Comment, CommentBox } from '~/components/Comment';
import { useState } from 'react';
import { useReply } from '~/hooks';
import { MessageBox } from '~/components/Input';
import { Link } from 'react-router-dom';
import { IMAGE_1 } from '~/assets';

const CommentGroup = ({ group, replyHook, handleReply }) => {
    const [showComments, setShowComments] = useState(false);
    const replyHookGroup = useReply();
    console.log('replyHook from CommentGroup: ', replyHook);

    const handleReplyGroup = (destinationUser) => {
        replyHookGroup.setReply(destinationUser);
    }

    return (
        <div className="flex flex-col space-y-6 pb-2">
            <div className="">
                <Comment key={group.comment.id} comment={group.comment} replyHook={replyHook} />

                {group.comments.length > 0 &&
                    (!showComments ? (
                        <div className="ms-11 mt-2 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-800" onClick={() => setShowComments(true)}>
                            <span>View all {group.comments.length} comments</span>
                        </div>
                    ) : null)}
            </div>

            {group.comments.length > 0 ? (
                showComments ? (
                    <div className="ms-8 flex flex-col space-y-6">
                        {group.comments.map((comment) => (
                            <Comment user={comment.user} key={comment.id} comment={comment} replyHook={replyHookGroup} handleReply={handleReplyGroup}/>
                        ))}

                        <CommentBox replyHook={replyHookGroup} handleReply={handleReplyGroup}/>
                    </div>
                ) : (
                    ''
                )
            ) : (
                ''
            )}
        </div>
    );
};

export default CommentGroup;

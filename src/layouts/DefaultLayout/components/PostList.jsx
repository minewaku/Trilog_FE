import React, { useState } from 'react';
import Post from '../../../components/Post/Post';
import { IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5, IMAGE_6, IMAGE_7 } from '~/assets';

const PostList = () => {
    // Mock data for posts
    const posts = [
        {
            id: 1,
            user: {
                id: 1,
                username: 'minewaku',
                avatar: IMAGE_1,
            },
            images: [IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5, IMAGE_6, IMAGE_7],
            date: '1 hour ago',
            likes: 100,
            comments: 100,
            tags: ['journey', 'happynewyear', 'nevergiveup', 'imgay', 'hey!itsmigu'],
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin dui et rhoncus cursus. Curabitur suscipit erat magna, at auctor massa ornare nec. Maecenas ut congue ligula. Nullam elementum risus ullamcorper, pretium sem vel, dictum massa. Integer imperdiet urna nisi, a pharetra risus congue id. Sed et ornare dui. Aliquam ut maximus eros. Maecenas mollis, orci a dignissim blandit, nunc est pulvinar ex, a rutrum ligula mi in magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque urna dolor, vulputate id accumsan eget, elementum mattis est. Ut convallis turpis ante. Cras nec elit et neque luctus vehicula. Pellentesque molestie augue at placerat accumsan. Quisque facilisis leo nec mauris ultricies convallis. Aliquam erat volutpat. Aliquam erat volutpat. Cras porta quis mi id blandit. Integer sit amet vulputate mauris. Aliquam eleifend molestie orci eget feugiat. Maecenas euismod, felis vitae vehicula rhoncus, leo urna lacinia leo, et mattis arcu nunc vitae metus. Aenean fringilla felis purus, sed faucibus lectus sagittis eu. Etiam sit amet dignissim arcu. Suspendisse sit amet diam vitae urna volutpat imperdiet sit amet nec tellus. Aliquam quis erat id ipsum semper pretium ut id nisl. Aenean faucibus eleifend faucibus. Sed venenatis est felis, quis venenatis lacus tempus ut.',
            comment_groups: [
                {
                    id: 1,
                    postId: 1,
                    commentId: 1,
                    comment: {
                        id: 1,
                        groupId: 1,
                        userId: 1,
                        user: {
                            id: 1,
                            username: 'minewaku',
                            avatar: IMAGE_2,
                        },
                        reply: null,
                        content:
                            'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                        likes: 14,
                        date: '2022-01-01',
                    },
                    replys: 5,
                    comments: [
                        {
                            id: 2,
                            groupId: 1,
                            userId: 2,
                            user: {
                                id: 2,
                                username: 'nadeshiko',
                                avatar: IMAGE_3,
                            },
                            replyId: 1,
                            reply: {
                                id: 1,
                                username: 'minewaku',
                                avatar: IMAGE_2,
                            },
                            content:
                                'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                            likes: 14,
                            date: '2022-01-01',
                        },
                        {
                            id: 3,
                            groupId: 1,
                            userId: 3,
                            user: {
                                id: 3,
                                username: 'hanako',
                                avatar: IMAGE_4,
                            },
                            replyId: 2,
                            reply: {
                                id: 2,
                                username: 'nadeshiko',
                                avatar: IMAGE_3,
                            },
                            content:
                                'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                            likes: 1100,
                            date: '2022-01-01',
                        },
                        {
                            id: 4,
                            groupId: 1,
                            userId: 4,
                            user: {
                                id: 4,
                                username: 'hakuba',
                                avatar: IMAGE_5,
                            },
                            reply: {
                                id: 3,
                                username: 'hanako',
                                avatar: IMAGE_4,
                            },
                            content:
                                'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                            likes: 14,
                            date: '2022-01-01',
                        },
                    ],
                },
                {
                    id: 2,
                    postId: 1,
                    commentId: 2,
                    comment: {
                        id: 2,
                        groupId: 2,
                        userId: 2,
                        user: {
                            id: 1,
                            username: 'nadeshiko',
                            avatar: IMAGE_3,
                        },
                        reply: null,
                        content:
                            '@minewaku This is the first comment! Replying @minewaku to the first comment. @minewaku Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                        likes: 14,
                        date: '2022-01-01',
                    },
                    replys: 5,
                    comments: [
                        {
                            id: 2,
                            groupId: 1,
                            userId: 2,
                            user: {
                                id: 2,
                                username: 'nadeshiko',
                                avatar: IMAGE_3,
                            },
                            replyId: 1,
                            reply: {
                                id: 1,
                                username: 'minewaku',
                                avatar: IMAGE_2,
                            },
                            content:
                                'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                            likes: 14,
                            date: '2022-01-01',
                        },
                        {
                            id: 3,
                            groupId: 1,
                            userId: 3,
                            user: {
                                id: 3,
                                username: 'hanako',
                                avatar: IMAGE_4,
                            },
                            replyId: 2,
                            reply: {
                                id: 2,
                                username: 'nadeshiko',
                                avatar: IMAGE_3,
                            },
                            content:
                                'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                            likes: 1100,
                            date: '2022-01-01',
                        },
                        {
                            id: 4,
                            groupId: 1,
                            userId: 4,
                            user: {
                                id: 4,
                                username: 'hakuba',
                                avatar: IMAGE_5,
                            },
                            reply: {
                                id: 3,
                                username: 'hanako',
                                avatar: IMAGE_4,
                            },
                            content:
                                'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                            likes: 14,
                            date: '2022-01-01',
                        },
                    ],
                },
            ],
        },
        // {
        //     id: 2,
        //     username: 'user2',
        //     userAvatar: '/placeholder.svg?height=32&width=32',
        //     // images: ['/placeholder.svg?height=400&width=400'],
        //     images: [IMAGE_3],
        //     date: '2 hours ago',
        //     likes: 50,
        //     replys: 100,
        //     description: 'Another sample post',
        //     comment_groups: [
        //         {
        //             id: 1,
        //             postId: 1,
        //             userId: 1,
        //             commentId: 1,
        //             username: 'user1',
        //             replies: 2,
        //             comments: [
        //                 { id: 1, groupId: 1, userId: 1, replyToCommentId: null, content: 'First comment!' },
        //                 { id: 2, groupId: 1, userId: 2, replyToCommentId: 1, content: 'Nice!' },
        //             ],
        //         },
        //         {
        //             id: 2,
        //             postId: 1,
        //             userId: 3,
        //             commentId: 1,
        //             username: 'user3',
        //             replies: 1,
        //             comments: [
        //                 { id: 3, groupId: 2, userId: 3, replyToCommentId: null, content: 'Another perspective' },
        //                 { id: 4, groupId: 2, userId: 4, replyToCommentId: 3, content: 'Agree!' },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     id: 3,
        //     username: 'user2',
        //     userAvatar: '/placeholder.svg?height=32&width=32',
        //     // images: ['/placeholder.svg?height=400&width=400'],
        //     images: [IMAGE_4],
        //     date: '3 months ago',
        //     likes: 50,
        //     replys: 100,
        //     description: 'Another sample post',
        //     comment_groups: [
        //         {
        //             id: 1,
        //             postId: 1,
        //             userId: 1,
        //             commentId: 1,
        //             username: 'user1',
        //             replies: 2,
        //             comments: [
        //                 { id: 1, groupId: 1, userId: 1, replyToCommentId: null, content: 'First comment!' },
        //                 { id: 2, groupId: 1, userId: 2, replyToCommentId: 1, content: 'Nice!' },
        //             ],
        //         },
        //         {
        //             id: 2,
        //             postId: 1,
        //             userId: 3,
        //             commentId: 1,
        //             username: 'user3',
        //             replies: 1,
        //             comments: [
        //                 { id: 3, groupId: 2, userId: 3, replyToCommentId: null, content: 'Another perspective' },
        //                 { id: 4, groupId: 2, userId: 4, replyToCommentId: 3, content: 'Agree!' },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     id: 4,
        //     username: 'user2',
        //     userAvatar: '/placeholder.svg?height=32&width=32',
        //     // images: ['/placeholder.svg?height=400&width=400'],
        //     images: [IMAGE_5],
        //     date: '1 day ago',
        //     likes: 50,
        //     replys: 100,
        //     description: 'Another sample post',
        //     comment_groups: [
        //         {
        //             id: 1,
        //             postId: 1,
        //             userId: 1,
        //             commentId: 1,
        //             username: 'user1',
        //             replies: 2,
        //             comments: [
        //                 { id: 1, groupId: 1, userId: 1, replyToCommentId: null, content: 'First comment!' },
        //                 { id: 2, groupId: 1, userId: 2, replyToCommentId: 1, content: 'Nice!' },
        //             ],
        //         },
        //         {
        //             id: 2,
        //             postId: 1,
        //             userId: 3,
        //             commentId: 1,
        //             username: 'user3',
        //             replies: 1,
        //             comments: [
        //                 { id: 3, groupId: 2, userId: 3, replyToCommentId: null, content: 'Another perspective' },
        //                 { id: 4, groupId: 2, userId: 4, replyToCommentId: 3, content: 'Agree!' },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     id: 5,
        //     username: 'user2',
        //     userAvatar: '/placeholder.svg?height=32&width=32',
        //     // images: ['/placeholder.svg?height=400&width=400'],
        //     images: [IMAGE_6],
        //     date: '1 week ago',
        //     likes: 50,
        //     replys: 100,
        //     description: 'Another sample post',
        //     comment_groups: [
        //         {
        //             id: 1,
        //             postId: 1,
        //             userId: 1,
        //             username: 'user1',
        //             replies: 2,
        //             comments: [
        //                 { id: 1, groupId: 1, userId: 1, replyToCommentId: null, content: 'First comment!' },
        //                 { id: 2, groupId: 1, userId: 2, replyToCommentId: 1, content: 'Nice!' },
        //             ],
        //         },
        //         {
        //             id: 2,
        //             postId: 1,
        //             userId: 3,
        //             username: 'user3',
        //             replies: 1,
        //             comments: [
        //                 { id: 3, groupId: 2, userId: 3, replyToCommentId: null, content: 'Another perspective' },
        //                 { id: 4, groupId: 2, userId: 4, replyToCommentId: 3, content: 'Agree!' },
        //             ],
        //         },
        //     ],
        // },
        // {
        //     id: 6,
        //     username: 'user2',
        //     userAvatar: '/placeholder.svg?height=32&width=32',
        //     // images: ['/placeholder.svg?height=400&width=400'],
        //     images: [IMAGE_7],
        //     date: '1 month ago',
        //     likes: 50,
        //     replys: 100,
        //     description: 'Another sample post',
        //     comment_groups: [
        //         {
        //             id: 1,
        //             postId: 1,
        //             userId: 1,
        //             username: 'user1',
        //             replies: 2,
        //             comments: [
        //                 { id: 1, groupId: 1, userId: 1, replyToCommentId: null, content: 'First comment!' },
        //                 { id: 2, groupId: 1, userId: 2, replyToCommentId: 1, content: 'Nice!' },
        //             ],
        //         },
        //         {
        //             id: 2,
        //             postId: 1,
        //             userId: 3,
        //             username: 'user3',
        //             replies: 1,
        //             comments: [
        //                 { id: 3, groupId: 2, userId: 3, replyToCommentId: null, content: 'Another perspective' },
        //                 { id: 4, groupId: 2, userId: 4, replyToCommentId: 3, content: 'Agree!' },
        //             ],
        //         },
        //     ],
        // },
    ];

    return (
        <div className="flex flex-1 flex-col items-center space-y-8 p-4">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;

/**
I created this comments structure to prevent it loads a whole comment sections at once. It based on the comment group and only called for loads when you demand it.
When you fecth a post, the post return a a few comment groups of it first, then the system will load the top comments of each group, If you want to see more, you can ask it to fetch more instead of featching all of them in the start
{
    comment: [
        {
            id: 1, // the id of the comment group
            postId: 1, this is the id of post this comment group belongs to
            commentId: 1, // the id of the comment owner of this group
            replys: 5 // the number of replys in this group
            comments: [
                {           
                    id: 1, // the id of the comment
                    groupId: 1, //the group id of this comment
                    userId: 1,// the id of the user who posted the comment
                    user: 
                        {
                            id: 1, // the id of the user
                            username: 'minewaku', // the username of the user
                        }
                    replyId: null, // the id of the comment this comment is replying to.a.k.a as the owner of the comment_group
                    content: 'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                    likes: 14, // number of likes 
                    date: '2022-01-01', // the date the comment was posted
                }
                {           
                    id: 1, // the id of the comment
                    groupId: 1, //the group id of this comment
                    userId: 1,// the id of the user who posted the comment
                    user: 
                        {
                            id: 2, // the id of the user
                            username: 'nadeshiko', // the username of the user
                        }
                    replyId: 1, // the id of the comment this comment is replying to.a.k.a as the owner of the comment_group
                    content: 'This is the first comment! Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment. Replying to the first comment.',
                    likes: 14, // number of likes 
                    date: '2022-01-01', // the date the comment was posted
                }
            ]
        }
    ]
}

**/

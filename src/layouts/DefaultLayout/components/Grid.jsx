import React from 'react';

const Grid = () => {
    // Sample data - in real app, this would come from your backend
    const posts = [
        { id: 1, image: '/api/placeholder/300/300', date: '2025-02-01' },
        { id: 2, image: '/api/placeholder/300/300', date: '2025-02-02' },
        { id: 3, image: '/api/placeholder/300/300', date: '2025-01-28' },
        { id: 4, image: '/api/placeholder/300/300', date: '2025-01-15' },
        // Add more posts...
    ];

    // Group posts by month
    const groupedPosts = posts.reduce((groups, post) => {
        const date = new Date(post.date);
        const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

        if (!groups[monthYear]) {
            groups[monthYear] = [];
        }
        groups[monthYear].push(post);
        return groups;
    }, {});

    return (
        <div className="pl-72 pt-20">
            {Object.entries(groupedPosts).map(([monthYear, monthPosts]) => (
                <div key={monthYear} className="mb-12">
                    <div className="mb-4 text-lg font-semibold text-gray-700">{monthYear}</div>
                    <div className="grid grid-cols-3 gap-4">
                        {monthPosts.map((post) => (
                            <div key={post.id} className="group relative aspect-square cursor-pointer overflow-hidden">
                                <img src={post.image} alt={`Post ${post.id}`} className="h-full w-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-200 group-hover:bg-opacity-30">
                                    <div className="text-white opacity-0 group-hover:opacity-100">View Post</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Grid;

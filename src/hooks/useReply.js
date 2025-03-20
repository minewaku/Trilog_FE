import { useState } from 'react';

const useReply = () => {
    const [reply, setReply] = useState('');

    const clearReply = () => {
        setReply('');
    };

    return {
        reply, // The current reply state
        setReply, // Function to set the reply
        clearReply, // Function to clear the reply
    };
};

export default useReply;

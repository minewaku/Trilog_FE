import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Compass, Film, MessageCircle } from 'lucide-react';
import { useRatio } from '~/hooks';

const Social = () => {
    const [ref, size] = useRatio({ hr: 1, wr: 40 / 129 });

    return (
        <div ref={ref} className="sticky right-0 top-0 flex h-full flex-col items-start gap-4 py-4 w-[38.46%]">
            <SidebarSection></SidebarSection>
            <SidebarSection></SidebarSection>
        </div>
    );
};

const SidebarItem = ({ path, children }) => {
    return (
        <Link to={`${path}`} className="flex items-center rounded-md p-3 text-gray-700 hover:bg-gray-200 hover:text-black">
            {children}
        </Link>
    );
};

const SidebarSection = () => {
    const [ref, size] = useRatio({ hr: 1, wr: 2225/8256 });

    return (
        <nav ref={ref} className="flex flex-none flex-col rounded-lg bg-white" style={{ width: `${size.width}px` }}>
            <SidebarItem path="#">
                <Home size={26} className="me-4" />
                <span className="font-medium">Home</span>
            </SidebarItem>

            <SidebarItem path="#">
                <Search size={26} className="me-4" />
                <span className="font-medium">Search</span>
            </SidebarItem>
        </nav>
    );
};

export default Social;

import { Home, Search, Compass, Film, MessageCircle } from 'lucide-react';
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export const NAVIGATIONS = [
    {
        id: 1,
        key: 'home',
        icon: Home,
        path: '/',
        label: 'Home',
    },
    {
        id: 2,
        key: 'search',
        icon: Search,
        path: '/search',
        label: 'Search',
    },
    {
        id: 3,
        key: 'explore',
        icon: Compass,
        path: '/explore',
        label: 'Explore',
    },
    {
        id: 4,
        key: 'reels',
        icon: Film,
        path: '/reels',
        label: 'Reels',
    },
    {
        id: 5,
        key: 'messages',
        icon: FaRegEnvelope,
        label: 'Messages',
    },
    {
        id: 6,
        key: 'notifications',
        icon: FaRegHeart,
        label: 'Notifications',
    },
    {
        id: 7,
        key: 'profile',
        icon: FaRegUser,
        label: 'Profile',
    },
];

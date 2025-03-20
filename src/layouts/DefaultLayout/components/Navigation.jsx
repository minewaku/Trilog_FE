import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATIONS } from '~/stores/constants';

{
    /* 25 / 129 */
}
const Navigation = () => {
    const location = useLocation();

    return (
        <aside
            className="sticky top-0 w-[19.38%] border-r border-gray-300 bg-white px-3 py-4" // 25/129
        >
            <div className="mb-6 mt-4 flex items-center">
                <h1 className="ms-4 text-2xl font-bold text-skin-secondary">Trilog</h1>
            </div>

            <nav>
                <div className="flex flex-col gap-y-3">
                    {NAVIGATIONS.map(({ id, path = '#', icon: Icon, label }) => (
                        <NavigationItem key={id} path={path} isActive={location.pathname.startsWith(path)}>
                            <Icon size={25} className="me-4" />
                            <span>{label}</span>
                        </NavigationItem>
                    ))}
                </div>
            </nav>
        </aside>
    );
};

const NavigationItem = ({ path, isActive, children }) => {
    return (
        <Link to={path} className={`flex items-center rounded-md p-3 hover:bg-gray-100 ${isActive ? 'font-semibold text-black' : 'font-medium text-gray-600'}`}>
            {children}
        </Link>
    );
};

export default Navigation;

import { Navigation } from './components';

const DefaultLayout = ({ children }) => {
    return (
        <div className="flex h-screen w-screen flex-col overflow-hidden">
            <div className="flex flex-1 flex-row overflow-hidden">
                <Navigation className="z-0" />
                {/* 104 / 129 */}
                <main className="relative z-10 flex h-full w-[80.62%] flex-1 overflow-y-scroll bg-gray-100">{children}</main>
            </div>
        </div>
    );
};

export default DefaultLayout;

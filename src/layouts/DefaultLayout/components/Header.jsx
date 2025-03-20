import React, { Fragment } from 'react';
import { Search, PlusSquare, Heart, User } from 'lucide-react';
import { IconButton } from '~/components/Button';
import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { FaBell } from "react-icons/fa";
import { Transition } from '@headlessui/react';
import { IMAGE_1 } from '~/assets';
import classNames from 'classnames';

const Header = () => {
    return (
        <header className="sticky top-0 z-10 border-b border-gray-300 bg-white">
            <div className="flex w-full items-center justify-between px-8 py-2">
                <h1 className="text-2xl font-bold text-skin-secondary">Trilog</h1>
                <div className="flex items-center space-x-4">
                    <IconButton variant="icon" color="secondary">
                        <Search className="h-5 w-5 text-gray-600" />
                    </IconButton>

                    <IconButton variant="icon" color="secondary">
                        <FaBell  className="h-5 w-5 text-gray-600" />
                    </IconButton>

                    <Menu as="div" className="">
                        <MenuButton className="flex rounded-full">
                            {({ active }) => (
                                <div className="">
                                    <span className="sr-only">Open user menu</span>
                                    <div
                                        className={classNames(active && 'shadow-inner-focus', 'h-10 w-10 rounded-full bg-skin-secondary bg-cover bg-center bg-no-repeat')}
                                        style={{
                                            backgroundImage: `url(${IMAGE_1})`,
                                        }}
                                    >
                                        <span className="sr-only">Minewaku</span>
                                    </div>
                                </div>
                            )}
                        </MenuButton>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <div className=""></div>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;

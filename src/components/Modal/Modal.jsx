import React from 'react';
import { useModal } from '~/hooks';

const Modal = () => {
    const { modal } = useModal();

    if (!modal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-skin-modal">
            <div className="h-full w-full flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
                {modal && modal}
            </div>
        </div>
    );
};

export default Modal;

import React from 'react';
import '../../styles/modal.scss';

const Modal = ({onModalClose, children}) => {
    return (
        <div className="modal">
            <div className="modal__container">
                <button className="modal__close-btn" onClick={onModalClose}/>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

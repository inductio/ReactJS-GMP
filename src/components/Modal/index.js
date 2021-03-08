import React from 'react';
import '../../styles/modal.scss';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalActive: props.show
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(isModalActive) {
        this.setState({isModalActive});

        if (typeof this.props.onModalClose === 'function') {
            this.props.onModalClose();
        }
    }

    render() {
        return this.state.isModalActive ? (
            <div className="modal">
                <div className="modal__container">
                    <button className="modal__close-btn" onClick={this.toggleModal.bind(this, false)}/>
                    <div className="modal__content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        ) : null
    }
}

export default Modal;

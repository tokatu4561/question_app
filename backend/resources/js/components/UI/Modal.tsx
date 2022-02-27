import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-screen z-20 opacity-50 bg-black"
            onClick={props.onClose}
        />
    );
};

const ModalOverlay = (props) => {
    return (
        <div className="modal cursor-pointer">
            <div className="">{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("modal-overlays");

export const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

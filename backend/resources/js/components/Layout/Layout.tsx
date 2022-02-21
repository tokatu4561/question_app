import { useState } from "react";

import { SideBar } from "./SideBar";
import { Navigation } from "./Navigation";
import { Modal } from "../UI/Modal";
import { NewThemeForm } from "../Themes/NewThemeForm";

export const Layout = (props) => {
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const showSideMenu = () => {
        setSideMenuIsOpen(true);
    };

    const closeSideMenu = () => {
        setSideMenuIsOpen(false);
    };

    const showModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <Navigation onClickShow={showSideMenu} />
            <SideBar
                show={sideMenuIsOpen}
                onCloseMenu={closeSideMenu}
                onShowModal={showModal}
            />
            {modalIsOpen && (
                <Modal onClose={closeModal}>
                    <NewThemeForm />
                </Modal>
            )}
            <main className="my-12 mx-auto w-11/12 max-w-2xl">
                {props.children}
            </main>
        </>
    );
};

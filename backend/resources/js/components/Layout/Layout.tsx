import { useState } from "react";

import { SideBar } from "./SideBar";
import { Navigation } from "./Navigation";
import { Modal } from "../UI/Modal";
import { NewThemeForm } from "../Themes/NewThemeForm";
import { EditThemeForm } from "../Themes/EditThemeForm";

export const Layout = (props) => {
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
    const [newThemeModalIsOpen, setNewThemeModalIsOpen] = useState(false);
    const [editThemeModalIsOpen, setEditThemeModalIsOpen] = useState(false);

    const showSideMenu = () => {
        setSideMenuIsOpen(true);
    };

    const closeSideMenu = () => {
        setSideMenuIsOpen(false);
    };

    const showNewThemeModal = () => {
        setNewThemeModalIsOpen(true);
    };

    const closeNewThemeModal = () => {
        setNewThemeModalIsOpen(false);
    };

    const showEditThemeModal = () => {
        setEditThemeModalIsOpen(true);
    };

    const closeEditThemeModal = () => {
        setEditThemeModalIsOpen(false);
    };

    return (
        <>
            <Navigation onClickShow={showSideMenu} />
            <SideBar
                show={sideMenuIsOpen}
                onCloseMenu={closeSideMenu}
                onShowNewThemeModal={showNewThemeModal}
                onShowEditThemeModal={showEditThemeModal}
            />
            {newThemeModalIsOpen && (
                <Modal onClose={closeNewThemeModal}>
                    <NewThemeForm onClose={closeNewThemeModal} />
                </Modal>
            )}
            {editThemeModalIsOpen && (
                <Modal onClose={closeEditThemeModal}>
                    <EditThemeForm />
                </Modal>
            )}
            <main className="my-12 mx-auto w-11/12 max-w-2xl">
                {props.children}
            </main>
        </>
    );
};

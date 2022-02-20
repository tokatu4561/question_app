import { useState } from "react";

import { SideBar } from "./SideBar";
import { Navigation } from "./Navigation";

export const Layout = (props) => {
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

    const showSideMenu = () => {
        setSideMenuIsOpen(true);
    };

    const closeSideMenu = () => {
        setSideMenuIsOpen(false);
    };

    return (
        <>
            <Navigation onClickShow={showSideMenu} />
            <SideBar show={sideMenuIsOpen} onClose={closeSideMenu} />
            <main className="my-12 mx-auto w-11/12 max-w-2xl">
                {props.children}
            </main>
        </>
    );
};

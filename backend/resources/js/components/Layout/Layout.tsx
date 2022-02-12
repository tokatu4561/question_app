import { Navigation } from "./Navigation";

export const Layout = (props) => {
    return (
        <>
            <Navigation />
            <main className="my-12 mx-auto w-11/12 max-w-2xl">
                {props.children}
            </main>
        </>
    );
};

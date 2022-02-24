export const Card = (props) => {
    const cssClasses = `p-4 m-4 shadow-lg rounded-lg bg-white ${props.style}`;
    return <div className={cssClasses}>{props.children}</div>;
};

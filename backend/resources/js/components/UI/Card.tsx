export const Card = (props) => {
    return (
        <div className="p-4 m-4 shadow-lg rounded-lg bg-white">
            {props.children}
        </div>
    );
};

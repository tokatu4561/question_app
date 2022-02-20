export const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="animate-ping h-2 w-2 bg-stone-600 rounded-full"></div>
            <div className="animate-ping h-2 w-2 bg-stone-600 rounded-full mx-4"></div>
            <div className="animate-ping h-2 w-2 bg-stone-600 rounded-full"></div>
        </div>
    );
};

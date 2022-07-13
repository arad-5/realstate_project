const   PrimaryButton = ({ className, onClick , children , color = 'blue' }) => {
    return (
        <button className={`px-8 py-3 bg-blue-500 rounded-xl focus:shadow-none hover:shadow-md transition-shadow focus:ring-4 ring-blue-500/50 font-bold  tracking-wide text-white ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default PrimaryButton;

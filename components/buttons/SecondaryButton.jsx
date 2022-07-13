const SecondaryButton = ({ className, onClick, children }) => {
    return (
        <button
            className={`rounded-xl border px-8 py-3 font-bold tracking-wide ring-zinc-200/50 transition-shadow duration-75 hover:shadow focus:shadow-none focus:ring-4 dark:border-zinc-600 dark:ring-zinc-600/50 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;

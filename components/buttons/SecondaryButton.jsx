const SecondaryButton = ({ className, onClick, children }) => {
    return (
        <button
            className={`rounded-xl border px-8 py-3 font-bold tracking-wide ring-zinc-200/50 dark:hover:bg-neutral-800 hover:bg-zinc-50 focus:ring-4 dark:border-zinc-700 dark:ring-zinc-600/50 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;

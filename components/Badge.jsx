const Badge = ({ children, className }) => {
    return (
        <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-gray-600
        dark:border-[#404040] dark:text-gray-300 ${className}`}
        >
            {children}
        </span>
    )
}

export default Badge

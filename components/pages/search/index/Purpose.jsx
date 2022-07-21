const Purpose = ({ filters, setFilters }) => {
    const { purpose } = filters;

    return (
        <div className='flex items-center p-4 row-span-1 justify-between  rounded-xl border border-dashed text-xl transition-shadow hover:shadow dark:border-[#404040]'>
            <span className='mr-5'>purpose</span>
            <div className='h-[1px] w-full mx-2 bg-gradient-to-r from-transparent dark:via-zinc-800 via-zinc-200 to-transparent'></div>

        </div>
    );
};

export default Purpose;

const Furnished = ({ filters, setFilters }) => {
    return (
        <div className='flex items-center rounded-xl border border-dashed p-4 text-xl transition-shadow hover:shadow dark:border-[#404040]'>
            <span className='mr-5'>furnishing</span>
            <form className='w-full cursor-pointer'>
                <select className='flex w-full items-center justify-center rounded-xl border bg-transparent py-2 text-center text-base text-zinc-500 transition-all hover:bg-zinc-100 hover:shadow dark:border-zinc-500 dark:text-zinc-500 dark:hover:bg-zinc-800'>
                    <option value='false'>all</option>
                    <option value='furnished'>furnished</option>
                    <option value='unfurnished'>unfurnished</option>
                </select>
            </form>
        </div>
    );
};

export default Furnished;

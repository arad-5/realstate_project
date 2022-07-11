const Sort = () => {
    return (
        <div className='flex items-center justify-between rounded-xl border border-dashed p-4 text-xl transition-shadow hover:shadow dark:border-[#404040]'>
            <div className='mr-5'>sort</div>
            <form className='w-full cursor-pointer'>
                <select className='flex w-full items-center justify-center rounded-xl border bg-transparent py-2 text-center text-base text-zinc-500 transition-all hover:bg-zinc-100 hover:shadow dark:border-zinc-500 dark:text-zinc-500 dark:hover:bg-zinc-800'>
                    <option value='price-desc'>price descending</option>
                    <option value='price-asc'>price ascending</option>
                    <option value='city-level-score'>city level score</option>
                    <option value='date-desc'>date descending</option>
                    <option value='date-asc' selected>
                        date ascending
                    </option>
                    <option value='verified-score'>verified score</option>
                </select>
            </form>
        </div>
    );
};

export default Sort;

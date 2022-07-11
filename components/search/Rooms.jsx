const Rooms = ({ setFilters, filters }) => {
    return (
        <div className='flex items-center  justify-between rounded-xl border border-dashed p-4 text-xl transition-shadow hover:shadow dark:border-[#404040]'>
            <span className="mr-2">rooms</span>
            <form
                className='relative items-center w-full flex sm:space-y-0'
                onChange={(e) =>
                    setFilters((curr) => ({
                        ...curr,
                        // purpose: e.target.value,
                    }))
                }
            >
                <div className='relative mr-1 h-full'>
                    <input
                        placeholder='minimum'
                        type='number'
                        min={1}
                        id='minimumPriceFilter'
                        className='h-full w-full cursor-pointer rounded-xl border bg-transparent py-2 text-center text-base dark:border-zinc-800'
                    ></input>
                </div>
                <div className='relative flex h-full items-center'>
                    <input
                        placeholder='maximum'
                        type='number'
                        min={1}
                        id='minimumPriceFilter'
                        className='h-full w-full cursor-pointer rounded-xl border bg-transparent py-2 text-center text-base dark:border-zinc-800'
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default Rooms;

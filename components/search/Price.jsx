import { HiChevronDown } from 'react-icons/hi';

const Price = ({ filters, setFilters }) => {
    return (
        <div className='flex items-center justify-between rounded-xl border border-dashed p-4 text-xl transition-shadow hover:shadow dark:border-[#404040]'>
            <div className='mr-2 leading-4 relative'>price <br /><span className="text-sm dark:text-zinc-500 text-zinc-400">AED</span></div>
            <form
                className='relative items-center w-full flex sm:space-y-0'
                onChange={(e) =>
                    setFilters((curr) => ({
                        ...curr,
                        // purpose: e.target.value,
                    }))
                }
            >
                <div className='relative h-full mr-1'>
                    <input
                        placeholder='minimum'
                        type='number'
                        id='minimumPriceFilter'
                        className='h-full w-full text-base cursor-pointer text-center py-2 rounded-xl bg-transparent border dark:border-zinc-800'
                        min={0}
                    ></input>
                </div>
                <div className='relative flex h-full items-center'>
                    <input
                        placeholder='maximum'
                        type='number'
                        min={0}
                        id='minimumPriceFilter'
                        className='h-full w-full text-base cursor-pointer text-center py-2 rounded-xl bg-transparent border dark:border-zinc-800'
                    ></input>
                </div>
            </form>
        </div>
    );
};

export default Price;

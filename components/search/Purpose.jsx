const Purpose = ({ filters, setFilters }) => {
    const { purpose } = filters;

    return (
        <div className='flex items-center p-4 row-span-1 justify-between  rounded-xl border border-dashed text-xl transition-shadow hover:shadow dark:border-[#404040]'>
            <span className='mr-5'>purpose</span>
            <div className='h-[1px] w-full mx-2 bg-gradient-to-r from-transparent dark:via-zinc-800 via-zinc-200 to-transparent'></div>
            <form
                className='relative flex'
                onChange={(e) =>
                    setFilters((curr) => ({
                        ...curr,
                        purpose: e.target.value,
                    }))
                }
            >
                <div
                    className={`absolute top-1/2 left-0 transition ${
                        purpose === 'for-sale'
                            ? 'translate-x-0 bg-red-600'
                            : 'translate-x-full bg-orange-600'
                    } h-8 w-16 -translate-y-1/2 rounded-xl`}
                ></div>
                <div
                    id='salePurposeRadio'
                    className='relative w-16 rounded-xl py-2 text-center font-semibold'
                >
                    <label
                        htmlFor='salePurposeRadio'
                        id='salePurposeRadioLabel'
                        className={`${
                            purpose === 'for-sale'
                                ? 'text-white'
                                : 'text-zinc-500 dark:text-zinc-400'
                        }`}
                    >
                        sale
                    </label>
                    <input
                        type='radio'
                        name='purpose'
                        className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
                        value='for-sale'
                    />
                </div>
                <div
                    id='rentPurposeRadio'
                    className='relative w-16 rounded-xl py-2 text-center font-semibold'
                >
                    <label
                        htmlFor='rentPurposeRadio'
                        id='rentPurposeRadioLabel'
                        className={`${
                            purpose === 'for-rent'
                                ? 'text-white'
                                : 'text-zinc-500'
                        }`}
                    >
                        rent
                    </label>
                    <input
                        type='radio'
                        name='purpose'
                        className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
                        value='for-rent'
                    />
                </div>
            </form>
        </div>
    );
};

export default Purpose;

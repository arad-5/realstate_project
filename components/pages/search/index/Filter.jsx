import CheckBoxForm from './CheckBoxForm';
import MinMaxForm from './MinMaxForm';
import SelectForm from './SelectForm';
import RadioForm from './RadioForm';
import { useState } from 'react';

const Filter = ({ filter, index }) => {
    const { form, title } = filter;

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const Form = () => {
        switch (form) {
            case 'radio':
                return <RadioForm filterIndex={index} />;
            case 'select':
                return <SelectForm filterIndex={index} />;
            case 'minmax':
                return <MinMaxForm filterIndex={index} />;
            case 'checkbox':
                return <CheckBoxForm filterIndex={index} />;
        }
    };

    return (
        <div
            className={`relative overflow-hidden border-b text-xl transition-[height_,_box-shadow] last:border-b-0 hover:shadow dark:border-zinc-800 md:rounded-xl  md:border md:last:border-b ${
                isFilterOpen ? 'h-28' : 'h-16'
            }`}
        >
            <div
                className={`absolute left-0 top-0 h-full w-full transition-[top] ${
                    isFilterOpen ? '-top-16' : ''
                }`}
            >
                <div
                    className='flex h-16 cursor-pointer items-center px-4 leading-4'
                    onClick={() => setIsFilterOpen(true)}
                >
                    <div className='text-2xl font-medium'>
                        {title}
                        {/* {filter?.subTitle ? (
                            <>
                                <br />
                                <span className='text-sm text-zinc-400 dark:text-zinc-500'>
                                    {filter.subTitle}
                                </span>
                            </>
                        ) : (
                            ''
                        )} */}
                    </div>
                </div>
                <div
                    className={`absolute left-0 flex h-full w-full flex-col justify-center px-4 transition-[top]`}
                >
                    <div className='flex justify-between'>
                        <span className='py-1 text-2xl'>{title}</span>
                        <button
                            className={`z-10 py-2 px-4 text-base text-red-500 ${
                                isFilterOpen ? 'block' : 'hidden'
                            }`}
                            onClick={() => setIsFilterOpen(false)}
                        >
                            clear
                        </button>
                    </div>
                    {Form()}
                </div>
            </div>
        </div>
    );
};

export default Filter;

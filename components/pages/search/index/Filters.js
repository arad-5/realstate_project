import Link from 'next/link'
import PrimaryButton from '../../../buttons/PrimaryButton'
import Filter from './Filter'
import { useFilters } from '../../../../context/search/FiltersProvider'
import { useRouter } from 'next/router'

const Filters = () => {
    const { filters } = useFilters()

    return (
        <div className='relative flex w-full max-w-2xl flex-col items-start justify-between overflow-x-hidden rounded-2xl'>
            <div className='sticky top-0 z-20 w-full border-b bg-white/60 py-2 text-center text-xl backdrop-blur-lg dark:border-zinc-800 dark:bg-[#151515]/60 '>
                <h1 className='inline-block rounded-full border bg-white px-3 py-1 dark:border-0 dark:bg-[#202020]'>search property</h1>
            </div>
            <div className='grid w-full flex-wrap overflow-y-auto py-4 md:grid-cols-2 md:gap-3 md:p-4 '>
                {filters.map((filter, index) => {
                    if (!filter.form) return
                    return <Filter key={filter.title + index} filter={filter} index={index} />
                })}
            </div>
            <div className=' bottom-0 left-0 z-30 w-full border-t bg-white/60 px-4 py-2 backdrop-blur-lg dark:border-zinc-800 dark:bg-[#151515]/60 sm:sticky'>
                <Link href={{ pathname: '/search/results', query: { ...useRouter().query } }} passHref>
                    <PrimaryButton className='w-full'>Search</PrimaryButton>
                </Link>
            </div>
        </div>
    )
}
export default Filters

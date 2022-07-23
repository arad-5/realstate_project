import { useRouter } from 'next/router'
import { useFilters } from '../../../../context/search/FiltersProvider'

const SelectForm = ({ filterIndex }) => {
    const { filters } = useFilters()
    const filter = filters[filterIndex]
    const router = useRouter()

    return (
        <form className='w-full cursor-pointer' onChange={e => router.push({ query: { ...router.query, [filter.slug]: e.target.value } })}>
            <select className='flex w-full items-center justify-center rounded-xl border bg-transparent py-2 text-center text-base text-zinc-500 transition-all hover:bg-zinc-100 hover:shadow dark:border-zinc-500 dark:text-zinc-500 dark:hover:bg-zinc-800'>
                {filter.options.map(option => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </form>
    )
}

export default SelectForm

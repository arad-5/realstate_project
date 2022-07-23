import { useFilters } from '../../../../context/search/FiltersProvider'
import { useRouter } from 'next/router'

const MinMaxForm = ({ filterIndex }) => {
    const { filters } = useFilters()
    const filter = filters[filterIndex]
    const router = useRouter()

    return (
        <form
            className='relative flex w-full items-center sm:space-y-0 '
            onChange={e =>
                router.push({ query: { ...router.query, [e.target.dataset?.minimum ? filter.slugs.minimum : filter.slugs.maximum]: e.target.value } })
            }
        >
            <div className='relative mr-1 h-full '>
                <input
                    placeholder='minimum'
                    type='number'
                    data-minimum
                    className='h-full w-full cursor-pointer rounded-xl border bg-transparent py-2 pl-2 text-base placeholder:text-center dark:border-zinc-800'
                    min={0}
                ></input>
            </div>
            <div className='relative h-full'>
                <input
                    placeholder='maximum'
                    type='number'
                    data-maximum
                    min={0}
                    className='maximum h-full w-full cursor-pointer rounded-xl border bg-transparent py-2 pl-2 text-base placeholder:text-center dark:border-zinc-800'
                ></input>
            </div>
        </form>
    )
}

export default MinMaxForm

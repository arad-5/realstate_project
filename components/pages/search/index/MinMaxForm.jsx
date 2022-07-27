import { useRouter } from 'next/router'

const MinMaxForm = ({ filter }) => {
    const router = useRouter()

    console.log(router.query[filter.maximum])
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
                    value={router.query[filter.maximum]}
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

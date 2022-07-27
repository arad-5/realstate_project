import { useRouter } from 'next/router'

const RadioForm = ({ filter }) => {
    const router = useRouter()

    return (
        <form
            className='relative flex w-full items-center space-x-2'
            onChange={e => {
                ;[...document.querySelectorAll(`[data-radio]`)].forEach(element => {
                    element.style.backgroundColor = 'transparent'
                    element.style.color = '#747474'
                })
                document.querySelector(`[data-radio='${e.target.value}']`).style.backgroundColor = e.target.dataset.color
                document.querySelector(`[data-radio='${e.target.value}']`).style.color = '#fff'
                router.push({ query: { ...router.query, [filter.slug]: e.target.value } })
            }}
        >
            {filter.options.map(option => (
                <div
                    key={option.label}
                    className='relative w-full rounded-xl py-2 text-center font-semibold transition-colors'
                    data-radio={option.value}
                >
                    <label>{option.label}</label>
                    <input
                        type='radio'
                        name={filter.title}
                        value={option.value}
                        data-color={option.color}
                        className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
                    />
                </div>
            ))}
        </form>
    )
}

export default RadioForm

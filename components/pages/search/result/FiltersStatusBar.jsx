import Badge from '../../../Badge'
import { useRouter } from 'next/router'

const FiltersStatusBar = () => {
    const router = useRouter()
    const { query, pathname } = router
    console.log(pathname)
    const queryToFilterWord = key => {
        if (key.includes('Min') || key.includes('Max'))
            return key.replace('Min', ' minimum').replace('Max', ' maximum').split(' ').reverse().join(' ')
        return key.replace(/([A-Z]+)/g, ' $1').toLowerCase()
    }
    const queryValueToWord = value => {
        let newValue = value
        while (newValue.includes('-')) newValue = newValue.replace('-', ' ')
        return newValue.replace('asc', 'ascending').replace('desc', 'descending')
    }
    
    return (
        <div className='fixed top-16 left-0 z-20 w-screen overflow-x-auto bg-white/50 px-4 shadow-md backdrop-blur-xl dark:bg-[#171717]/50 sm:px-14'>
            <div className='container mx-auto h-full space-x-2 whitespace-nowrap py-2 sm:pl-0'>
                {Object.keys(query).map(key => {
                    return query[key] ? (
                        <Badge className='flex-shrink-0 bg-white dark:bg-[#171717]' key={key}>
                            {queryToFilterWord(key)} : {queryValueToWord(query[key])}
                        </Badge>
                    ) : (
                        ''
                    )
                })}
            </div>
        </div>
    )
}

export default FiltersStatusBar

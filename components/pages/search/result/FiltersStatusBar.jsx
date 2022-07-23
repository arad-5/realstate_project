import Badge from '../../../Badge'
import { useRouter } from 'next/router'

const FiltersStatusBar = () => {
    const router = useRouter()
    const { query, pathname } = router
    console.log(pathname)

    return (
        <div className='fixed top-16 left-0 z-20 w-screen bg-white/50 shadow-md backdrop-blur-xl dark:bg-[#171717]/50'>
            <div className='container mx-auto h-full space-x-2 overflow-x-auto whitespace-nowrap py-2'>
                {Object.keys(query).map(key => (
                    <Badge className='flex-shrink-0 border-0 bg-white dark:bg-[#171717]' key={key}>
                        {key} : {query[key]}
                    </Badge>
                ))}
            </div>
        </div>
    )
}

export default FiltersStatusBar

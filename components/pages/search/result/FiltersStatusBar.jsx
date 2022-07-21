import { useSelectedFiltersSlug } from '../../../../context/search/SelectedFiltersSlugProvider'
import Badge from '../../../Badge'

const FiltersStatusBar = () => {
    const { searchSlug } = useSelectedFiltersSlug()
    console.log()

    return (
        <div className='fixed top-16 shadow-md left-0 z-50 w-screen backdrop-blur-xl dark:bg-[#171717]/50 bg-white/50 py-3'>
            <div className='container mx-auto flex justify-center space-x-2'>
                    {searchSlug
                        .split('&')
                        .map(slug => slug.split('='))
                        .map(slug => (
                            <Badge key={slug[0]}>
                                {slug[0]} : {slug[1]}
                            </Badge>
                        ))}
            </div>
        </div>
    )
}

export default FiltersStatusBar

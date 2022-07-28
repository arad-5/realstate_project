import Router from 'next/router'
import { Loading } from '@nextui-org/react'
import { useState } from 'react'

const RouteChangeLoading = () => {
    const [IsLoading, setIsLoading] = useState(false)
    Router.events.on('routeChangeStart', () => {
        setIsLoading(true)
        document.body.style.overflowY = 'hidden'
    })
    Router.events.on('routeChangeComplete', () => {
        setIsLoading(false)
        document.body.style.overflowY = 'scroll'
    })
    return (
        <>
            {IsLoading ? (
                <div className='fixed top-16 left-0 z-40 flex h-screen w-screen bg-white/50 backdrop-blur-xl dark:bg-[#171717]/50'>
                    <div className='m-auto flex h-20 w-20 items-center justify-center rounded-2xl border bg-white dark:border-0'>
                        <Loading size='lg' />
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    )
}

export default RouteChangeLoading

import '../styles/globals.css'

import { NextUIProvider } from '@nextui-org/react'
import Layout from '../layout'
import { ThemeProvider } from 'next-themes'
import FiltersContext from '../context/search/FiltersProvider'
import SelectedFiltersSlugProvider from '../context/search/SelectedFiltersSlugProvider'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        // 2. Use at the root of your app
        <ThemeProvider attribute='class'>
            <NextUIProvider>
                <FiltersContext>
                    <SelectedFiltersSlugProvider>
                        <Layout>
                            <Head>
                                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
                            </Head>
                            <Component {...pageProps} />
                        </Layout>
                    </SelectedFiltersSlugProvider>
                </FiltersContext>
            </NextUIProvider>
        </ThemeProvider>
    )
}

export default MyApp

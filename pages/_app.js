import '../styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import Layout from '../layout';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return (
        // 2. Use at the root of your app
        <NextUIProvider>
            <ThemeProvider attribute='class'>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </NextUIProvider>
    );
}

export default MyApp;

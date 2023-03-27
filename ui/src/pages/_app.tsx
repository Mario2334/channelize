import 'channelize/styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import {Provider} from "react-redux";
import {wrapper} from "channelize/store";

export default function App({ Component, ...rest}) {
    const { store, props } = wrapper.useWrappedStore(rest);
    let pageProps = props
    return <>
      <Provider store={store}>
        <Head>
          <title>Page title</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'light',
            }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </Provider>
  </>
}

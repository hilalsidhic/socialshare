import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import AppContext from '../AppContext';
import { useState } from 'react';
// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache =
		clientSideEmotionCache, pageProps } = props;
	const [LinkedinState, setLinkedinState] = useState("fd");
	const [LinkedinID, setLinkedinID] = useState("")
	const [LinkedinToken, setLinkedinToken] = useState("")
	const [TwitterState, setTwitterState] = useState("fd");
	const [TwitterToken, setTwitterToken] = useState("")
	const [TwitterSecret, setTwitterSecret] = useState("")
	return (
		<AppContext.Provider value={{
			LinkedinState: LinkedinState,
			LinkedinID: LinkedinID,
			LinkedinToken: LinkedinToken,
			TwitterSecret: TwitterSecret,
			TwitterToken: TwitterToken,
			TwitterState: TwitterState,
			setTwitterSecret: setTwitterSecret,
			setTwitterToken: setTwitterToken,
			setTwitterState: setTwitterState,
			setLinkedinID: setLinkedinID,
			setLinkedinToken: setLinkedinToken,
			setLinkedinState: setLinkedinState
		}}>
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport"
					content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				
				{/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}
				
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
		</AppContext.Provider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};

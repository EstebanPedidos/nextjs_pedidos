import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createMuiTheme, makeStyles, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../themes/light-theme';
import '../styles/globals.css';


const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

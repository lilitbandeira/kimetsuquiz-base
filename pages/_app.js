import React from 'react'
import { createGlobalStyle, ThemeProvider } from 
'styled-components'
import Head from 'next/head'
import db from '../db.json'


const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
      min-height: 100vh;
  }
  #__next {
      flex: 1;
      display: flex;
      flex-direction: column;
  }
`

const { theme, bg, title, description } = db; 

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous" />
                        
            <title>Kimetsu Quiz</title>

            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://kimetsuquiz-base.lilitbandeira.vercel.app/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={bg} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://kimetsuquiz-base.lilitbandeira.vercel.app/" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={bg} />
        </Head>
        <ThemeProvider theme={theme}>
            <GlobalStyle /> 
            <Component {...pageProps} />
        </ThemeProvider>
    </>
  )
}

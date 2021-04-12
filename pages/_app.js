import '../styles/globals.css'
import React from 'react'
import App from 'next/app'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

// we can add more icons here.
// but for now I will add all brands and icon faCode
library.add(fab, faCode)

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp

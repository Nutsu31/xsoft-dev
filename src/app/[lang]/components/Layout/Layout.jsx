import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children, lang, params}) => {
  return (
    <>
    <Header lang={lang} params={params}/>
     {children}
    <Footer/>
    
    </>
  )
}

export default Layout
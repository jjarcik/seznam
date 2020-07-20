import React from 'react'
import Header from '../blocks/Header'
import Footer from '../blocks/Footer'

export interface Props {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Main

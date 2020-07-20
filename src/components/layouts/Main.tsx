import React from 'react'
import Header from '../blocks/Header'
import Footer from '../blocks/Footer'
import styles from './Main.module.css'

export interface Props {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }: Props) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
)

export default Main

import React from 'react'
import styles from './Footer.module.css'

const links = [
  {
    label: 'Nápověda',
    href: 'https://napoveda.zbozi.cz/',
  },
  {
    label: 'Dotazy',
    href: 'https://napoveda.zbozi.cz/nejcastejsi-dotazy/',
  },
  {
    label: 'Ochrana',
    href: 'https://o.seznam.cz/ochrana-udaju/',
  },
  {
    label: 'Reklama',
    href: 'https://www.seznam.cz/reklama/cz/obsahovy-web/sluzba-zbozi',
  },
  {
    label: 'Kontakt',
    href: 'https://napoveda.zbozi.cz/kontaktni-formular/',
  },
]

const Footer: React.FC = () => (
  <footer>
    <ul className={styles.ul}>
      {links.map((link, key) => (
        <li key={key}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </footer>
)

export default Footer

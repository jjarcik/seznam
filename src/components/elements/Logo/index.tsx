import React from 'react'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => (
  <Link to="/">
    <img src="https://www.zbozi.cz/img/logo.svg" alt="logo" />
  </Link>
)

export default Logo

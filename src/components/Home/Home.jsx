import SearchCountryInfo from '../SearchCountryInfo/SearchCountryInfo'
import './Home.css'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Consulta Información del Banco Mundial</h1>
      <SearchCountryInfo />
    </div>
  )
}

export default Home

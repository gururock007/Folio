import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DashBoardHome } from '../components/DashBoardHome'

export const DashBoard = () => {
  return (
    <div>
        <Header />
        <DashBoardHome />
        <Footer />
    </div>
  )
}

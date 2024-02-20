import React from 'react'
import { BookInfo } from '../components/BookInfo'
import { Reviews } from '../components/Reviews'

export const Book = () => {
  return (
    <div className=' font-Poppins text-text p-20 '>
        <BookInfo />
        <Reviews />
    </div>
  )
}

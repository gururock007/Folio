import React from 'react'
import { BookCard } from './BookCard'

export const SearchResult = () => {
  return (
    <div className=' text-text'>
        <div className=' grid grid-cols-6'>
            <div className=' col-span-1'>
                <BookCard
                            key={1}
                            title={'book.volumeInfo.title'}
                            author={
                            "book.volumeInfo.authors"
                            }
                            liked={10} // Example: Random liked value
                            imageSrc={"book.volumeInfo.imageLinks?.thumbnail || noimage"} // Use default image URL if thumbnail not available
                        />
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export const BookCard = ({title, author, liked}) => {
  return (
    <div>
        <div class="group relative w-48 h-64  rounded-lg transition duration-200 ease-in-out hover:shadow-md hover:scale-110 hover:-translate-y-6 overflow-hidden">
            <div className= {(liked >= 70) ? 'absolute right-0 w-12 h-12 rounded-full bg-red-700 z-10': (liked > 30) ? 'absolute right-0 w-12 h-12 rounded-full bg-primary z-10' : 'absolute right-0 w-12 h-12 rounded-full bg-secondary z-10'}>
                <div className= ' text-center mt-3 ms-1'>
                    {liked}%
                </div>
            </div>
            <div class="p-4">
                <div class="grid place-items-center h-full w-full">
                    <img src="http://books.google.com/books/content?id=JuwctOkJYJQC&printsec=frontcover&img=1&zoom=1&source=gbs_api" 
                    className=' w-full rounded-xl p-2   ' alt="" />
                </div>
            </div>
            <button class="
            absolute bg-gradient-to-b from-black/10 via-black/70 to-black/100 bottom-0
            left-1/2 transform -translate-x-1/2
            -translate-y-0 text-white  w-40 h-60
            px-4 py-2  rounded-lg border-none transition 
            duration-300 ease-in-out opacity-0  font-medium font-Poppins
            group-hover:opacity-100 ">
                    <div className=' mt-16'>
                        {title}
                    </div>
                    <div>
                        {author}
                    </div>
            </button>
        </div>  
    </div>
  )
}

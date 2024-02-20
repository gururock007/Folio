import React from 'react'
import { BookCard } from './BookCard'

export const DashBoardHome = () => {
  return (
    <div>
        <div className=' py-60 font-Poppins'>
            <div className='px-60 self-center grid grid-cols-8'>
                <div className=' col-span-5 grid grid-cols-8 bg-inputfeild py-2 px-5 rounded-full'>
                    <div className=' col-span-6'>
                      <input
                      type="text"
                      placeholder='Search any Book Here...'
                      className='w-full h-12 bg-transparent focus-within:outline-none  text-text  placeholder:px-10'/>
                    </div>
                    <div className=' col-span-2 self-center bg-white py-2 text-center rounded-3xl'>
                      <button >
                        Submit
                      </button>
                    </div>
                </div>
                <div className=' col-span-1 text-text py-3 px-10 text-xl'>
                  or
                </div>
                <div className=' col-span-2 self-center'>
                  <div className=' text-text py-3  px-5 bg-primary text-center rounded-3xl'>
                    <a href="">try Out Our Chat</a> 
                  </div>
                </div>
            </div>
            <div className=' py-52 px-24'>
              <div className=' text-text font-medium p-5'>
                Most People Liked
              </div>
              <div className=' flex overflow-x-scroll py-14'>
                <BookCard title={'title'} author={'author'} liked={72} />
                <BookCard title={'title'} author={'author'} liked={20} />
                <BookCard title={'title'} author={'author'} liked={30} />
                <BookCard title={'title'} author={'author'} liked={50} />
                <BookCard title={'title'} author={'author'} liked={73} />
                <BookCard title={'title'} author={'author'} liked={20} />
                <BookCard title={'title'} author={'author'} liked={30} />
                <BookCard title={'title'} author={'author'} liked={50} />
                <BookCard title={'title'} author={'author'} liked={70} />
                <BookCard title={'title'} author={'author'} liked={20} />
                <BookCard title={'title'} author={'author'} liked={30} />
                <BookCard title={'title'} author={'author'} liked={50} />
              </div>
            </div>
        </div>
    </div>
  )
}

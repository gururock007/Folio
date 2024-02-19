import React from 'react'

export const PageInfo = () => {
  return (
    <div>
        <div className=' p-20 mt-16 font-Poppins text-text'>
            <div className=' grid grid-cols-2'>
                <div className=' col-span-1'></div>
                <div className=' col-span-1 text-5xl font-semibold'>
                    <div >
                        Have <span className='bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent'>Personalized</span> Recommendations For Books
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-3 p-16 py-28     text-xl'>
                <div className=' col-span-1 text-center'>
                    Smart Recommendations <br />For Smart You
                </div>
                <div className=' col-span-1 text-center'>
                Tell How you Feel to AI To <br />Get More Personal
                </div>
                <div className=' col-span-1 text-center'>
                Honest reviews <br />From Reader All Around
                </div>
            </div>
            <div className=' grid grid-cols-1 text-5xl font-semibold'>
                <div >
                Get <span className=' text-accent'>Review</span> Any <br />Book You Like
                </div>
            </div>
        </div>
    </div>
  )
}

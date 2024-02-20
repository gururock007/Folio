import React, { useEffect, useState } from 'react'
import heart_outline from '/images/heart-outline.png'
import heart_outline_white from '/images/heart-outline-white.png'
import heart from '/images/heart.png'
import { SecondaryButton } from './SecondaryButton'
export const BookInfo = () => {
    const [ liked , setLiked ] = useState(false)
    const changelikeHandle = () => {
        setLiked((perVal) => (!perVal))
    }
    const [isDark, setIsDark] = useState(
        localStorage.getItem("theme") === "dark"
    );
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setIsDark(savedTheme === "dark");
    
        if (savedTheme === "dark") {
          document.body.classList.add("dark");
        }
      }, []);
  return (
    <div >
        <div className=' grid grid-cols-8 '>
            <div className="col-span-3 ">
                <div className=' text-5xl font-semibold'>
                    Title
                </div>
            </div>
            <div className=' col-span-2 self-center flex gap-2'>
                <div className=' flex'>
                    Ratings:
                </div>
                <div>
                    star
                </div>
            </div>
            <div className=' col-span-2 self-center flex gap-2'>
                <div className=' self-center w-10' >
                    {
                        liked ?  
                        <button onClick={ changelikeHandle}>
                            <img src={ heart } alt="" />
                        </button> :  
                        isDark ?
                        <button onClick={ changelikeHandle}>
                            <img src={ heart_outline_white } alt="" />
                        </button> :
                        <button onClick={ changelikeHandle}>
                            <img src={ heart_outline } alt="" />
                        </button>
                    }
                </div>
            </div>
            <div className=' col-span-1'>
                <button className=' bg-primary text-text p-3 rounded-lg'>
                    Add to List
                </button>
            </div>
        </div>
        <div className=' ms-48 text-2xl'>
            by Author
        </div>
        <div className=' grid grid-cols-3 p-20'>
            <div className=' col-span-1'>
                <img src="http://books.google.com/books/content?id=JuwctOkJYJQC&printsec=frontcover&img=1&zoom=1&source=gbs_api" alt="" />
            </div>
            <div className=' col-span-2'>
                <div className=' pb-5 text-xl font-semibold'>
                    Description
                </div>
                    Fighting to rebuild her life after shattering losses, Auburn Reed is unexpectedly attracted to an enigmatic artist only to discover that the object of her affections is hiding threatening secrets from his past
            </div>
        </div>
    </div>
  )
}

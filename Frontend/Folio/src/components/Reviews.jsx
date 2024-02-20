import React from 'react'

export const Reviews = () => {
  return (
    <div>
        <div className=' text-text'>
            <div className=' pb-2'>
                <div className=' text-3xl'>
                    Reviews
                </div>
            </div>
            
            <div className=' border-b py-4 px-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo incidunt quas. Delectus tempora eaque accusantium quidem? Blanditiis, distinctio officia?
            </div>
            <div className=' border-b py-4 px-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro a aliquid nisi soluta animi quia quis corporis, voluptatem esse commodi, ex odio sit quisquam magnam cupiditate! Tempore, accusantium officiis.
            </div>
            <div className=' border-b py-4 px-20'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quam enim ratione culpa officiis fuga voluptates atque amet sequi, suscipit, aspernatur nesciunt obcaecati similique soluta quis molestiae consectetur velit harum animi voluptatem nisi doloribus? Debitis laborum amet ea exercitationem hic!
            </div>
            <div className=' border-b py-4 px-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo incidunt quas. Delectus tempora eaque accusantium quidem? Blanditiis, distinctio officia?
            </div>
        </div>
        <div className=' py-10 container mx-auto'>
                <label for="message" class=" pb-10 font-medium text-text self-center text-3xl">Write A Review</label>
                <textarea id="message" rows="4" class=" mt-5 p-5  w-full text-sm text-tex bg-inputfeild rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write your thoughts here..."></textarea>
                <button className=' px-10 py-3 mt-10 self-center bg-primary rounded-xl'> submit</button>
            </div>
    </div>
  )
}

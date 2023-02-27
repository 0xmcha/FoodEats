import React from 'react'

const HeadCarts = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards*/}
        <div className='rounded-xl relative hover:scale-105 hover:duration-200'>
            {/* Overlay*/}
            <div className='absolute w-full  h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-xl px-2 p-4'>Sun's Out, Food's Out</p>
            <p className='px-2'>Through 25/4</p>
            <button className='border-white hover:bg-orange-600 hover:text-white hover:duration-200 bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
             src="https://images.pexels.com/photos/958544/pexels-photo-958544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
           {/* Cards*/}
           <div className='rounded-xl relative hover:scale-105 hover:duration-200'>
            {/* Overlay*/}
            <div className='absolute w-full  h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-xl px-2 p-4'>Shrimp Lovers</p>
            <p className='px-2'>Newly Added</p>
            <button className='border-white hover:bg-orange-600 hover:text-white hover:duration-200 bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
             src="https://images.pexels.com/photos/1150447/pexels-photo-1150447.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
           {/* Cards*/}
           <div className='rounded-xl relative hover:scale-105 hover:duration-200'>
            {/* Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-xl px-2 p-4'>Pizza</p>
            <p className='px-2'>Mix</p>
            <button className='border-white hover:bg-orange-600 hover:text-white hover:duration-200 bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
             src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
    </div>
  )
}

export default HeadCarts
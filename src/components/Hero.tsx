import React from 'react'


const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Connecting people
                    through music...
                </h1>

                <p className='text-2xl'>Connection through music through a semi permiable membrane</p>
                <button className='py-3 px-6 sm:w-[30%] bg-black my-4 rounded-full text-white'>Join the waitlist</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default Hero
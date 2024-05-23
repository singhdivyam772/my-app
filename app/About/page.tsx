import React from 'react'

const page = () => {
  return (
    <div className='  min-h-screen flex flex-col justify-center items-center overflow-auto'>

        {/* image and our story section */}
        <section className=' w-full bg-red-500  flex md:flex-row justify-around item-center flex-col'>

            {/* left content */}
            <div className=' flex flex-col w-[525px] min-h-[340px] md:mt-[422px] leading-[64px] ml-[135px] gap-[40px] bg-slate-500 '>
                <p className=' font-medium lg:text-[54px] text-[46px]  text-black uppercase '>
                    our story
                </p>
                <p className=' text-[16px] leading-[26px]  '>
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active 
                    presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                    Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                </p>
                <p className=' text-[16px] leading-[26px]  '>
                    Exclusive has more than 1 Million products to offer, growing at a very fast. 
                    Exclusive offers a 
                    diverse assotment in categories ranging  from consumer.
                </p>
            </div>

            {/* right image */}
            <div className=' w-[655px] bg-green-400 h-[609px] mt-[285px]  '>
                <img 
                    src="https://res.cloudinary.com/drj0uehgx/image/upload/v1716481267/E-CommerceAssignment/about/rgbia3baloghwnspgwvj.png" 
                    alt="" 
                    className=' w-full h-full object-contain'
                    />
            </div>
          
        </section>

    </div>
  )
}

export default page
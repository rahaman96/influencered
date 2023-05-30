import React from 'react'

const AppPage = () => {
  return (
    <>
      <div className='md:px-10 md:w-[1240px] w-full'>
        <div className="flex flex-wrap md:justify-between justify-center">
          <div className='justify-center md:mt-[220px]'>
            <h6
              className='text-[#000000] text-center md:w-[993px  md:h-[100px] text-[25px] md:text-[93px] font-medium md:leading-[100px]'>
              Download
              <span className='text-[#5A914D]'> App
              </span>
            </h6>
            <div className="flex gap-4 mt-4">
              <img src="../image/brandsness/gooleplay.svg" alt="ground" className='md:w-[258px] w-[200px]'/>
              <img src="../image/brandsness/appstore.svg" alt="ground" className='md:w-[229px] w-[200px]'/>

            </div>
          </div>

          <div>
            <img src="../image/brandsness/phone.svg" alt="ground" className='h-[579px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default AppPage
import React, { use, useState } from 'react'
import HeroNav from './HeroNav'
import { BsBicycle } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Wrapper from '../Wrapper';
import About from '../Home/About';
import Footer from '../Home/Footer';
import AwarenessHeader from './AwarenessHeader';
import { ImGlass2 } from 'react-icons/im'
import styles from './SelectCategories.module.css'

const categoriesData = [
  { id: 1, name: "Education" },
  { id: 2, name: "Fitness", },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Education" },
  { id: 5, name: "Education", },
  { id: 6, name: "Fitness" },
  { id: 7, name: "Fashion" },
  { id: 8, name: "Education", },
  { id: 9, name: "Life style" },
  { id: 10, name: "Education" },
  { id: 11, name: "Fashion", },
  { id: 12, name: "Fitness" },
  { id: 13, name: "Life style" },
  { id: 14, name: "Fashion", },
  { id: 15, name: "Education" },
]



const SelectCategories = () => {
  const [id, setId] = useState([])
  console.log('handleSelect',id);

  const [flag, setFlag] = useState(true)
  const router = useRouter()

  const handleSelect = (newId) => {
    console.log('newId',newId);
    if (id.includes(newId)) {
      setFlag(true)
      setId(id.filter(d => d != newId))
    } else {
      setFlag(false)
      setId([...id, newId])
    }

  }

  const handleMessage = () => {
    setFlag(true)
    alert('can not select more than three categories')
    console.log('handleMessage')
  }
  const headerData = router.query.name
  return (
    <>
      <div>
        <AwarenessHeader headerData={headerData} />
        <HeroNav />
        <Wrapper>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-10 md:py-24 flex justify-center mx-auto">
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-3 md:py-0 flex flex-wrap md:flex-nowrap">

                  <div className="md:flex-grow">
                    <h2 className="pb-3 md:w-[684px] text-[#000000] text-[20px] md:text-[36px] leading-[27px] md:leading-[54px] font-medium font-sans">Select upto 3 categories/niche for your product</h2>
                    <div>
                      <p className='mb-5 md:w-[728px]  text-[#000000] text-[14px] md:text-[16px] md:leading-[24px] font-normal font-sans opacity-70'>Select upto 3 categories relevent to the products of your campaign, the influencers will be shortlisted based on selected categories</p>
                      <h6 className='mb-5 text-[#000000] text-[20px] leading-[30px] font-normal font-sans
                       '>
                        Selected ({`0${id.length}`})
                      </h6>
                    </div>
                    {/* Button start */}
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 '>
                      {categoriesData.map((categories) => {
                        return (
                          <>
                            <div className={`cursor-pointer flex justify-cente md:px-6 px-2  items-center md:gap-8 gap-2 h-[34px] md:[236px] md:h-[56px]  border-[1.14px] border-[#000000] opacity-80 bg-[#EDFFE9] item rounded-full hover:bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] hover:text-white ${id.includes(categories.id) ? styles.categories : ""} `}
                              onClick={() => id.includes(categories.id) || id.length < 3 ? handleSelect(categories.id) : handleMessage()}
                            >
                              <ImGlass2
                                className={`w-[27px] h-[23px] ${id.includes(categories.id) ? styles.textSeclect : ""}`}
                              />
                              <p className={`md:text-[18px] text-black opacity-80 leading-[27px] hover:text-[#FFFFFF] ${id.includes(categories.id) ? styles.textSeclect : ""}`}>
                                {categories.name}
                              </p>
                            </div>
                          </>
                        )
                      })}
                    </div>

                    {/* butto Start */}
                    <div className="flex gap-4 py-10 mb-16 md:gap-10 pb-10 md:pb-0 justify-center"
                      onClick={() => router.push({ pathname: 'etarget', query: { name: headerData, eData: 'third' } })}
                    >
                      <div className='w-[55px] h-[50px] border-[1px] border-[#114067] rounded-[5px] flex justify-center items-center '>
                        <AiOutlineArrowLeft />
                      </div>
                      <button type="submit" className="text-[#FFFFFF] text-[20px] leading-[24px] font-medium rounded-[5px] bg-gradient-to-b from-[rgb(90,145,77)] to-[#0F3D68] w-[221px] h-[50px] ">Next</button>
                    </div>
                    {/* butto End */}

                  </div>
                </div>
              </div>
            </div>
          </section>
        </Wrapper>
        {/* Last Section start */}
        <div>
          <About />
          <Footer />
        </div>
        {/* Last Section end */}
      </div>
    </>
  )
}

export default SelectCategories
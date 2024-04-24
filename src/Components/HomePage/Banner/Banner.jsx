import Rectangle from '../../../assets/Rectangle-8.png'
import Vector from '../../../assets/icon/Vector.png'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <div className=" mt-4 relative container mx-auto rounded-md mb-20">
                    <img src={Rectangle} className='w-full' alt="" />
                    <div className='flex justify-start items-start flex-col py-14 text-white pl-24 absolute top-[50%] translate-y-[-50%]'>
                        <h1 className='text-[40px] font-bold'>CMA Fest</h1>
                        <p className='text-xl font-normal text-left'>Make memories that will last a lifetime. See your favorite artists live at CMA Fest!</p>
                        <div className='flex justify-start items-center gap-2 pt-[30px]'>
                            <button className=' py-[10px] px-5 rounded-md bg-[#7443F9]'><span className='grid grid-cols-5 justify-start items-center'><img src={Vector} alt="" /> <p className='col-span-4'>Get Ticket</p></span></button>
                            <button className=' py-2 px-5 rounded-md border-2 border-white'>Explore All Events</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" mt-4 relative container mx-auto rounded-md mb-20">
                    <img src={Rectangle} className='w-full' alt="" />
                    <div className='flex justify-start items-start flex-col py-14 text-white pl-24 absolute top-[50%] translate-y-[-50%]'>
                        <h1 className='text-[40px] font-bold'>CMA Fest</h1>
                        <p className='text-xl font-normal'>Make memories that will last a lifetime. See your favorite artists live at CMA Fest!</p>
                        <div className='flex justify-start items-center gap-2 pt-[30px]'>
                            <button className='flex justify-start items-center gap-2 py-2 px-5 bg-[#7443F9] rounded-md'><img src={Vector} alt="" /> Get Ticket</button>
                            <button className=' py-2 px-5 rounded-md border-2 border-white'>Explore All Events</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" mt-4 relative container mx-auto rounded-md mb-20">
                    <img src={Rectangle} className='w-full' alt="" />
                    <div className='flex justify-start items-start flex-col py-14 text-white pl-24 absolute top-[50%] translate-y-[-50%]'>
                        <h1 className='text-[40px] font-bold'>CMA Fest</h1>
                        <p className='text-xl font-normal'>Make memories that will last a lifetime. See your favorite artists live at CMA Fest!</p>
                        <div className='flex justify-start items-center gap-2 pt-[30px]'>
                            <button className='flex justify-start items-center gap-2 py-2 px-5 bg-[#7443F9] rounded-md'><img src={Vector} alt="" /> Get Ticket</button>
                            <button className=' py-2 px-5 rounded-md border-2 border-white'>Explore All Events</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner
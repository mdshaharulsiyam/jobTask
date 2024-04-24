import React from 'react'
import Vector1 from '../../../assets/icon/Vector1.png'
import Vector from '../../../assets/icon/Vector.png'
import Rectangle16 from '../../../assets/Rectangle16.png'
import Rectangle161 from '../../../assets/Rectangle16-1.png'
import Rectangle162 from '../../../assets/Rectangle16-2.png'
const Cards = () => {
    return (
        <div className='md:grid  lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 mt-8 mx-auto container'>
            <div className="card  bg-[#F1F3FF] shadow-xl p-3 rounded-lg">
                <figure className='w-full'><img className='rounded-lg w-full object-cover' src={Rectangle16} alt="Shoes" /></figure>
                <div className="card-body px-0 py-6">
                    <div className='grid grid-cols-4 justify-between items-start'>
                        <div className='col-span-3'>
                            <h2 className="card-title pb-3">
                                <div className="badge rounded-md bg-blue-500 text-white">Music</div>
                            </h2>
                            <div className='flex justify-center items-center gap-2 py-2'>
                                <img src={Vector1} alt="" /> <p className='text-sm'>Celebrity Convention Hall </p>
                            </div>
                            <p className='text-[22px] font-semibold pt-2'>ROUFIAN’S HSC-24 RAG DAY</p>
                        </div>
                        <div className='bg-white flex justify-center max-h-[95px] items-center flex-col rounded-md'>
                            <p>Apr</p>
                            <p className='text-blue-500 text-[32px] font-semibold'>20</p>
                            <p>10:00 PM</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-4'>
                        <button className='flex justify-start items-center gap-2 py-2 px-3 text-white bg-[#7443F9] rounded-md'><img src={Vector} alt="" /> Get Ticket</button>
                        <button className='flex justify-start items-center gap-2 py-1 px-3 bg-white rounded-md'> <p className='text-3xl text-blue-500 font-semibold'>20</p> <p>Seat 
                            Left</p></button>
                        <button className='flex justify-start items-center gap-2 py-2 px-3 text-blue-400 rounded-md'>See More</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-[#F1F3FF] shadow-xl p-3 rounded-lg">
                <figure className='w-full'><img className='rounded-lg w-full object-cover' src={Rectangle161} alt="Shoes" /></figure>
                <div className="card-body px-0 py-6">
                    <div className='grid grid-cols-4 justify-between items-start'>
                        <div className='col-span-3'>
                            <h2 className="card-title pb-3">
                                <div className="badge rounded-md bg-blue-500 text-white">Music</div>
                            </h2>
                            <div className='flex justify-center items-center gap-2 py-2'>
                                <img src={Vector1} alt="" /> <p className='text-sm'>Celebrity Convention Hall </p>
                            </div>
                            <p className='text-[22px] font-semibold pt-2'>ROUFIAN’S HSC-24 RAG DAY</p>
                        </div>
                        <div className='bg-white flex justify-center max-h-[95px] items-center flex-col rounded-md'>
                            <p>Apr</p>
                            <p className='text-blue-500 text-[32px] font-semibold'>20</p>
                            <p>10:00 PM</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-4'>
                        <button className='flex justify-start items-center gap-2 py-2 px-3 text-white bg-[#7443F9] rounded-md'><img src={Vector} alt="" /> Get Ticket</button>
                        <button className='flex justify-start items-center gap-2 py-1 px-3 bg-white rounded-md'> <p className='text-3xl text-blue-500 font-semibold'>20</p> <p>Seat 
                            Left</p></button>
                        <button className='flex justify-start items-center gap-2 py-2 px-3 text-blue-400 rounded-md'>See More</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-[#F1F3FF] shadow-xl p-3 rounded-lg">
                <figure className='w-full'><img className='rounded-lg w-full object-cover' src={Rectangle162} alt="Shoes" /></figure>
                <div className="card-body px-0 py-6">
                    <div className='grid grid-cols-4 justify-between items-start'>
                        <div className='col-span-3'>
                            <h2 className="card-title pb-3">
                                <div className="badge rounded-md bg-blue-500 text-white">Music</div>
                            </h2>
                            <div className='flex justify-center items-center gap-2 py-2'>
                                <img src={Vector1} alt="" /> <p className='text-sm'>Celebrity Convention Hall </p>
                            </div>
                            <p className='text-[22px] font-semibold pt-2'>ROUFIAN’S HSC-24 RAG DAY</p>
                        </div>
                        <div className='bg-white flex justify-center max-h-[95px] items-center flex-col rounded-md'>
                            <p>Apr</p>
                            <p className='text-blue-500 text-[32px] font-semibold'>20</p>
                            <p>10:00 PM</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-4'>
                        <button className='flex justify-start items-center gap-2 py-2 text-white px-3 bg-[#7443F9] rounded-md'><img src={Vector} alt="" /> Get Ticket</button>
                        <button className='flex justify-start items-center gap-2 py-1 px-3 bg-white rounded-md'> <p className='text-3xl text-blue-500 font-semibold'>20</p> <p>Seat 
                            Left</p></button>
                        <button className='flex justify-start items-center gap-2 py-2 px-3 text-blue-400 rounded-md'>See More</button>
                    </div>
                </div>
            </div>
  
        </div>
    )
}

export default Cards
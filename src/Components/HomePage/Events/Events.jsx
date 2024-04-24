import React from 'react'

const Events = () => {
    const Tabs =['All','For you','This Day','This Week','Music','union']
    return (
        <div className='pb-8'>
            <h2 className='text-center text-5xl font-semibold pb-4'>Events</h2>
            <div className=" text-center">
                {Tabs.map((item,index)=> <button key={index} className={`py-2 px-4 rounded-xl ${item==='Music'?'text-white bg-[#7443F9]':''}`}>{item}</button>)}
               
            </div>
        </div>
    )
}

export default Events
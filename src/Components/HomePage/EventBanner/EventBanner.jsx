import Group29 from '../../../assets/Group29.png'
import check1 from '../../../assets/icon/check1.png'
import Group from '../../../assets/Group.png'
const EventBanner = () => {
    return (
        <div className='flex relative my-20 md:flex-row flex-col  justify-start items-center gap-2 container mx-auto px-32 box-border py-16 bg-[#7949FA] rounded-md  text-white'>
            <img className='w-[36%] ' src={Group29} alt="" />
            <div>
                <p className='text-4xl font-semibold pt-2'>Host Your Event Easily & Autometdly With Us </p>
                <p className='text-lg font-normal'>We Provide The Best Event Tracking & ManageMent Solutions</p>
                <div className='flex justify-start items-center gap-2 py-2'>
                    <img src={check1} className='w-5' alt="" /> <p className='text-sm'>Host Yous Events Easy Steps</p>
                </div>
                <div className='flex justify-start items-center gap-2 py-2'>
                    <img src={check1} className='w-5' alt="" /> <p className='text-sm'>Automated Payment System Ticket Will be Sent To Email</p>
                </div>
                <div className='flex justify-start items-center gap-2 py-2'>
                    <img src={check1} className='w-5' alt="" /> <p className='text-sm'>Access TO Registration And Transaction Reports</p>
                </div>
                <div className='flex justify-start items-center gap-2 py-2'>
                    <img src={check1} className='w-5' alt="" /> <p className='text-sm'>SenD Bulk Personalize Email With Attachments</p>
                </div>
                
            </div>
            <img src={Group} className='absolute right-0 bottom-0' alt="" />
        </div>
    )
}

export default EventBanner
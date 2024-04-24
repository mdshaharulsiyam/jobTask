import click from '../../../assets/icon/click(1)1.png'
import click1 from '../../../assets/icon/click.png'
import check1 from '../../../assets/icon/check1.png'
import Vector from '../../../assets/icon/Vector-1.png'

const Scanner = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-5xl font-semibold pb-2 '>Automated QR Scanner</h2>
            <p className='text-lg font-normal text-center max-w-[480px] mx-auto py-3 pb-12 text-[#7342F9]'>Scan & Verify The Attendees Directly By Our QR Scanning Solution.</p>
            <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                <div className='bg-[#F1F3FF] p-8 box-border  rounded-2xl border'>
                    <div className='h-14 w-14 bg-white rounded-full p-3 flex justify-center items-center'>
                        <img src={click} alt="" />
                    </div>
                    <p className='text-[32px] font-bold py-2'>One Click</p>
                    <p>QR verification System</p>
                </div>
                <div className='bg-[#F1F3FF] p-8 box-border  rounded-2xl border'>
                    <div className='h-14 w-14 bg-white rounded-full p-3 flex justify-center items-center'>
                        <img src={click1} alt="" />
                    </div>
                    <p className='text-[32px] font-bold py-2'>One time</p>
                    <p>QR Code</p>
                </div>
                <div className='bg-[#F1F3FF] p-8 box-border  rounded-2xl border'>
                    <div className='h-14 w-14 bg-white rounded-full p-3 flex justify-center items-center'>
                        <img src={check1} alt="" />
                    </div>
                    <p className='text-[32px] font-bold py-2'>Easy Access</p>
                    <p>lorem ispum access</p>
                </div>
                <div className='bg-[#F1F3FF] p-8 box-border  rounded-2xl border'>
                    <div className='h-14 w-14 bg-white rounded-full p-3 flex justify-center items-center'>
                        <img  src={Vector} alt="" />
                    </div>
                    <p className='text-[32px] font-bold py-2'>mail</p>
                    <p>Send bulk personalized mail with attachments</p>
                </div>
            </div>
        </div>
    )
}

export default Scanner
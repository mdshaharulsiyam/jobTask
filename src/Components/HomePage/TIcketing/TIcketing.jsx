import shield from '../../../assets/icon/fi-sr-shield-check.png'
import AndroidLarge from '../../../assets/AndroidLarge-1.png'
import AndroidLarge2 from '../../../assets/AndroidLarge-1(1).png'
import Group9176 from '../../../assets/Group9176.png'

const TIcketing = () => {
    return (
        <div id='TIcketing' className='container mx-auto rounded-lg my-16'>
            <h2 className='text-center text-5xl font-semibold pb-2'>SIMPLIFY TICKETING</h2>
            <p className='text-lg font-normal text-center max-w-[350px] mx-auto pt-3 text-[#7342F9]'>First Ever Unique  QR Ticketing  Platform For Event Registration & Booking</p>
            <button className='flex justify-start items-center mx-auto  gap-2 text-white py-2 px-3 bg-[#7443F9] rounded-md'><img src={shield} alt="" /> Secure Payment with</button>
            <div className='flex justify-center items-end gap-0 pt-2'>
                <img className=" w-[33%]" src={AndroidLarge2} alt="" />
                <img className='-mx-24 z-40 w-[33%]' src={AndroidLarge} alt="" />
                <img className=" w-[33%]" src={Group9176} alt="" />
            </div>
        </div>
    )
}

export default TIcketing
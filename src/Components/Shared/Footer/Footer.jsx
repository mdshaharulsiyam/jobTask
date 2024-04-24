import Vector from '../../../assets/icon/Vector(1).png'
import Vector5 from '../../../assets/icon/Vector5.png'
import Maskgroup234 from '../../../assets/icon/Maskgroup234.png'
import Group234 from '../../../assets/icon/Group234.png'
import Group40 from '../../../assets/icon/Group40.png'
import image10 from '../../../assets/icon/image10.png'
import Layer11 from '../../../assets/icon/Layer11.png'

const Footer = () => {
    const navLinks = [
        { menu: 'Home', link: '#' },
        { menu: 'Events', link: '#' },
        { menu: 'About us', link: '#' },
        { menu: 'Contact', link: '#' },
    ]
    return (
        <footer id='foter' className='text-white'>
           <div className='container mx-auto'>
           <div className="footer p-10 px-0 bg-base-200 text-base-content bg-transparent">
                <aside>
                    <h3 className='text-3xl font-semibold text-white'>EventHost</h3>
                    <p className='text-white'>IDEA Project, ICT Tower (0th Floor),<br /> Plot: E-14X, Agargaon, Dhaka - 1207 <br />
                        02222-222222, 01111111111</p>
                </aside>
                <nav>
                    {navLinks.map((item, index) => <a className="link link-hover text-white" href='#'>{item?.menu}</a>)}
                </nav>
                <nav>
                    <p className='text-white'>
                        Event Dashboard <br />
                        Terms & Condition <br />
                        Privacy & Refund Policy
                    </p>
                </nav>
                <nav className="md:place-self-center md:justify-self-start">
                    <h3 className='text-white'>Follow Us</h3>
                    <div className="grid grid-flow-col gap-4 ">
                        <img src={Maskgroup234} alt="" />
                        <img src={Vector} alt="" />
                        <img src={Vector5} alt="" />
                        <img src={Group234} alt="" />
                    </div>
                </nav>

            </div>
            <div className="footer items-center justify-between px-0 p-4 bg-neutral text-neutral-content bg-transparent border-t-2">
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <span>pay with</span>
                    <img src={Group40} alt="" />
                    <img src={image10} alt="" />
                    <img src={Layer11} alt="" />
                </nav>
                <aside className="items-center grid-flow-col">
                    <p>©2023 TickHost & UVTR. All right reserved</p>
                </aside>
            </div>
           </div>
        </footer>
    )
}

export default Footer
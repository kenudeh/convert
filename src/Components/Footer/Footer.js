import {MdLocationOn} from 'react-icons/md';
import {BsFillTelephoneInboundFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoTwitter} from 'react-icons/bi';
import {BiLogoTelegram} from 'react-icons/bi';
import {BiLogoTiktok} from 'react-icons/bi';
import logo from '../../Images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <main className="Footer">
            <section className='footer1'>
                <section className='logo'>
                    <img src={logo} alt='brand logo'/>
                    <p>Seamless Transfers</p>
                </section>
                <section className='ourservices'>
                    <p><span>Our Services</span></p>
                    <ul>
                        <li>Airtime Conversion</li>
                        <li>Airtime Purchase</li>
                        <li>Data Purchase</li>
                        <li>Bill Payment</li>
                    </ul>
                </section>
                <section className='explore'>
                    <p><span>Explore</span></p>
                    <ul>
                        <li>How it works</li>
                        <li>FAQs</li>
                        <li>Blog</li>
                        <li>Partnership</li>
                    </ul>
                </section>
                <section className='letstalk'>
                    <span>Let's Talk</span>
                    <p>Get in touch with our support team</p>
                    <button>CONTACT US</button>
                </section>
            </section>

            <section className='footer2'>
                    <section className='location'>
                      <MdLocationOn style={{color:'white', height:'2rem', width:'4rem'}}/>
                        <div className='wrap'>
                            <span>Address</span>
                            <p>43 Arthur Eze Avenue, Awka,</p>
                            <p>Anambra State</p>
                        </div>
                    </section>
                    <section className='phone'>
                        <BsFillTelephoneInboundFill style={{color:'white', height:'1.5rem', width:'3rem'}}/>
                        <div className='wrap'>
                            <span>Phone</span>
                            <p>081 596 7890</p>
                            <p>081 904 7890</p>
                        </div>
                    </section>
                    <section className='email'>
                        <div><AiOutlineMail style={{color:'white', height:'2rem', width:'4rem'}}/></div>
                        <div className='wrap'>
                            <span>Email</span>
                            <p>hello@convert.com.ng</p>
                        </div>
                    </section>
                    <section className='socialmedia'>
                        <span>We're Social</span>
                        <div className='wrap'>
                            <div><BiLogoFacebook style={{color:'white', height:'1.2rem', width:'1.2rem', cursor:'pointer'}}/></div>
                            <div><BiLogoTwitter style={{color:'white', height:'1.2rem', width:'1.2rem', cursor:'pointer'}}/></div>
                            <div><BiLogoTiktok style={{color:'white', height:'1.2rem', width:'1.2rem', cursor:'pointer'}}/></div>
                            <div><BiLogoTelegram style={{color:'white', height:'1.2rem', width:'1.2rem', cursor:'pointer'}}/></div>
                        </div>
                    </section>
                   
            </section>
            <hr/>
            <section className='footer3'>
                <div className='privacy'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <p>copyright &copy; 2025 IdeasRocket</p>
            </section>
        </main>
    )
}
 
export default Footer;
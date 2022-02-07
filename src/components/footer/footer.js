import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
import Facebook from '../assets/icons/facebook.png';
import Instagram from '../assets/icons/instagram.png';
import Twitter from '../assets/icons/twitter.png';
// import Tiktok from '../assets/icons/icons8-tiktok.svg';
import Logo from '../assets/icons/logo.jpg';


let Footer = ()=>{
 return <div id='ft'>
            <div id='logo-container'>
                <div  id='ftlogo'>
                    <img src={Logo} alt='logo' id='logo'></img>
                </div>
            
            </div>
             <div id='mainft'>
                <div className='ft1'>
                    <h2 className='hh sh'>SHOP</h2>
                    <li> <Link to='/shop' className='ftl'>Shop</Link></li>
                   </div>
                <div className='ft1'>
                <h2 className='hh res'>RESOURCES</h2>
                    <li> <Link to='/learn' className='ftl'>How to use</Link></li>
                    <li> <a href='/' className='ftl'>Size Guide</a></li>
                    <li> <a href='/' className='ftl'>FAQs</a></li>
                    <li> <a href='/' className='ftl'>Why Periodt</a></li>
                </div>
                <div className='ft1'>
                <h2 className='hh help'>HELPFUL</h2>
                    <li> <Link to='/contact' className='ftl'>Contact</Link></li>
                    <li> <a href='/' className='ftl'>Delivery terms</a></li>
                    <li> <Link to='/blog' className='ftl'>Blog</Link></li>
                </div>
        </div>
        <div id='social'>
            
            <div className='socialIcons' >
                <img src={Facebook} alt='pic one' className='imgIcon'/>
            </div>
            <div className='socialIcons'>
                <img src={Instagram} alt='pic two' className='imgIcon'/>
            </div>
            <div className='socialIcons'>
                <img src={Twitter} alt='pic three' className='imgIcon'/>
            </div>
            <div className='socialIcons'>
                {/* <img src={Tiktok} alt='pic three' className='imgIcon'/> */}
            </div>
        </div>
        
    </div>
};

export default Footer;
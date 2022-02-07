import React from 'react';
import { Link} from 'react-router-dom';



import './head.css';

let Header = ()=>{
return  (
            <div>
                <header id='hh'>
                        
                    <div id='hh1'>
                        <h2><Link to="/">Home</Link></h2>
                    </div>
                    <div id='hh2'>
                            <li className='lii'> <Link to='/learn'>Learn</Link> </li>
                            <li className='lii'> <Link to='/sizequiz'>Size Quiz</Link> </li>
                            <li className='lii'> <Link to='/blog'>Blog</Link> </li>
                            <li className='lii'> <Link to='/contact'>Contact</Link> </li>
                            <li className='lii shop'> <Link to='/shop'>Shop </Link> </li>
                    </div>
                </header>  
            </div> 
        )
    
};


export default Header;
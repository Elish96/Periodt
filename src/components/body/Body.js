import React from 'react';
import Cards  from './cards';
import './Body.css';
import Shop from './Shop';
import Blog from './Blog';


let Body = ()=>{
    return <div id='bd'>
        <div id='bd1'>
       
        </div>
        <div>
            <p>
                <h2>Headddd twoooo</h2>
                    <Shop/>
                    <Cards/>
                    <Blog/>
            </p>
        </div>

    </div>
};

export default Body;
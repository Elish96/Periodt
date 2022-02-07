import React from 'react';
import './Blog.css';
import {Link} from 'react-router-dom';
import blog from '../assets/Images/blog.jpg';
import blog1 from '../assets/Images/blog1.jpg';
import blog2 from '../assets/Images/blog2.jpg';
import blog3 from '../assets/Images/blog3.jpg';
import blog4 from '../assets/Images/blog4.jpg';
import blog5 from '../assets/Images/blog5.jpg';

const Blog= ()=>{
    return(
        <div id='blog-main'>
            <div id='blogpic'><h1 id='fh'> Our Blog Posts</h1> 
             <p>efjfnwrefonrwfv</p>
            </div>
            <div className='blogpiece'>
                <div className='piece'>
                    <div className='picontainer'>
                         <img src={blog} alt='' className='bimg'/>
                    </div>
                    <div className='blg'>
                       <h1>Talk here</h1>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <Link to='/blogone' className='read'>Read More</Link>
                    </div>
                </div>
                <div className='piece'>
                    <div className='picontainer'>
                    <img src={blog1} alt='' className='bimg'/>
                    </div>
                <div className='blg'>
                        <h1>Talk</h1>
                        <p> fnuren firmvrmovim kd f</p>                        
                        <p> fnuren firmvrmovim kd f</p>                        
                        <p> fnuren firmvrmovim kd f</p>                        
                        <p> fnuren firmvrmovim kd f</p>                        
                        <Link to='/blogtwo' className='read'>Read More</Link>
                    </div>
                </div>
               
            </div>
            <div className='blogpiece'>
                <div className='piece'>
                    <div className='picontainer'>
                    <img src={blog2} alt='' className='bimg'/>
                       
                    </div>
                <div className='blg'>
                        <h1>Talk</h1>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <Link to='/blogthree' className='read'>Read More</Link>
                    </div>
                </div>
                <div className='piece'>
                    <div className='picontainer'>
                         <img src={blog3} alt='' className='bimg'/>
                       
                    </div>
                <div className='blg'>
                        <h1>Talk</h1>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <Link to='/blogfour' className='read'>Read More</Link>
                    </div>
                </div>
               
            </div>
            <div className='blogpiece'>
                <div className='piece'>
                    <div className='picontainer'>
                        <img src={blog4} alt='' className='bimg'/>
                       
                    </div>
                    <div className='blg'>
                        <h1>Talk</h1>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <Link to='/blogfive' className='read'>Read More</Link>
                    </div>
                </div>
                <div className='piece'>
                    <div className='picontainer'>
                          <img src={blog5} alt='' className='bimg'/>
                    </div>
                <div className='blg'>
                        <h1>Talk</h1>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <p> fnuren firmvrmovim kd f</p>
                        <Link to='/blogsix' className='read'>Read More</Link>
                        
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Blog;
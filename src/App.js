import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Head from "../src/components/header/head";
import Shop from '../src/components/body/Shop';
import Footer from '../src/components/footer/footer';
import Contact from '../src/components/body/Contact'
import Blog from "../src/components/body/Blog";
import SizeQuiz from '../src/components/body/SizeQuiz';
import Learn from '../src/components/body/Learn';
import NewSlider from "./components/body/NewSlider";
import Home from "./components/pages/Home";
import BlogOne from './components/pages/BlogOne';
import BlogTwo from './components/pages/BlogTwo';
import BlogThree from './components/pages/BlogThree';
import BlogFour from './components/pages/BlogFour';
import BlogFive from './components/pages/BlogFive';
import BlogSix from './components/pages/BlogSix';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Head />
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/sizequiz" element={<SizeQuiz/>}/>
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/shop" element={<Shop/>}/>
              {/* Routing a nested route */}
              <Route path='/blogone' element={<BlogOne to="/blog" />} />
              <Route path='/blogtwo' element={<BlogTwo/>} />
              <Route path='/blogthree' element={<BlogThree/>} />
              <Route path='/blogfour' element={<BlogFour/>} />
              <Route path='/blogfive' element={<BlogFive/>} />
              <Route path='/blogsix' element={<BlogSix/>} />

      </Routes>
          
           {/* <NewSlider/> */}
          {/* <Slides/> */}
          
          <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

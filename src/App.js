import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/Errors/NotFound';
import AmateurVideoPage from './components/Home/Resources/Categories/Amateur';
import Navbar from './components/Home/Resources/NavBar';
import Footer from './components/Home/Resources/Footer';
import Tranding from './components/Home/Resources/Categories/Tranding';
import HdVideos from './components/Home/Resources/Categories/Hd-Videos';
import Milf from './components/Home/Resources/Categories/Milf';
import Teen from './components/Home/Resources/Categories/Teen';
import Asian from './components/Home/Resources/Categories/Asian';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
         <Route path="/trending" element={<Tranding/>} />
        <Route path="/category/amateur" element={<AmateurVideoPage/>} />
        <Route path="/category/hd-videos" element={<HdVideos />} />
        <Route path="/category/milf" element={<Milf/>}/>
        <Route path="/category/teen" element={<Teen/>}/>
        <Route path="/category/asian" element={<Asian/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

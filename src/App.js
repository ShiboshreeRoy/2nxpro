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
import AnalVideo from './components/Home/Resources/Categories/Anal-Video';
import BigTits from './components/Home/Resources/Categories/Big-Tits';
import Ebony from './components/Home/Resources/Categories/Ebony';
import BlowJob from './components/Home/Resources/Categories/BlowJob';
import Premium from './components/Home/Resources/Categories/Premium';
import Threesome from './components/Home/Resources/Categories/Threesome';
import Lesbian from './components/Home/Resources/Categories/Lesbian';
import Hardcore from './components/Home/Resources/Categories/Hardcore';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import Terms from './components/Legal/Terms';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Tranding />} />
        <Route path="/premium" element={<Premium/>}/>
        <Route path="/category/amateur" element={<AmateurVideoPage />} />
        <Route path="/category/hd-videos" element={<HdVideos />} />
        <Route path="/category/milf" element={<Milf />} />
        <Route path="/category/teen" element={<Teen />} />
        <Route path="/category/asian" element={<Asian />} />
        <Route path="/category/anal-videos" element={<AnalVideo />} />
        <Route path="/category/big-tits" element={<BigTits/>}/>
        <Route path="/category/ebony" element={<Ebony/>}/>
        <Route path="/category/blowjob" element={<BlowJob/>}/>
        <Route path="/category/threesome" element={<Threesome/>}/>
        <Route path="/category/lesbian" element={<Lesbian/>}/>
        <Route path="/category/hardcore" element={<Hardcore/>}/>
        <Route path="/Legal/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/Legal/terms" element={<Terms/>}/>


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

import { lazy, useEffect, } from 'react'
import { Suspense } from 'react'
import PropTypes from 'prop-types';
import Lenis from 'lenis';
import './App.css';
import "./Styles/button.css";
import "../src/Styles/Loader.css";
const HomePage = lazy(() => import('./Pages/HomePage'))
const Stages = lazy(() => import('./Pages/Stages'))
const Presale = lazy(() => import('./Pages/Presale'))
const KeyNote = lazy(() => import('./Pages/KeyNote'))
// import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Headroom from 'react-headroom'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Model from './Components/Model';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermAndCondition from './Pages/TermAndCondition';
import SocialMedia from './Components/SocialMedia';



const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

    <main id="container">
      <div className="dots">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="dots2">
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
      </div>
      {/* <div className="circle" /> */}
    </main>

  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout = ({ children }) => {

  // useEffect(() => {
    // const lenis = new Lenis({
      // infinite:true,

      // easing: (t) => t < 0.5
      //   ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
      //   : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
      // orientation: "horizontal",
      // gestureOrientation: "horizontal",
      // autoResize	:true,
      // smoothWheel: true,
      // lerp	:10,
      // duration:1.5,

    // })

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    // function raf(time) {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }

    // requestAnimationFrame(raf)

  // }, []);

  return (
    <div className=''>
      <Suspense fallback={<Loader />}>
        <Headroom>
          <Navbar />
        </Headroom>

        <SocialMedia />
        {children}
        <Model />


        <Footer />
      </Suspense>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {



  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 2000,
      once: false,
    });
  }, []);




  return (
    <div id='app_container'>


      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<MainLayout> <HomePage />  </MainLayout>} />
          <Route path="/l" element={<MainLayout>  <Loader />  </MainLayout>} />
          <Route path="/Stages" element={<MainLayout>  <Stages />  </MainLayout>} />
          <Route path="/Presale" element={<MainLayout>  <Presale />  </MainLayout>} />
          <Route path="/Keynote" element={<MainLayout>  <KeyNote />  </MainLayout>} />
          <Route path="/Privacy-Policy" element={<MainLayout>  <PrivacyPolicy />  </MainLayout>} />
          <Route path="/Term-and-Condition" element={<MainLayout>  <TermAndCondition />  </MainLayout>} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App

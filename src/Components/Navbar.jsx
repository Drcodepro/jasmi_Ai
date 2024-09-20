import { useEffect, useState } from 'react';
import logo from "../assets/logo/logo-main.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';

import btnangle from "../assets/images/btnAngle.png"
import GoogleTranslate from '../Components/GoogleTranslate';
// import logo from "../assets/voip_logo (1)/voip_logo.webp"
// import { Link } from "react-router-dom"

const Navbar = () => {

    const [isScrolled, setisScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const closeMenu = () => {
        setIsNavVisible(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: Smooth scrolling animation
        });

    };




    const location = useLocation();
    const navigate = useNavigate();
    const BuyBtnText = location.pathname === '/Presale' ? 'Back' : 'Buy Token';
    const handleButtonClick = () => {
        if (location.pathname === "/Presale") {
            navigate(-1);
        }
        else {
            navigate("/Presale");
        }
    }
    return (

        <>

            <nav
                className={`${isScrolled ? 'bg-[#000000ab] backdrop-blur-lg ' : 'bg-transparent'
                    } w-full z-10 overflow-x-hidden   top-0 start-0 border-b border-none dark:border-gray-600 2xl:h-[10vh] `}
            >
                <div className=" relative max-w-full  h-full  flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8 2xl:px-[2.1vw] ">


                    <a href="/" onClick={closeMenu}>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img loading="lazy" src={logo} className=' w-[9rem] phone:w-[7rem]  h-auto  2xl:w-[9.2vw] ' alt="logo" />
                            {/* <h1 className=' text-4xl font-bold font-outfit  text-primary-gradient phone:text-xl 2xl:text-[2.4vw] ' >Logo</h1> */}
                        </div>
                    </a>


                    <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {/* <Link   to="/Presale"
                            className=" transform hover:scale-[1.05] hover:bg-[#4060ff67]  rounded-full flex items-center   border-2  px-5 py-2      oxanium text-white   font-medium phone:font-light    text-sm first-line  phone:h-[40px] 
                            2xl:text-[1vw] 2xl:py-[1vh] 2xl:h-[5vh] 2xl:px-[1.4vw]  2xl:border-[.15vw]  ">
                            Buy Token  →
                        </Link> */}
                        {/* <button onClick={handleButtonClick} >
                            <div id='btng' className=" transform duration-200 hover:scale-[0.95] relative rounded-sm 2xl:rounded-[0.3vw] bg-gray-500 px-7 phone:px-4 phone:py-[0.4rem] phone:my-2 py-[0.5rem]  2xl:px-[2.3vw]  2xl:py-[0.8vw] ">
                                <img src={btnangle} className=" z-[-1] w-[3.5rem] absolute top-[-0.3rem]   right-[-0.6rem]   2xl:top-[-0.4vw] 2xl:right-[-0.6vw]  2xl:w-[3.4vw]  " alt="" />

                                <p className=" text-sm 2xl:text-[1vw] h-full z-[0] " > {BuyBtnText} </p>
                                <img src={btnangle} className=" z-[-1] w-[3.5rem] absolute bottom-[-0.3rem]  left-[-0.6rem] rotate-180 2xl:bottom-[-0.4vw] 2xl:left-[-0.6vw]  2xl:w-[3.4vw] " alt="" />
                            </div>

                        </button> */}
                        <a href='https://t.me/jasmyAiadmin'  target='blank'  >
                            <div id='btng' className=" transform duration-200 hover:scale-[0.95] relative rounded-sm 2xl:rounded-[0.3vw] bg-gray-500 px-7 phone:px-4 phone:py-[0.4rem] phone:my-2 py-[0.5rem]  2xl:px-[2.3vw]  2xl:py-[0.8vw] ">
                                <img src={btnangle} className=" z-[-1] w-[3.5rem] absolute top-[-0.3rem]   right-[-0.6rem]   2xl:top-[-0.4vw] 2xl:right-[-0.6vw]  2xl:w-[3.4vw]  " alt="" />

                                <p className=" text-sm 2xl:text-[1vw] h-full z-[0] " >Join Now </p>
                                <img src={btnangle} className=" z-[-1] w-[3.5rem] absolute bottom-[-0.3rem]  left-[-0.6rem] rotate-180 2xl:bottom-[-0.4vw] 2xl:left-[-0.6vw]  2xl:w-[3.4vw] " alt="" />
                            </div>

                        </a>



                        <button
                            onClick={toggleNav}
                            type="button"
                            className="  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-100 bg-gray-900 border border-[--primary-color] rounded-lg md:hidden   focus:outline-none focus:ring-2 focus:ring-[--prime-color]   ring-[--prime-color]  hover:bg-gray-900  "
                            aria-controls="navbar-sticky1"
                            aria-expanded={isNavVisible}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns=" "
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>


                    <div
                        id="navbar-sticky1"
                        className={`items-center  justify-between  w-full md:flex md:w-auto md:order-1 ${isNavVisible ? 'block  ' : 'hidden'
                            }`}
                    >
                        <ul className="   navcar  flex    flex-col p-4   md:py-1.5   mt-4 font-medium border border-[--primary-color]  md:rounded-[50px] rounded-lg   md:space-x-[3vmax] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   text-white tablet:bg-gray-900    ">

                            <li className='md:border-none border-b-[1px]  border-gradient '>
                                <Link to="/" onClick={closeMenu}>
                                    <p className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0  dark:border-gray-700 hover:text-[#a7acff] font-outfit  2xl:text-[1vw]  ">Home</p>
                                </Link>
                            </li>

                            {/* <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=usecase" onClick={closeMenu}  >
                                    <p className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#a7acff] font-outfit 2xl:text-[1vw] ">Usecase</p>
                                </Link>
                            </li> */}

                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=Tokenomics" onClick={closeMenu}>
                                    <p className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#a7acff] font-outfit 2xl:text-[1vw] ">Tokenomics</p>
                                </Link>
                            </li>
                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=Roadmap_" onClick={closeMenu}>
                                    <p className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#a7acff] font-outfit 2xl:text-[1vw] ">Roadmap</p>
                                </Link>
                            </li>
                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/Stages" onClick={closeMenu}>
                                    <p className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#a7acff] font-outfit 2xl:text-[1vw] ">Stages</p>
                                </Link>
                            </li>
                            {/* <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/Presale" onClick={closeMenu}>
                                    <p className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#a7acff] font-outfit 2xl:text-[1vw] ">Presale</p>
                                </Link>
                            </li> */}
                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/Keynote" onClick={closeMenu}>
                                    <p className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#a7acff] font-outfit 2xl:text-[1vw] ">Keynote</p>
                                </Link>
                            </li>
                            <li className='md:border-none border-b-[1px] border-gradient '>
                            </li>




                        </ul>

                    </div>


                </div>
            </nav>

            <div className=' ' >
                <GoogleTranslate />
            </div>









        </>
    )
}

export default Navbar
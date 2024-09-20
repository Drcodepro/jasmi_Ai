
import logo from "../assets/logo/logo-main.png"
import youtube from "../assets/socialmedia/YouTube.png"
import twiter from "../assets/socialmedia/Twitter.png"
import Telegram from "../assets/socialmedia/Telegram App.png"
import Instagram from "../assets/socialmedia/Instagram.png"
import Medium from "../assets/socialmedia/Medium.png"
import { Link } from "react-router-dom"
// import {Link} from "react-router-dom"

const Footer = () => {
    
    const openPDF = () => {
        window.open("https://jasmyai.io/whitepaper.pdf", "_blank");
    };

    return (
        <>
            <footer className="  bg-[#101010] z-10  rounded-t-2xl ">
                <div className=" px-20 phone:px-5 w-full max-w-screen p-4 py-6 lg:py-8 z-10 2xl:px-[5vw] ">
                    <div className="md:flex md:justify-between tablet:justify-center z-10">

                        <div className=" flex  flex-col gap-5 mb-6 max-w-[40%] tablet:max-w-[100%] tablet:items-center  md:mb-0">
                            <a href="" className="flex items-center">
                                <img src={logo} className="h-[50px]  me-3 2xl:h-[3vw] " alt="Logo" />
                                {/* <span className="self-center text-primary-gradient text-4xl font-bold whitespace-nowrap  text-white">Logo  </span> */}
                            </a>
                            <p className=" tablet:text-center text-white  2xl:text-[1.05vw] " > Stay updated with the latest developments by following us on social media and joining our community. For inquiries or support, reach out to our team via email.</p>
                            <div className="flex gap-5" >
                                <a target="blank" href="https://www.youtube.com/@JasmyAi "> <img className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={youtube} alt="" /> </a>
                                <a target="blank" href="https://x.com/jasmy_ai "> <img className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={twiter} alt="" /> </a>
                                <a target="blank" href="https://t.me/jasmyAiadmin "> <img className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={Telegram} alt="" /> </a>
                                <a target="blank" href=" https://www.instagram.com/jasmy_ai/?hl=en"> <img className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={Instagram} alt="" /> </a>
                                <a target="blank" href=" https://www.facebook.com/profile.php?id=61565207706922"> <img className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={Medium} alt="" />  </a>

                            </div>
                        </div>
                        <div className=" mt-16 mt- flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap z-10">
                            <div className=" flex flex-col tablet:items-center " >
                                <h2 className=" text-primary-gradient mb-6 text-sm 2xl:text-[1vw] font-semibold   uppercase text-white">Resources</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center  ">
                                        <a href="#Hero" className="unline  hover:underline 2xl:text-[1vw] " >Home</a>
                                    </li>
                                    <li className="  tablet:text-center  " >
                                        <a href="#About" className="hover:underline 2xl:text-[1vw]">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm 2xl:text-[1vw] font-semibold  uppercase text-white">Importent</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <button onClick={openPDF}   className="hover:underline 2xl:text-[1vw] ">White Paper</button>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <Link to="/Presale" className="hover:underline 2xl:text-[1vw]">Buy Now</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm 2xl:text-[1vw] font-semibold   uppercase text-white">Legal</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <Link to="/Privacy-Policy" className="hover:underline 2xl:text-[1vw]">Privacy Policy</Link>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <Link to="/Term-and-Condition" className="hover:underline 2xl:text-[1vw]">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  border-gradient sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm 2xl:text-[1vw]   sm:text-center  text-gray-400">© 2024 <a href="" className="hover:underline 2xl:text-[1vw]">Jasmy AI</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
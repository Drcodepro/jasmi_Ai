import heroVideo from "../../assets/images/jasmiheroVideo.mp4"
import heroImg from "../../assets/images/hero-bg-img.png"
// import exchanges from "../../assets/images/exchanges.png"
import ex1 from "../../assets/icons/e3.png"
import ex2 from "../../assets/icons/e2.png"
import ex3 from "../../assets/icons/e6.png"
import ex4 from "../../assets/icons/e8.png"
import ex5 from "../../assets/icons/e5.png"


import Btn from "../Btn"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const openPDF = () => {
    window.open("https://jasmyai.io/whitepaper.pdf", "_blank");
};



const S1Hero = () => {

    const [timer, setTimer] = useState("");
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    useEffect(() => {
        const interval = setInterval(() => {
            const endDate = new Date("2024-09-20T06:30:00Z"); // Set your airdrop date here
            const now = new Date();
            const distance = endDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimer("Airdrop Launched Hurry Up");
                setDays("00");
                setHours("00");
                setMinutes("00");
                setSeconds("00");
                return;
            }

            const formatTime = (time) => (time < 10 ? `0${time}` : time);

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(formatTime(days));
            setHours(formatTime(hours));
            setMinutes(formatTime(minutes));
            setSeconds(formatTime(seconds));

            setTimer(`${formatTime(days)}d ${formatTime(hours)}h ${formatTime(minutes)}m ${formatTime(seconds)}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // timer end

    return (
        <>
            <div id="Hero" className=" relative   min-h-[110vh] " >
                <video autoPlay muted loop className="w-screen absolute left-0 top-0 h-full  object-cover flex   z-[-1] max-[900px]:h-[210%] max-[500px]:h-[240%] opacity-[1] " >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <img src={heroImg} className="w-screen absolute left-0 top-0 h-full  object-cover flex   z-[-1] max-[900px]:h-[210%] max-[500px]:h-[240%]  " alt="" />

                <div className="min-h-[100vh]  phone:mt-[-5rem] flex gap-5  px-5 phone:px-2 flex-col justify-center items-center  2xl:gap-[3vh] " >
                    <div className="Sregular w-fit text-white  rounded-lg  ">
                        <div className=" flex-col  gap-3   flex items-center  ">

                            <p className=" p-1   rounded-xl px-2 uppercase  Sregular text-2xl 2xl:text-[1.5vw] phone:text-xl " > Airdrop Launching </p>

                            <div className="flex  gap-5">

                                <div className=" border-2 flex flex-col justify-between items-center border-gray-400     rounded-xl overflow-hidden w-[4rem] phone:w-[3.2rem]  glassmorphism   " >
                                    <p className=" text-3xl phone:text-xl   py-3 px-2 tracking-widest " >
                                        {days}
                                    </p>
                                    <p className="btng flex justify-center items-center text-white uppercase h-[20px]   text-[12px] phone:text-[10px]  w-full">
                                        Days
                                    </p>
                                </div>
                                <div className=" border-2 flex flex-col items-center border-gray-400  justify-between   rounded-xl overflow-hidden w-[4rem] phone:w-[3.2rem]  glassmorphism   " >
                                    <p className="  text-3xl phone:text-xl  py-3 px-2 tracking-widest " >
                                        {hours}
                                    </p>
                                    <p className="btng flex justify-center items-center text-white uppercase h-[20px] bg-gray-200 text-[12px] phone:text-[10px]  w-full">
                                        hours
                                    </p>
                                </div>
                                <div className=" border-2 flex flex-col items-center border-gray-400   justify-between  rounded-xl overflow-hidden w-[4rem] phone:w-[3.2rem]  glassmorphism   " >
                                    <p className=" text-3xl phone:text-xl   py-3 px-2 tracking-widest " >
                                        {minutes}
                                    </p>
                                    <p className="btng flex justify-center items-center text-white uppercase h-[20px] bg-gray-200 text-[12px] phone:text-[10px]  w-full">
                                        minutes
                                    </p>
                                </div>

                                <div className=" border-2 flex flex-col justify-between items-center border-gray-400     rounded-xl overflow-hidden w-[4rem] phone:w-[3.2rem]  glassmorphism   " >
                                    <p className=" text-3xl phone:text-xl   py-3 px-2 tracking-widest " >
                                        {seconds}
                                    </p>
                                    <p className="btng flex justify-center items-center text-white uppercase h-[20px]   bg-gray-200 text-[12px] phone:text-[10px]  w-full">
                                        seconds
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 data-aos="zoom-in" className="max-w-[55rem] text-5xl text-center leading-tight phone:text-3xl  2xl:text-[3.7vw]  2xl:max-w-[65vw]" >Revolutionizing Digital Infrastructure With DePin & DSMIN Technology</h1>

                    <p data-aos="zoom-in-up" className=" max-w-[55rem] leading-tight text-center text-base 2xl:text-[1vw] 2xl:max-w-[55vw] " >Welcome to JASMY AI TOKEN, where innovation meets decentralization. Our mission is to revolutionize the way we interact with digital infrastructure through a robust and scalable decentralized ecosystem.  </p>

                    <div data-aos="fade-up" className="flex gap-10 2xl:gap-[2.5vw]" >


                        <a href="https://t.me/jasmyAiadmin"  target="blank" >
                            <Btn >Join Now</Btn>
                        </a>

                        <button onClick={openPDF} >
                            <Btn>White Paper</Btn>
                        </button>
                    </div>
                </div>

                <div className=" px-5  flex   left-0 bottom-0 bg-gradient-to-t from-[#000000] via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-[100%]  min-h-[20vh]  bottom-0 z-3">
                    <div data-aos="fade-up" className="w-full flex gap-5 justify-evenly items-center  flex-wrap phone:gap-5 min-h-auto ">

                        <div className=" w-auto h-10 tablet:h-7  2xl:h-[2.6vw] ">
                            <img className="h-full w-auto" src={ex1} alt="" />
                        </div>
                        <div className=" w-auto h-10 tablet:h-7  2xl:h-[2.6vw] ">
                            <img className="h-full w-auto" src={ex2} alt="" />
                        </div>
                        <div className=" w-auto h-10 tablet:h-7  2xl:h-[2.6vw] ">
                            <img className="h-full w-auto" src={ex3} alt="" />
                        </div>
                        <div className=" w-auto h-10 tablet:h-7  2xl:h-[2.6vw] ">
                            <img className="h-full w-auto" src={ex4} alt="" />
                        </div>
                        <div className=" w-auto h-10 tablet:h-7  2xl:h-[2.6vw] ">
                            <img className="h-full w-auto" src={ex5} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default S1Hero
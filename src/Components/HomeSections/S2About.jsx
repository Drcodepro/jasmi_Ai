
import cube from "../../assets/logo/coin.png";
const S2About = () => {
    return (
        <>
            <div id='About' className='' >
                <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-[#000000] via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-[100%] h-[10vh]  bottom-0 z-3" />
                <div className="   flex flex-col  gap-10 py-20 px-10 phone:px-3 phone:pt-11 phone:pb-0  2xl:py-[5vw] 2xl:gap-[4vw] ">
                    <div className="flex justify-center items-center text-center flex-col gap-5 2xl:gap-[1.6vw] ">
                        <h1 data-aos="fade-up" className='text-gradient text-5xl w-fit phone:text-4xl 2xl:text-[3.2vw] ' >Why Choose Jasmy AI?</h1>
                        <p data-aos="fade-up" className="text-3xl phone:text-2xl 2xl:text-[1.95vw] ">About Jasmy AI Empowering Digital Transformation</p>
                    </div>

                    <div className="flex tablet:flex-col justify-center items-center gap-5">
                        <div className="w-[70%] flex-col gap-5 2xl:gap-[1.3vw] tablet:w-[90%] flex justify-center items-center ">
                            <div className=" flex flex-col gap-5">


                                <p data-aos="zoom-in-right" className=" max-w-[45rem] leading-tight font-thin text-xl tablet:text-center phone:text-sm 2xl:max-w-[48vw] text-gray-300   2xl:text-[1.3vw]">
                                    <b className="font-bold text-white" >Decentralized Data Management:</b>   Secure, transparent, and user-controlled data storage.

                                </p>
                                <p data-aos="zoom-in-right" className=" max-w-[45rem] leading-tight font-thin text-xl tablet:text-center phone:text-sm 2xl:max-w-[48vw] text-gray-300  2xl:text-[1.3vw]">
                                    <b className="font-bold text-white " >AI-Driven Insights:</b>    Unlock hidden patterns and opportunities with advanced analytics.

                                </p>
                                <p data-aos="zoom-in-right" className=" max-w-[45rem] leading-tight font-thin text-xl tablet:text-center phone:text-sm 2xl:max-w-[48vw] text-gray-300  2xl:text-[1.3vw]">
                                    <b className="font-bold text-white " >Automated Decision-Making:</b>     Streamline processes with intelligent, data-driven decision-making.

                                </p>
                                <p data-aos="zoom-in-right" className=" max-w-[45rem] leading-tight font-thin text-xl tablet:text-center phone:text-sm 2xl:max-w-[48vw] text-gray-300  2xl:text-[1.3vw]">
                                    <b className="font-bold text-white " >Scalable Solutions:</b>     Future-proof infrastructure for seamless growth and expansion.

                                </p>
                                <p data-aos="zoom-in-right" className=" max-w-[45rem] leading-tight font-thin text-xl tablet:text-center phone:text-sm 2xl:max-w-[48vw] text-gray-300  2xl:text-[1.3vw]">
                                    <b className="font-bold text-white " >Community-Driven:</b>     Collaborative ecosystem fostering innovation and knowledge sharing.

                                </p>
                            </div>
                        </div>
                        <div className="w-[30%] flex tablet:justify-center items-center tablet:w-[100%]">
                            <img data-aos="zoom-in" src={cube} className='  tablet:w-[18rem] w-[19rem] 2xl:w-[19vw] ' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default S2About
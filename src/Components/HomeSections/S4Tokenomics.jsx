import React from 'react'
import tokoimg from "../../assets/images/TokenomicsImg.png"
const S4Tokenomics = () => {
    return (
        <>
            <div id='Tokenomics' className='  ' >

                <div className="   flex flex-col  gap-20 py-20 w-full 2xl:py-[5vw] 2xl:gap-[5vw]  ">

                    <div className="flex justify-center items-center text-center flex-col gap-5 2xl:gap-[1.6vw] ">
                        <h1 data-aos="fade-up" className='text-gradient text-5xl w-fit phone:text-4xl 2xl:text-[3.2vw] ' >Tokenomics</h1>
                        <p data-aos="fade-up" className="text-3xl phone:text-2xl 2xl:text-[1.95vw] capitalize ">model is designed to ensure sustainable growth</p>
                    </div>

                    <div className="w-full flex justify-center ">
                        <img data-aos="zoom-in" className=' 2xl:w-[66vw] ' src={tokoimg} alt="" />
                    </div>

                    <div className="flex  justify-center items-center  ">

                        <div className="justify-center gap-5 items-center flex flex-wrap max-w-[70rem]   2xl:gap-[1.4vw] 2xl:max-w-[70vw] ">

                            <div  className="tokoclip w-[20rem] phone:w-[18rem]  bg-[#010075] py-[0.1rem] px-[0.1rem] text-xl tablet:text-base  2xl:w-[21vw] 2xl:px-[0.1vw] 2xl:[0.1vw] 2xl:text-[1.4vw] ">
                                <div className="tokoclip bg-black py-5 px-6 2xl:py-[1.3vw] 2xl:px-[1.5vw] ">

                                    <div data-aos="fade-zoom-in" className="flex justify-between">
                                        <p className=""> Token </p>
                                        <p className=""> Jasmy AI Token </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tokoclip w-[20rem] phone:w-[18rem] bg-[#010075] py-[0.1rem] px-[0.1rem] text-xl tablet:text-base  2xl:w-[21vw] 2xl:px-[0.1vw] 2xl:[0.1vw] 2xl:text-[1.4vw] ">
                                <div className="tokoclip bg-black py-5 px-6 2xl:py-[1.3vw] 2xl:px-[1.5vw] ">

                                    <div data-aos="fade-zoom-in" className="flex justify-between">
                                        <p className=""> Network </p>
                                        <p className=""> BEP-20 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tokoclip w-[20rem] phone:w-[18rem] bg-[#010075] py-[0.1rem] px-[0.1rem] text-xl tablet:text-base  2xl:w-[21vw] 2xl:px-[0.1vw] 2xl:[0.1vw] 2xl:text-[1.4vw] ">
                                <div className="tokoclip bg-black py-5 px-6 2xl:py-[1.3vw] 2xl:px-[1.5vw] ">

                                    <div data-aos="fade-zoom-in" className="flex justify-between">
                                        <p className=""> Total Supply </p>
                                        <p className=""> 50 Billion </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tokoclip w-[20rem] phone:w-[18rem] bg-[#010075] py-[0.1rem] px-[0.1rem] text-xl tablet:text-base  2xl:w-[21vw] 2xl:px-[0.1vw] 2xl:[0.1vw] 2xl:text-[1.4vw] ">
                                <div className="tokoclip bg-black py-5 px-6 2xl:py-[1.3vw] 2xl:px-[1.5vw] ">

                                    <div data-aos="fade-zoom-in" className="flex justify-between">
                                        <p className=""> Decimal </p>
                                        <p className=""> 18 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tokoclip w-[20rem] phone:w-[18rem] bg-[#010075] py-[0.1rem] px-[0.1rem] text-xl tablet:text-base   2xl:w-[21vw] 2xl:px-[0.1vw] 2xl:[0.1vw] 2xl:text-[1.4vw] ">
                                <div className="tokoclip bg-black py-5 px-6 2xl:py-[1.3vw] 2xl:px-[1.5vw] ">

                                    <div data-aos="fade-zoom-in" className="flex justify-between">
                                        <p className=""> Symbol </p>
                                        <p className=""> Jasmy AI </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default S4Tokenomics
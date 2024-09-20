

import PropTypes from 'prop-types';
import poligon from "../../assets/icons/Polygon 4.png"


const S5Roadmapmain = () => {
    const roadmapData1 = [
        {
            heading: "Roadmap 2024",
            description: " Step by step, our roadmap guides you through discovery, planning, design, development, deployment, and ongoing maintenance, ensuring transparency and progress every step of the way.",

        },
        {
            phase: "01",
            title: " 2024 ( SEP )",
            description: [
                "FREE AIRDROP SEP-2024 ",
                "Project inception and initial research , Team formation and advisor onboarding",
                "Development of project whitepaper and technical documentation",
                "",
            ],
            // image: rmap1,
        },
        {
            phase: "02",
            title: " 2024 ( OCT )",
            description: [
                // " Seed Sell , Privet Sell & Public Sell , OCT-2024  ",
                "( For 10 Days ) Exclusive early investor token sale at discounted rates offered.",
                "( For 10 Days ) Accredited investors and institutions purchase tokens at preferred pricing.",
                "( For 10 Days ) Open token sale to the general public at listed market price."


            ],

        },
        {
            phase: "03",
            title: "2024 ( NOV )",
            description: [
                " Launching a multi - feature Crypto Exchange with advanced Ai technology, ",
                "  Launching Future Trading with a demo account for trading practice, ",
                " Launching Japanese Ai technology Future Trading BOT with 25 + intelligent strategies, "

            ],
            // image: rmap3,
        },
        {
            phase: "04",
            title: " 2025 (QTR - 1st )",
            title_2:"Decentralized gaming applications (DEX)",
            description: [
                "No central authority: Games run on a network of nodes, rather than a single server. ",
                "Player ownership: Players have full control over their assets and data.",
                "Transparent: Transactions and gameplay are recorded on a public ledger. ",

            ],
            // image: rmap2,
        },
        {
            phase: "05",
            title: "2025 ( QTR - 2nd ) ",
            description: [
                "Dphin technology detailing construction start    ",
                " smart card Launching with Mastrocard & visa card,   ",
                " Utility of token with dipin technology start in car buying, National & International ecommerce shopping renting and paying all kind of bills by   "

            ],
            // image: rmap2,
        },

        {
            phase: "06",
            title: "2025 ( QTR - 4th )",
            title_2:"Decentralized Social Media Integration",
            description: [
                 
                "Decegram: A decentralized version of Telegram.",
                "DecentChat: A decentralized WhatsApp.",
                "Demail: A decentralized Gmail.",
                "Dacebook: A decentralized Facebook.",
                "DecTak: A decentralized TikTok.",


            ],
            // image: rmap4,
        },
        {
            phase: "07",
            title: "2026 ( QTR - 2nd )",
            title_2:"Pera Blockchain",
            description: [
                "Blockchain: Custom-built blockchain using Proof-of-Stake (PoS) consensus.  ",
                "Smart Contracts: Solidity-based smart contracts for decentralized logic.  ",
                "Decentralized Storage: InterPlanetary File System (IPFS) for data storage.",
                "Encryption: AES-256 and SSL/TLS for secure communication.",


            ],
            // image: rmap4,
        },

    ];


    return (
        <>
            <S5Roadmap roadmapdata={roadmapData1} />

        </>
    )
}

export default S5Roadmapmain


const S5Roadmap = ({ roadmapdata }) => {

    return (
        <>
            <div id='Roadmap_' className=''>

                <div className="   flex flex-col  gap-20 py-20 w-full 2xl:py-[5vw] 2xl:gap-[5vw]   ">

                    <div className="flex justify-center items-center text-center flex-col gap-5 2xl:gap-[1.6vw] ">
                        <h1 data-aos="zoom-in-up" className='text-gradient text-5xl w-fit phone:text-4xl 2xl:text-[3.2vw] ' >Roadmap</h1>
                        <p data-aos="zoom-in-up" className="text-3xl phone:text-2xl 2xl:text-[1.95vw] ">The Road Ahead {"Jasmy AI"} Vision for the Future</p>
                    </div>

                    <div>
                        <section id="Roadmap" >
                            <div
                                id="about-main"
                                className=" bg-[url('/bgimgblackwave.svg')] bg-opacity-[0.8]  relative flex gap-16 flex-col min-h-[100vh] px-10 py-10 tablet:px-3 2xl:py-[3vw] 2xl:px-[3vw]
                                2xl:gap-[4vw] 
                                "
                            >


                                {/* cards */}
                                <div>
                                    <div className="flex  flex-col grid-cols-9 p-2 mx-auto md:grid  2xl:p-[1vw] ">

                                        {/* 1 */}
                                        <div className="flex  md:contents flex-row-reverse   ">

                                            <div data-aos="zoom-in" className=" h-fit relative  flex tablet:flex-col  max-w-[35rem]    my-10  tablet:my-5      col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal
                                            2xl:max-w-[36.5vw] 2xl:my-[3vw]  z-10
                                            ">
                                                <div className=" h-fit  w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl from-blue-200 to-blue-700 my-3  
                                                2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]  
                                                " >
                                                    {roadmapdata[1].phase}
                                                </div>
                                                <div className="  h-fit flex flex-col gap-5 rounded-xl  roadmap-shadow tracking-wider  border-2  p-6 
                                                2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]
                                                " >


                                                    <p className="    leading-6 font-bold text-xl 2xl:text-[1.3vw] ">
                                                        {roadmapdata[1].title}

                                                    </p>
                                                    <div className="flex  gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[1].description[0]}

                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[1].description[1]}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[1].description[2]}</p>
                                                    </div>

                                                </div>


                                            </div>

                                            <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                                <div className="flex items-center justify-center w-6 h-full">
                                                    <div
                                                        className="w-[0.4rem]  h-full bg-indigo-300 rounded-t-full 2xl:w-[0.4vw] "
                                                        style={{ background: "var(--roadmap-gradient)" }}
                                                    ></div>
                                                </div>
                                                <div className="absolute w-6 h-6 -mt-3     top-1/2 -left-4   rotate-180 tablet:left-4  tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw] ">
                                                    <img src={poligon} className='w-full h-full' alt="pg" />
                                                </div>
                                            </div>

                                            <div className=" tablet:hidden relative  max-w-[35rem] flex          my-10      rounded-xl col-start-6 col-end-10 mr-auto tracking-normal " >
                                                <img src={roadmapdata[1].image} alt="" />
                                            </div>
                                        </div>


                                        {/* 2 */}
                                        <div className="flex md:contents   ">
                                            <div className=" tablet:hidden relative  flex       my-10       col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal" >
                                                <img src={roadmapdata[2].image} alt="" />
                                            </div>

                                            <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                                <div className="flex items-center justify-center w-6 h-full">
                                                    <div
                                                        className="w-[0.4rem] h-full bg-indigo-300 2xl:w-[0.4vw] "
                                                        style={{ background: "var(--roadmap-gradient2) " }}
                                                    ></div>
                                                </div>
                                                <div className="absolute w-6 h-6 -mt-3     top-1/2 left-4  2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[1.3vw]   ">
                                                    <img src={poligon} className='w-full h-full' alt="pg" />
                                                </div>
                                            </div>

                                            <div data-aos="zoom-in" className=" Sregular h-fit  max-w-[35rem] flex flex-row-reverse tablet:flex-col       relative     my-10   tablet:my-5    rounded-xl col-start-6 col-end-10 mr-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">

                                                <div className=" h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr from-blue-200 to-blue-700 ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]   " >
                                                    {roadmapdata[2].phase}
                                                </div>

                                                <div className="flex flex-col  gap-5 rounded-xl  roadmap-shadow  border-2 tracking-wider   p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw] " >

                                                    <p className="    leading-6 font-bold text-xl 2xl:text-[1.3vw] ">
                                                        {roadmapdata[2].title}

                                                    </p>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <div  >
                                                            <span className=' Sbold'> SEED SELL : </span>
                                                            <span className='   2xl:text-[1.12vw]' >{roadmapdata[2].description[0]}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <div  >
                                                            <span className=' Sbold'> SEED SELL : </span>
                                                            <span className='   2xl:text-[1.12vw]' >{roadmapdata[2].description[1]}
                                                            </span>
                                                        </div>

                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <div  >
                                                            <span className=' Sbold'> SEED SELL : </span>
                                                            <span className='   2xl:text-[1.12vw]' >{roadmapdata[2].description[2]}
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>




                                            </div>

                                        </div>


                                        {/* 3 */}
                                        <div className="flex  md:contents flex-row-reverse   ">

                                            <div data-aos="zoom-in" className=" h-fit relative  flex tablet:flex-col  max-w-[35rem]    my-10  tablet:my-5      col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal
                                            2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10
                                            ">
                                                <div className=" h-fit  w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl from-blue-200 to-blue-700 my-3  
                                                2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]
                                                " >
                                                    {roadmapdata[3].phase}
                                                </div>
                                                <div className=" Sregular  h-fit flex flex-col gap-5 rounded-xl  roadmap-shadow tracking-wider  border-2  p-6 
                                                2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]
                                                " >


                                                    <p className="    leading-6 font-bold text-xl 2xl:text-[1.3vw] ">
                                                        {roadmapdata[3].title}

                                                    </p>
                                                    <div className="flex  gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <div  >
                                                            <span className=' uppercase Sbold'> Crypto Exchange Launch : </span>
                                                            <span className='   2xl:text-[1.12vw]' >{roadmapdata[3].description[0]}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <div  >
                                                            <span className=' Sbold'> Future Trading : </span>
                                                            <span className='   2xl:text-[1.12vw]' >{roadmapdata[3].description[1]}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <div  >
                                                            <span className=' Sbold'> Intelligent Trading BOT : </span>
                                                            <span className='   2xl:text-[1.12vw]' >{roadmapdata[3].description[2]}
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>

                                            <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                                <div className="flex items-center justify-center w-6 h-full">
                                                    <div
                                                        className="w-[0.4rem]  h-full bg-indigo-300 rounded-t-full 2xl:w-[0.4vw] "
                                                        style={{ background: "var(--roadmap-gradient)" }}
                                                    ></div>
                                                </div>
                                                <div className="absolute w-6 h-6 -mt-3     top-1/2 -left-4   rotate-180 tablet:left-4  tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw] ">
                                                    <img src={poligon} className='w-full h-full' alt="pg" />
                                                </div>
                                            </div>

                                            <div className=" tablet:hidden relative  max-w-[35rem] flex          my-10      rounded-xl col-start-6 col-end-10 mr-auto tracking-normal " >
                                                <img src={roadmapdata[3].image} alt="" />
                                            </div>
                                        </div>


                                        {/* 4 */}
                                        <div className="flex md:contents   ">
                                            <div className=" tablet:hidden relative  flex       my-10       col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal" >
                                                <img src={roadmapdata[4].image} alt="" />
                                            </div>

                                            <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                                <div className="flex items-center justify-center w-6 h-full">
                                                    <div
                                                        className="w-[0.4rem] h-full bg-indigo-300 2xl:w-[0.4vw] "
                                                        style={{ background: "var(--roadmap-gradient2) " }}
                                                    ></div>
                                                </div>
                                                <div className="absolute w-6 h-6 -mt-3     top-1/2 left-4  2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[1.3vw]   ">
                                                    <img src={poligon} className='w-full h-full' alt="pg" />
                                                </div>
                                            </div>

                                            <div data-aos="zoom-in" className="  h-fit  max-w-[35rem] flex flex-row-reverse tablet:flex-col       relative     my-10   tablet:my-5    rounded-xl col-start-6 col-end-10 mr-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">

                                                <div className=" h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr from-blue-200 to-blue-700 ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]   " >
                                                    {roadmapdata[4].phase}
                                                </div>

                                                <div className="flex flex-col  gap-5 rounded-xl  roadmap-shadow  border-2 tracking-wider   p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw] " >

                                                    <p className="    leading-6 font-bold text-xl 2xl:text-[1.3vw] ">
                                                        {roadmapdata[4].title} <br/>
                                                        {roadmapdata[4].title_2}


                                                    </p>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[4].description[0]}
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className=' capitalize  2xl:text-[1.12vw]' > {roadmapdata[4].description[1]}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className=' capitalize  2xl:text-[1.12vw]' > {roadmapdata[4].description[2]}</p>
                                                    </div>


                                                </div>




                                            </div>



                                        </div>


                                        {/* 5 */}
                                        <div className="flex  md:contents flex-row-reverse   ">

                                            <div data-aos="zoom-in" className=" h-fit relative  flex tablet:flex-col  max-w-[35rem]    my-10  tablet:my-5      col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal
                                            2xl:max-w-[36.5vw] 2xl:my-[3vw]  z-10
                                            ">
                                                <div className=" h-fit  w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl from-blue-200 to-blue-700 my-3  
                                                2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]  
                                                " >
                                                    {roadmapdata[5].phase}
                                                </div>
                                                <div className="  h-fit flex flex-col gap-5 rounded-xl  roadmap-shadow tracking-wider  border-2  p-6 
                                                2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]
                                                " >


                                                    <p className="    leading-6 font-bold text-xl 2xl:text-[1.3vw] ">
                                                        {roadmapdata[5].title}

                                                    </p>
                                                    <div className="flex  gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[5].description[0]}

                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[5].description[1]}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[5].description[2]}</p>
                                                    </div>
                                                    {/* <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[5].description[3]}</p>
                                                    </div> */}


                                                </div>


                                            </div>

                                            <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                                <div className="flex items-center justify-center w-6 h-full">
                                                    <div
                                                        className="w-[0.4rem]  h-full bg-indigo-300 rounded-t-full 2xl:w-[0.4vw] "
                                                        style={{ background: "var(--roadmap-gradient)" }}
                                                    ></div>
                                                </div>
                                                <div className="absolute w-6 h-6 -mt-3     top-1/2 -left-4   rotate-180 tablet:left-4  tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw] ">
                                                    <img src={poligon} className='w-full h-full' alt="pg" />
                                                </div>
                                            </div>

                                            <div className=" tablet:hidden relative  max-w-[35rem] flex          my-10      rounded-xl col-start-6 col-end-10 mr-auto tracking-normal " >
                                                <img src={roadmapdata[3].image} alt="" />
                                            </div>
                                        </div>

                                        {/* 6 */}
                                        <div className="flex md:contents   ">
                                            <div className=" tablet:hidden relative  flex       my-10       col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal" >
                                                <img src={roadmapdata[6].image} alt="" />
                                            </div>

                                            <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                                <div className="flex items-center justify-center w-6 h-full">
                                                    <div
                                                        className="w-[0.4rem] h-full bg-indigo-300 2xl:w-[0.4vw] "
                                                        style={{ background: "var(--roadmap-gradient2) " }}
                                                    ></div>
                                                </div>
                                                <div className="absolute w-6 h-6 -mt-3     top-1/2 left-4  2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[1.3vw]   ">
                                                    <img src={poligon} className='w-full h-full' alt="pg" />
                                                </div>
                                            </div>

                                            <div data-aos="zoom-in" className="  h-fit  max-w-[35rem] flex flex-row-reverse tablet:flex-col       relative     my-10   tablet:my-5    rounded-xl col-start-6 col-end-10 mr-auto tracking-normal 2xl:max-w-[36.5vw] 2xl:my-[3vw] z-10">

                                                <div className=" h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr from-blue-200 to-blue-700 ml-[1px] my-3 2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]   " >
                                                    {roadmapdata[6].phase}
                                                </div>

                                                <div className="flex flex-col  gap-5 rounded-xl  roadmap-shadow  border-2 tracking-wider   p-6 2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw] " >

                                                    <p className="    leading-6 font-bold text-xl 2xl:text-[1.3vw] ">
                                                        {roadmapdata[6].title}
                                                        <br/>
                                                        {roadmapdata[6].title_2}

                                                    </p>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[6].description[0]}
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className=' capitalize  2xl:text-[1.12vw]' > {roadmapdata[6].description[1]}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className=' capitalize  2xl:text-[1.12vw]' > {roadmapdata[6].description[2]}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className=' capitalize  2xl:text-[1.12vw]' > {roadmapdata[6].description[3]}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className=' capitalize  2xl:text-[1.12vw]' > {roadmapdata[6].description[4]}</p>
                                                    </div>
                                                    


                                                </div>




                                            </div>



                                        </div>


                                        {/* 7*/}
                                        <div className="flex  md:contents flex-row-reverse   ">

                                            <div data-aos="zoom-in" className=" h-fit relative  flex tablet:flex-col  max-w-[35rem]    my-10  tablet:my-5      col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal
                                            2xl:max-w-[36.5vw] 2xl:my-[3vw]  z-10
                                            ">
                                                <div className=" h-fit  w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl from-blue-200 to-blue-700 my-3  
                                                2xl:text-[2.3vw] 2xl:my-[1vw] 2xl:py-[1.4vw] 2xl:px-[1.2vw]  
                                                " >
                                                    {roadmapdata[7].phase}
                                                </div>
                                                <div className="  h-fit flex flex-col gap-5 rounded-xl  roadmap-shadow tracking-wider  border-2  p-6 
                                                2xl:p-[1.5vw] 2xl:rounded-[1vw] 2xl:gap-[1.3vw]
                                                " >


                                                    <p className="    leading-6 font-bold text-xl 2xl:text-[1.3vw] ">
                                                        {roadmapdata[7].title}
                                                        <br/>
                                                        {roadmapdata[7].title_2}

                                                    </p>
                                                    <div className="flex  gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[7].description[0]}

                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[7].description[1]}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[7].description[2]}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-bold" >✧</p>
                                                        <p className='   2xl:text-[1.12vw]' >{roadmapdata[7].description[3]}</p>
                                                    </div>


                                                </div>


                                            </div>

                                            <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                                <div className="flex items-center justify-center w-6 h-full">
                                                    <div
                                                        className="w-[0.4rem]  h-full bg-indigo-300 rounded-t-full 2xl:w-[0.4vw] "
                                                        style={{ background: "var(--roadmap-gradient)" }}
                                                    ></div>
                                                </div>
                                                <div className="absolute w-6 h-6 -mt-3     top-1/2 -left-4   rotate-180 tablet:left-4  tablet:rotate-0 2xl:w-[1.5vw] 2xl:h-[1.5vw] 2xl:left-[-1.3vw] ">
                                                    <img src={poligon} className='w-full h-full' alt="pg" />
                                                </div>
                                            </div>

                                            <div className=" tablet:hidden relative  max-w-[35rem] flex          my-10      rounded-xl col-start-6 col-end-10 mr-auto tracking-normal " >
                                                <img src={roadmapdata[3].image} alt="" />
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}

S5Roadmap.propTypes = {
    roadmapdata: PropTypes.oneOf(["roadmapData1", "roadmapData2", "roadmapData3"]).isRequired,
};
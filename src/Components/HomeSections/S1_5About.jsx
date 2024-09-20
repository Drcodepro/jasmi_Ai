
import cube2 from "../../assets/images/cube2.png"

const S1_5About = () => {
  return (
    <>
      <div id='About-us' className=''>
        {/* <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-[#000000] via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-[100%] h-[10vh]  bottom-0 z-3" /> */}
        <div className="   flex flex-col  gap-10 py-10 px-10 phone:px-3  2xl:py-[5vw] 2xl:gap-[4vw] ">
          <div className="flex justify-center items-center text-center flex-col gap-5 2xl:gap-[1.6vw] ">
            <h1 data-aos="fade-up" className='text-gradient text-5xl w-fit phone:text-4xl 2xl:text-[3.2vw] ' >About Us</h1>
            <p data-aos="fade-up" className="text-3xl phone:text-2xl 2xl:text-[1.95vw] ">

              Jasmy empowers users with secure, decentralized solutions.</p>
          </div>

          <div className="flex tablet:flex-col justify-center items-center gap-5">
            <div className="w-[40%] flex tablet:justify-center justify-center items-center tablet:w-[100%]">
              <img data-aos="zoom-in" src={cube2} className=' w-[25rem]  tablet:w-[20rem] 2xl:w-[25vw] ' alt="" />
            </div>

            <div className="w-[60%] flex-col gap-10 2xl:gap-[2.3vw] tablet:w-[90%] flex justify-center ">
              <p data-aos="zoom-in-right" className=" glass p-4 leading-normal font-thin text-base  phone:text-sm  text-gray-300   2xl:text-[1.1vw]">
                By leveraging cutting-edge DePin (Decentralized Physical Infrastructure Network) technology, we are creating a scalable, efficient, and designed ecosystem for the future. Whether it’s through our AI-powered solutions, decentralized utilities, or gaming and exchange platforms, Jasmy is committed to providing real-world applications that make a difference.

              </p>

              <div className=" flex  w-full gap-10 2xl:gap-[2.5vw] phone:flex-col " >
                <p data-aos="zoom-in-right" className="glass p-4 max-w-[50%] phone:max-w-full leading-normal font-thin text-base   phone:text-sm    text-gray-300  2xl:text-[1.1vw]">
                  With a strong focus on innovation and collaboration, our platform is built by the community, for the community. We are dedicated to fostering a decentralized future where every individual has the power to participate, contribute, and benefit.

                </p>
                <div className="max-w-[50%] phone:max-w-full flex flex-col gap-1 2xl:gap-[1vw] " >

                  <p data-aos="zoom-in-right" className="glass p-4  leading-normal font-thin text-base  phone:text-sm 2xl:max-w-[48vw] text-gray-300  2xl:text-[1.1vw]">
                    Join us to build a more transparent, secure, and decentralized world. Together, we are creating the future of digital infrastructure.
                  </p>

                  <p data-aos="zoom-in-right" className=" glass p-4 leading-normal font-thin text-base  phone:text-sm 2xl:max-w-[48vw] text-gray-300  2xl:text-[1.1vw]">
                    Jasmy – Empowering a Decentralized Future.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default S1_5About
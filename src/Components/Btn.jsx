
import PropTypes from 'prop-types';
import btnangle from "../assets/images/btnAngle.png"

const Btn = ({ children }) => (
    <>
         
        <div id='btng' className=" transform duration-200 hover:scale-[0.95] relative rounded-sm 2xl:rounded-[0.3vw] bg-gray-500 px-7 py-[0.5rem] 
        2xl:px-[2.3vw]  2xl:py-[0.8vw] ">
            <img src={btnangle} className=" z-[-1] w-[3.5rem] absolute top-[-0.3rem]   right-[-0.6rem] 
            2xl:top-[-0.4vw] 2xl:right-[-0.6vw]  2xl:w-[3.4vw]  " alt="" />

            <p className=" text-sm 2xl:text-[1vw] h-full z-[0] " > {children} </p>
            <img src={btnangle} className=" z-[-1] w-[3.5rem] absolute bottom-[-0.3rem]  left-[-0.6rem] rotate-180 2xl:bottom-[-0.4vw] 2xl:left-[-0.6vw]  2xl:w-[3.4vw] " alt="" />
        </div>
    </>
)

Btn.propTypes = {
    children: PropTypes.node.isRequired,
};



export default Btn
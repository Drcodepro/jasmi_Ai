
import { useState } from "react";
import { motion } from "framer-motion"
import Btn from "../Btn";


const Contract = () => {
    const [copied, setCopied] = useState(false);
    const text = "0xf3d74182247eF963E0De37E3F2e174E9AS676D6";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000); // Hide the popup after 2 seconds
            })
            .catch((err) => {
                console.error("Copy failed: ", err);
            });
    };




    return (
        <>


            <div id="contract1" className=" z-10  py-10 ">


                <div id="contract" className=" flex z-10  flex-col justify-center items-center gap-5 ">
                    <h2
                       
                        className=" text-[var(--prime-yellow)] font-medium  oxanium text-3xl">Contract Address
                    </h2>

                    <p className=" text-primary-gradient text-3xl tablet:text-[4vw] z-10 "  >{text}</p>


                    <div id="contract-button" className="flex z-10 flex-wrap justify-center gap-7">

                        <button
                             
                            onClick={handleCopy}
                        >
                            <Btn className="flex oxanium">
                               
                                Copy Address
                            </Btn>
                        </button>
                        
                    </div>
                    {copied && (
                        <p className="popup mt-3" style={{ zIndex: 1, color: "white" }}>
                            Copied to clipboard!
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contract;

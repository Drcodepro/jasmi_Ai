import { useEffect, useState } from "react";
import "../Styles/Presale.css"
import usdt01 from "../assets/presaleimg/usdt.svg";
import coin from "../assets/presaleimg/jasmy.svg";
import Youicon from "../assets/presaleimg/youtube.png";
import Arrow from "../assets/presaleimg/Arrow 1.svg";


import { PresaleAddress, Presale_Abi, USDTAddress, USDT_Abi } from "../utils/utils";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import Web3 from "web3";
import {
    prepareWriteContract,
    writeContract,
    waitForTransaction,
} from "@wagmi/core";
import { Web3Button } from "@web3modal/react";

const isValid = (regex) => (input) => regex.test(input);
const numberRegex = /^\d*\.?\d*$/;
const isValidNumber = isValid(numberRegex);


const Presale = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { isConnected, address } = useAccount();
    const [walletBal, setwalletBal] = useState(0);

    const [fundsRaised, setFundsRaised] = useState(0);
    const [tokensSold, setTokensSold] = useState(0);
    const [usdtPrice, setUsdtPrice] = useState(0);
    const Helper = new Web3("https://1rpc.io/bnb");
    const usdtTokenContract = new Helper.eth.Contract(USDT_Abi, USDTAddress);

    const tokenPrice = usdtPrice;

    const [data, setData] = useState({
        usdt: "",
        tokens: ""
    });

    const closeModal = () => {
        setIsOpen(false);
    };

    const checkWalletAddress = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isConnected) {
            fetchwalletBal(address);
        }
    }, [isConnected, address]);

    const fetchwalletBal = async (walletAddress) => {
        try {
            const balance = await Helper.eth.getBalance(walletAddress);
            const balanceInEther = Helper.utils.fromWei(balance);
            setwalletBal(balanceInEther);
        } catch (error) {
            console.error('Error fetching wallet balance:', error);
        }
    };

    const [allowance, setAllowance] = useState(0);

    useEffect(() => {
        const fetchAllowance = async () => {
            try {
                const usdtContract = new Helper.eth.Contract(
                    USDT_Abi,
                    USDTAddress
                );
                const allowanceAmount = await usdtContract.methods
                    .allowance(address, PresaleAddress)
                    .call();
                setAllowance(allowanceAmount);
            } catch (error) {
                console.error("Error fetching allowance:", error);
            }
        };
        console.log("fetch allowance");
        fetchAllowance();
    }, [address, PresaleAddress]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const presaleContract = new Helper.eth.Contract(
                    Presale_Abi,
                    PresaleAddress
                );

                const fundsRaised = await presaleContract.methods
                    .totalUSDTCollected()
                    .call();
                setFundsRaised(fundsRaised / 10 ** 18);

                const tokensSold = await presaleContract.methods
                    .totalTokensSold()
                    .call();
                setTokensSold(tokensSold / 10 ** 18);

                const usdtPri = await presaleContract.methods.tokensPerUSDT().call();
                setUsdtPrice(usdtPri / 1000);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const buyTrx = async () => {
        if (!address || !isConnected) {
            toast.error("Please connect your wallet!");
            return;
        }
        try {
            let ethValue = Helper.utils.toWei(data.usdt.toString());
            const ethValueNumber = Number(ethValue);

            const tokenBalance = await usdtTokenContract.methods.balanceOf(address).call();

            if (Number(tokenBalance) < ethValueNumber) {
                toast.error("Insufficient USDT balance for this transaction");
                return;
            }

            if (allowance < ethValueNumber) {
                toast.error("You don't have enough allowance for this transaction");
                return;
            }

            const buyTransaction = await prepareWriteContract({
                address: PresaleAddress,
                abi: Presale_Abi,
                functionName: "buyWithUSDT",
                args: [ethValueNumber],
                from: address,
            });

            const toastId = toast.loading("Processing Buy Transaction..");
            await writeContract(buyTransaction);

            toast.success("Buy Transaction completed successfully", { id: toastId });
            setData({ usdt: "", tokens: "" });

            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.dismiss();
            if (allowance < 0) {
                toast.error("You don't have enough allowance for this transaction");
            } else {
                toast.error("Error in buytransaction");
            }

            console.error(error);
        }
    };

    const approveTrx = async () => {
        if (!address || !isConnected) {
            toast.error("Please connect your wallet!");
            return;
        }
        try {
            let ethValue = Helper.utils.toWei(data.usdt.toString());
            const ethValueNumber = Number(ethValue * 10 ** 18);
            const approvalTransaction = await prepareWriteContract({
                address: USDTAddress,
                abi: USDT_Abi,
                functionName: "approve",
                args: [PresaleAddress, ethValueNumber],
                from: address,
            });

            const toastId = toast.loading("Approving transaction...");
            const hash = await writeContract(approvalTransaction);
            toast.loading("Processing Approval Transaction..", { id: toastId });
            await waitForTransaction(hash);
            toast.dismiss(toastId);
            toast.success("Approval completed successfully");
            setAllowance(ethValueNumber);
        } catch (error) {
            toast.dismiss();
            toast.error("Error in approve transaction");
            console.error(error);
        }
    };

    return (
        <>
            <div className=' Sregular content'>
                <div className="mainContent">
                    <p className="title   ">JASMY AI Presale</p>
                    <p className="description">Be an early adopter with the JASMY AI token presale. Get exclusive access to our utility tokens
                        at discounted rates. Secure your tokens now and be part of the future of digital innovation.</p>
                    {isConnected ? (
                        <button className="buttons approve" onClick={checkWalletAddress}> Bal: {parseFloat(walletBal).toFixed(3)} BNB</button>

                    ) : (

                        <button className="buttons approve" onClick={checkWalletAddress}>Connect Wallet</button>
                    )}
                    <div className="tier">
                        <div className="tier1">
                            <div className="tier1title">
                                <p>Listing Price :</p>
                            </div>
                            <div className="price">
                                <p className="tierprice2">$ 0.20</p>
                            </div>
                        </div>
                        <img src={Arrow} alt="" />
                        <div className="tier2">
                            <div className="tier2title">
                                <p>Next Price :</p>
                            </div>
                            <div className="price">
                                <p className="tierprice2">$ 0.40</p>
                            </div>
                        </div>
                    </div>
                    <div className="jasmy">
                        <p className="usdttitle">Buy With</p>
                        <div className="form-inputt">
                            {/* <input className="usdtbar"></input> */}
                            <div className="inputbarr">
                                <img src={usdt01} alt="" />
                                <p className='currency text-black' style={{ fontWeight: 'bold' }}>USDT</p>
                            </div>
                        </div>
                        <div className="form-input">
                            <input className="usdtbar"
                                type="text"
                                placeholder="Enter USDT Amount"
                                value={data.usdt}
                                onChange={(e) => {
                                    const val = e.target.value
                                        .split("")
                                        .filter((el) => isValidNumber(el))
                                        .join("");
                                    setData({
                                        ...data,
                                        usdt: val,
                                        tokens: val * tokenPrice,
                                    });
                                }}
                            />
                            <div className="inputbar">
                                <p>USDT</p>
                                <img src={usdt01} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="jasmy">
                        <p className="usdttitle">You Will Get</p>
                        <div className="form-input">
                            <input className="usdtbar"
                                type="text"
                                placeholder="JasmyAi Amount"
                                value={data.tokens}
                                onChange={(e) => {
                                    const val = e.target.value
                                        .split("")
                                        .filter((el) => isValidNumber(el))
                                        .join("");
                                    setData({
                                        ...data,
                                        tokens: val,
                                        usdt: val / tokenPrice,
                                    });
                                }}
                            />
                            <div className="inputbar">
                                <p>JASMY AI</p>
                                <img src={coin} alt="" />
                            </div>
                        </div>
                    </div>
                    {allowance > data.usdt ?
                        <button onClick={buyTrx} className="buttons approve">Buy Now</button>
                        :
                        <button onClick={approveTrx} className="buttons approve">Approve</button>
                    }
                    <div className="smart">
                        <img src={Youicon} alt="" />
                        <a href="/" target="_blank">
                            {" "}
                            How to buy JASMY AI Token
                        </a>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    id="popup-modal"
                    onClick={closeModal}
                    tabIndex="-1"
                    className="fixed  h-[100vh] inset-0 z-50  bg-slate-900  bg-opacity-50    "
                >
                    <div className="h-[100vh] flex items-center justify-center">
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative h-fit   rounded-3xl shadow bg-gray-900 border-2 border-[--primary-color] bg-opacity-90 "
                        >
                            <button
                                onClick={closeModal}
                                type="button"
                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popup-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>


                            <div className=" max-w-[40rem] p-4 md:p-5 text-center">
                                <div className='flex gap-3 flex-col items-center justify-center'>

                                    <div className="p-4 md:p-5">
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
                                        <ul className="my-4 space-y-3">

                                            <Web3Button />
                                        </ul>
                                        <div>
                                            <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                                                <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                Why do I need to connect with my wallet?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Presale
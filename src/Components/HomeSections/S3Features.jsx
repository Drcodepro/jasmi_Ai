
import featuresCard from "../../assets/images/featuresCard.png"
import featuresCard2 from "../../assets/images/featuresCard2.png"
import featuresAiro from "../../assets/images/featuresCardAirow.png"

// import featuresBg from "../../assets/images/features-bg.png"
// import robotic from "../../assets/images/jasmiRobotics.webp";
// import gamingPoster from "../../assets/images/gamingPoster.jpg";
// import socialMediaPoster from "../../assets/images/socialMediaPoster.jpg";

import cancleBTN from "../../assets/icons/cancel.png";

import "../../Styles/features.css";

// import f1 from "../../assets/icons/f1.png"
// import f2 from "../../assets/icons/f2.png"
import f3 from "../../assets/icons/f3.png"
import f4 from "../../assets/icons/f4.png"
import f5 from "../../assets/images/AILOGO.svg";
import DGaming_logo from "../../assets/images/blockchain-game.png";
import paraBlock from "../../assets/images/paraBlockchain.png";




import { useState } from "react";
 

const S3Features = () => {

    const [visiblePopup, setVisiblePopup] = useState(null);

  // Handler to show a specific popup
  const showPopup = (popupId) => {
    setVisiblePopup(popupId);
  };

  // Handler to close the popup
  const closePopup = () => {
    setVisiblePopup(null);
  };



  // useEffect(() => {
  //   const app_container = document.getElementById("app_container");
    
  //   if (visiblePopup!=null) {
  //     app_container.style.height="100vh";
  //     app_container.style.overflowY = "hidden";

  //   } else {
  //     app_container.style.height="fit-content";
  //     app_container.style. overflowY = "visible";  
  //   }
  //  });


    return (
        <>
            <div id='Features' className=' overflow-x-hidden relative ' >

                <div className="   flex flex-col  gap-20 py-20 w-full 2xl:py-[5vw] 2xl:gap-[5vw]  ">

                    <div className="flex justify-center items-center text-center flex-col gap-5 2xl:gap-[1.6vw] ">
                        <h1 data-aos="fade-up" className='text-gradient text-5xl w-fit phone:text-4xl 2xl:text-[3.2vw] ' >Use Cases of Jasmy AI</h1>
                        <p data-aos="fade-up" className="text-3xl phone:text-2xl capitalize 2xl:text-[1.95vw] ">Explore the diverse applications of our platform </p>
                    </div>


                    <div id="featuresCard" className="w-full  flex justify-center">
                        <div className=" flex justify-center items-center flex-wrap gap-5  px-10 phone:px-3 2xl:gap-[1.9vw] " >


                            <div data-aos="zoom-in" className="  max-w-[22rem] h-[21rem] relative smallPhone:h-[24rem] phone:h-[23rem] 2xl:max-w-[25vw] 2xl:h-[24vw]  ">
                                <img className="w-full     h-full" src={featuresCard} alt="features card" />
                                <div className="w-[4rem]   absolute top-6 right-5 phone:right-[4vw] 2xl:w-[4vw]   " > <img className="AiroG" src={featuresAiro} alt="" /> </div>
                                <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 p-5 px-8   2xl:p-[1.7vw] 2xl:px-[2vw] ">
                                    <div className="flex w-fit  ">
                                        <img src={f5} className="w-[4rem] 2xl:w-[4vw] " alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2 phone:gap-3 2xl:gap-1">
                                        <h2 className=" text-xl font-bold smallPhone:text-sm 2xl:text-[1.3vw] " >DePin Technology</h2>
                                        <p className=" Slight text-[0.9rem] 2xl:text-[1.05vw] leading-tight phone:text-[0.9rem]  font-thin text-gray-200 " >
                                        DePIN (Decentralized Physical Infrastructure Network) creates a scalable, efficient ecosystem for the future. Using AI-powered solutions and a suite of decentralized utilities, DEPIN enhances your digital experience across platforms. It provides innovative, secure, and convenient solutions to improve and reward your online life.
                                        </p>
                                        <p className="text-blue-600 font-bold cursor-pointer" onClick={() => showPopup('popup1')}>more...</p>
                                    </div>
                                </div>
                            </div>

                            < div data-aos="zoom-in-up" className="grid laptop:h-fit   grid-rows-1 place-items-center   " >

                            <div className="max-w-[22rem] h-[21rem] relative smallPhone:h-[25rem] phone:h-[23rem] 2xl:max-w-[25vw] 2xl:h-[24vw] ">
                                <img className="     w-full     h-full" src={featuresCard2} alt="features card" />
                                <div className="w-[4rem]   absolute bottom-6 right-5 phone:right-[4vw] 2xl:w-[4vw]  " > <img className="AiroG" src={featuresAiro} alt="" /> </div>
                                <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 p-5 px-8   2xl:p-[1.7vw] 2xl:px-[2vw] ">
                                    <div className="flex flex-col gap-2 phone:gap-3 2xl:gap-1 ">
                                        <h2 className=" text-xl font-bold smallPhone:text-sm 2xl:text-[1.3vw] " >Multi-Feature Crypto Exchange</h2>
                                        <p className=" Slight text-[0.9rem] 2xl:text-[1.05vw] leading-tight phone:text-[0.9rem] font-thin text-gray-200 " >
                                        We’re excited to launch a multi-feature crypto exchange, offering an unmatched trading experience for both beginners and experts. Powered by advanced AI, our platform provides powerful tools and smart strategies for success in the fast-paced crypto market.
                                        </p>
                                        <p className="text-blue-600 font-bold cursor-pointer" onClick={() => showPopup('popup2')}>more...</p>

                                    </div>
                                    <div className="flex w-fit  ">
                                        {/* <img src={f1} className="w-[4rem] 2xl:w-[4vw] " alt="" /> */}
                                        <img src={f4} className="w-[4rem] 2xl:w-[4vw] "  alt="" />
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div data-aos="zoom-in" className="  max-w-[22rem] h-[21rem] relative smallPhone:h-[25rem] phone:h-[23rem] 2xl:max-w-[25vw] 2xl:h-[24vw]  ">
                                <img className="     w-full     h-full" src={featuresCard} alt="features card" />
                                <div className="w-[4rem]   absolute top-6 right-5 phone:right-[4vw] 2xl:w-[4vw]   " > <img className="AiroG" src={featuresAiro} alt="" /> </div>
                                <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 p-5 px-8   2xl:p-[1.7vw] 2xl:px-[2vw] ">
                                    <div className="flex w-fit  ">
                                        <img src={DGaming_logo} className="w-[4rem] 2xl:w-[4vw] " alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2 phone:gap-3 2xl:gap-1 ">
                                        <h2 className=" text-xl font-bold smallPhone:text-sm 2xl:text-[1.3vw] " >Decentralized Gaming Applications</h2>
                                        <p className=" Slight text-[0.9rem] 2xl:text-[1.05vw] leading-tight phone:text-[0.9rem] font-thin text-gray-200 " >
                                        We’re excited to introduce Decentralized Gaming Applications (DEX), revolutionizing gaming through blockchain technology. Our platform empowers players, giving them full control over their gaming assets, data, and experience—without reliance on a central authority.
                                        </p>
                                        <p className="text-blue-600 font-bold cursor-pointer" onClick={() => showPopup('popup3')}>more...</p>

                                    </div>

                                </div>
                            </div>

                            <div data-aos="zoom-in" className=" max-w-[22rem] h-[21rem] relative smallPhone:h-[25rem] phone:h-[23rem] 2xl:max-w-[25vw] 2xl:h-[24vw] ">
                                <img className="     w-full rotate-[180deg]   h-full" src={featuresCard2} alt="features card" />

                                <div className="w-[4rem]   absolute top-6 left-5 phone:left-[4vw] 2xl:w-[4vw] " > <img className="AiroG" src={featuresAiro} alt="" /> </div>

                                <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 p-5 px-8   2xl:p-[1.7vw] 2xl:px-[2vw] ">
                                    <div className="flex w-fit self-end ">
                                        <img src={f3} className="w-[4rem] 2xl:w-[4vw] " alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2 phone:gap-3 2xl:gap-1 ">

                                      <h2 className=" text-xl font-bold smallPhone:text-sm 2xl:text-[1.3vw] " >Decentralized Social Media Integration Network (DSMIN)</h2>
                                      <p className=" Slight text-[0.9rem] 2xl:text-[1.05vw] leading-tight phone:text-[0.9rem] font-thin text-gray-200 " >
                                      DSMIN is a decentralized social media platform that empowers users with full control over their data, privacy, and interactions using blockchain technology, eliminating the need for centralized intermediaries. It ensures secure, transparent, and user-driven social experiences.
                                      </p>
                                      <p className="text-blue-600 font-bold cursor-pointer" onClick={() => showPopup('popup4')}>more...</p>

                                    </div>
                                </div>
                            </div>



                            <div  data-aos="zoom-in-down" className="  max-w-[22rem] h-[21rem] relative smallPhone:h-[25rem] phone:h-[23rem] 2xl:max-w-[25vw] 2xl:h-[24vw] ">
                                <img className="     w-full rotate-[180deg]   h-full" src={featuresCard} alt="features card" />
                                <div className="w-[4rem]   absolute bottom-6 left-5 phone:left-[3vw] 2xl:w-[4vw] " > <img  className="AiroG" src={featuresAiro} alt="" /> </div>
                                <div className="absolute w-full h-full flex flex-col justify-between top-0 left-0 p-5 px-8   2xl:p-[1.7vw] 2xl:px-[2vw] ">
                                    <div className="flex flex-col gap-2 phone:gap-3 2xl:gap-1 ">
                                      <h2 className=" text-xl font-bold smallPhone:text-sm 2xl:text-[1.3vw] " >Pera Blockchain</h2>
                                      <p className=" Slight text-[0.9rem] 2xl:text-[1.05vw] leading-tight phone:text-[0.9rem] font-thin text-gray-200 " >
                                      Our advanced crypto exchange, built on the secure Pera Blockchain, leverages decentralization, AI-driven innovations, and liquidity pool rewards to offer exceptional opportunities for all investors. At its core is the native coin, Jasmy, powering the entire ecosystem.
                                      </p>
                                      <p className="text-blue-600 font-bold cursor-pointer " onClick={() => showPopup('popup5')}>more...</p>

                                    </div>
                                    <div className="flex w-fit self-end ">
                                        <img src={paraBlock} className="w-[4rem] 2xl:w-[4vw] "  alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>






{/* first pop_up */}
<div className={visiblePopup === 'popup1'?"PopUp_container_wrap":"hidden"}>
<div className="close_pop"><img src={cancleBTN} alt="close sign"  onClick={closePopup} /></div> 

<div className="PopUp_container">
    <section className="section">
      <h2>Key Features</h2>
      <ul>
        <li><strong>Decentralized Virtual Cards:</strong> Secure, tokenized cards for online transactions, similar to MasterCard and Visa.</li>
        <li><strong>E-commerce Integration:</strong> Seamless shopping experience across various platforms, with exclusive rewards and discounts.</li>
        <li><strong>Luxury Asset Purchase:</strong> Buy high-value items like luxury cars, property, and more, with secure and protected transactions.</li>
        <li><strong>AI-Powered Security:</strong> Advanced threat detection and prevention, ensuring your data and transactions are safe.</li>
        <li><strong>Decentralized Data Storage:</strong> Secure, transparent, and user-controlled data management, with InterPlanetary File System (IPFS).</li>
        <li><strong>Smart Contract Automation:</strong> Streamlined transactions and processes, with customizable contract terms.</li>
      </ul>
    </section>

    <section className="section">
      <h2>Benefits</h2>
      <ul>
        <li><strong>Enhanced Security:</strong> Protected transactions and data, with AI-powered security and decentralized storage.</li>
        <li><strong>Convenience:</strong> Easy access to virtual cards, e-commerce, and luxury assets, with seamless checkout and customizable payment plans.</li>
        <li><strong>Flexibility:</strong> Cross-platform compatibility, with support for multiple currencies and payment methods.</li>
        <li><strong>Empowerment:</strong> User-controlled data and decentralized decision-making, with transparent and auditable transactions.</li>
        <li><strong>Scalability:</strong> Future-proof infrastructure, with continuous innovation and updates.</li>
      </ul>
    </section>

    <section className="section">
      <h2>How it Works</h2>
      <ul>
        <li><strong>Virtual Cards:</strong> Create, manage, and delete virtual cards for secure online transactions.</li>
        <li><strong>E-commerce Shopping:</strong> Shop on various platforms, with exclusive rewards and discounts.</li>
        <li><strong>Luxury Asset Purchase:</strong> Buy high-value items, with secure and protected transactions.</li>
        <li><strong>AI-Powered Security:</strong> Advanced threat detection and prevention, ensuring your data and transactions are safe.</li>
        <li><strong>Decentralized Data Storage:</strong> Secure, transparent, and user-controlled data management.</li>
      </ul>
    </section>

    <section className="section">
      <h2>Join the DEPIN Ecosystem</h2>
      <h3>Decentralized Virtual Cards</h3>
      <ul>
        <li>Tokenized cards for secure online transactions.</li>
        <li>Card management: create, manage, delete virtual cards.</li>
        <li>Transaction limits: set customizable spending limits.</li>
        <li>Real-time notifications: instant updates on transactions.</li>
        <li>Compatible with major merchants and platforms.</li>
      </ul>

      <h3>E-commerce Integration</h3>
      <ul>
        <li>Seamless checkout with DEPIN virtual cards.</li>
        <li>Global access: shop on various platforms worldwide.</li>
        <li>Rewards and discounts: exclusive offers and loyalty programs.</li>
        <li>Secure payments: protected transactions with DEPIN virtual cards.</li>
        <li>Supports multiple currencies and payment methods.</li>
      </ul>

      <h3>Luxury Asset Purchase</h3>
      <ul>
        <li>High-value transactions: buy luxury cars, property, and more.</li>
        <li>Secure payments: protected transactions for high-value purchases.</li>
        <li>Exclusive access: unique opportunities for luxury asset acquisition.</li>
        <li>Verified sellers: trusted and verified luxury asset providers.</li>
        <li>Customizable payment plans: flexible payment options.</li>
      </ul>

      <h3>Decentralized Data Storage</h3>
      <ul>
        <li>Secure, transparent, and user-controlled data management.</li>
        <li>Encrypted data storage: AES-256 and SSL/TLS.</li>
        <li>Decentralized storage: InterPlanetary File System (IPFS).</li>
        <li>Data ownership: users control their data and access.</li>
        <li>Auditable transactions: transparent and tamper-proof.</li>
      </ul>

      <h3>Smart Contract Automation</h3>
      <ul>
        <li>Streamlined transactions and processes.</li>
        <li>Automated escrow services.</li>
        <li>Secure and transparent contract execution.</li>
        <li>Customizable contract terms.</li>
        <li>Supports multiple smart contract languages.</li>
      </ul>

      <h3>AI-Powered Security</h3>
      <ul>
        <li>Advanced threat detection and prevention.</li>
        <li>Machine learning-based security analytics.</li>
        <li>Real-time monitoring and alerts.</li>
        <li>Secure authentication and authorization.</li>
        <li>Continuous security updates and patches.</li>
      </ul>

      <h3>Cross-Platform Compatibility</h3>
      <ul>
        <li>Access DEPIN Utilities on web, mobile, and desktop.</li>
        <li>Compatible with major operating systems.</li>
        <li>Responsive design: optimized user experience.</li>
        <li>Multi-language support.</li>
        <li>Regular software updates.</li>
      </ul>
    </section>

    <section className="section">
      <h2>Technical Specifications</h2>
      <ul>
        <li><strong>Blockchain:</strong> Pera Blockchain (PoS Consensus).</li>
        <li><strong>Smart Contracts:</strong> WASM-based (Pera Blockchain).</li>
        <li><strong>Decentralized Storage:</strong> InterPlanetary File System (IPFS).</li>
        <li><strong>Encryption:</strong> AES-256, SSL/TLS.</li>
        <li><strong>AI Framework:</strong> TensorFlow, PyTorch.</li>
      </ul>
    </section>
  </div>

  </div>


{/* second pop */}
<div className={visiblePopup === 'popup2'?"PopUp_container_wrap":"hidden"}>
<div className="close_pop"><img src={cancleBTN} alt="close sign"  onClick={closePopup} /></div> 

<div className="PopUp_container">
  <h2>Key Features of Our Crypto Exchange</h2>

  <div className="section">
    <h3>1. Future Trading with Demo Account</h3>
    <ul>
      <li>
        <strong>Feature:</strong> One of the standout offerings is the Future Trading feature, which allows users to engage in advanced crypto trades, where they can speculate on the price movements of various cryptocurrencies over time.
      </li>
      <li>
        <strong>Demo Account for Practice:</strong> We understand the importance of getting familiar with trading tools, which is why we offer a demo account feature, enabling users to practice and refine their strategies in a risk-free environment. This ensures that both beginners and experienced traders can hone their skills before entering real markets.
      </li>
    </ul>
    <h4>Benefits:</h4>
    <ul>
      <li><em>Risk-Free Learning:</em> Users can practice future trading without the risk of losing money.</li>
      <li><em>Strategy Development:</em> Traders can test and develop strategies in a realistic trading environment before applying them in live markets.</li>
      <li><em>Confidence Building:</em> The demo account helps build confidence, especially for new traders who want to familiarize themselves with future trading tools.</li>
    </ul>
  </div>

  <div className="section">
    <h3>2. Intelligent Trading BOT (Japanese AI Technology)</h3>
    <ul>
      <li>
        <strong>Feature:</strong> Our <em>Intelligent Trading BOT</em> uses state-of-the-art Japanese AI technology with over <em>25 intelligent trading strategies</em> designed to maximize profitsWe are proud to introduce our Intelligent Trading BOT, powered by state-of-the-art Japanese AI technology. This BOT comes equipped with over 25 intelligent trading strategies designed to maximize profits while managing risks effectively.
        Whether you're a novice or expert trader, the BOT offers customized strategies based on real-time market conditions.

      </li>
    </ul>
    <h4>Benefits:</h4>
    <ul>
      <li><em>Automated Trading:</em> The BOT executes trades on your behalf based on pre-defined strategies, saving time and effort while maximizing efficiency.</li>
      <li><em>Multi-Strategy Approach:</em> With over 25 strategies, the BOT adapts to different market conditions, ensuring flexibility in both bullish and bearish markets.</li>
      <li><em>Data-Driven Decisions:</em> The AI analyzes large volumes of data to provide accurate predictions and trade execution, minimizing the impact of emotional or impulsive decisions.</li>
      <li><em>24/7 Trading:</em> The BOT works round the clock, ensuring that you never miss a trading opportunity, even when you're not actively monitoring the market.</li>
    </ul>
  </div>

  <div className="section">
    <h3>3. Real-Time Market Updates and Trade News</h3>
    <ul>
      <li>
        <strong>Feature:</strong> Our exchange offers real-time updates on the global crypto market, delivering timely news and insights that impact trading decisions.
   - Stay ahead of the curve with instant access to breaking news, market trends, and updates on cryptocurrencies, ensuring that you make the most informed trades possible.
  </li>
    </ul>
    <h4>Benefits:</h4>
    <ul>
      <li><em>Stay Informed:</em> Real-time market updates ensure that traders are always aware of the latest trends, regulatory changes, or significant market movements.</li>
      <li><em>Strategic Advantage:</em> Up-to-date information allows for faster, more informed decisions, which can lead to better trading outcomes.</li>
      <li><em>Global Market Insights:</em> Traders can take advantage of international trends and news to make profitable trades across different crypto assets.</li>
    </ul>
  </div>

  <div className="section">
    <h3>4. Advanced Security and Transparency</h3>
    <ul>
      <li>
        <strong>Feature:</strong>  Security is at the core of our platform. We leverage blockchain’s inherent transparency and advanced security protocols to ensure that user funds and data are always safe.
        - With features like two-factor authentication (2FA), cold storage* of funds, and *real-time auditing, we guarantee peace of mind for every user.
        </li>
    </ul>
    <h4>Benefits:</h4>
    <ul>
      <li><em>Fund Safety:</em> Your funds are protected by industry-leading security measures, reducing the risks of hacking or fraud.</li>
      <li><em>User Trust:</em> Transparency builds trust, and users can be confident that their assets and data are secure.</li>
      <li><em>Compliance:</em> Our exchange adheres to the highest regulatory standards, ensuring a safe and legally compliant trading environment.</li>
    </ul>
  </div>

  <div className="section">
    <h3>Benefits of Our Multi-Feature Crypto Exchange</h3>
    <ul>
      <li><em>Comprehensive Trading Experience:</em> Whether you're a beginner or an expert, our platform offers tools and features to enhance your trading experience.</li>
      <li><em>Learning and Growth:</em> With a demo account and advanced AI-driven trading strategies, users can continuously improve their trading skills and strategies without taking unnecessary risks.</li>
      <li><em>Efficiency and Convenience:</em> The automated BOT executes trades based on intelligent strategies, saving time while boosting trading performance.</li>
      <li><em>Global Access:</em> Trade on a global scale with instant updates and the ability to act on emerging trends from international markets.</li>
      <li><em>Security and Peace of Mind:</em> Robust security measures protect assets and dataWith robust security measures and transparent practices, users can trade confidently, knowing their assets and data are fully protected.</li>
    </ul>
  </div>

  <div className="section">
    <h3>Future-Ready Crypto Exchange</h3>
    <p>
    Our multi-feature crypto exchange is designed to meet the growing demands of the modern trader. Whether you're here to practice with our demo accounts, leverage the power of our Japanese AI-powered trading BOT, or stay updated with real-time market insights, we have you covered. With an emphasis on innovation, security, and user-centric design, our platform is your gateway to successful cryptocurrency trading in the future.
    </p>
  </div>
</div>

</div>



{/* third pop */}
<div className={visiblePopup === 'popup3'?"PopUp_container_wrap":"hidden"}>
  <div className="close_pop"><img src={cancleBTN} alt="close sign"  onClick={closePopup} /></div> 
  <div className="PopUp_container">
   <h2>Key Features of DEX:</h2>
   <div className="section">
     <h3>1. No Central Authority</h3>
    <ul>
      <li><strong className="text-[1.2rem]">Feature :</strong> DEX operates without a centralized server, meaning there is no single point of control or failure. Instead, the games run on a decentralized network of nodes distributed across the blockchain. This decentralized infrastructure ensures fairness, transparency, and longevity for all games on the platform.
      </li>
    </ul>
    <h3>Benefits:</h3>
    <ul>
      <li><strong>No Single Point of Failure :</strong> Games remain operational even if some nodes go offline, guaranteeing uptime and continuous availability.
      </li>
      <li><strong>Resistant to Manipulation :</strong> With no central authority, game data and outcomes are immune to interference, ensuring fair gameplay.
      </li>
      <li><strong>Player Empowerment :</strong> Players have more influence over how the game evolves, creating a community-driven environment.
      </li>
    </ul>
   </div>


   <div className="section">
     <h3>2. Player Ownership</h3>
    <ul>
      <li><strong className="text-[1.2rem]">Feature :</strong>  In DEX, players have full ownership of their in-game assets. Items such as skins, weapons, characters, or even digital land are stored as NFTs (Non-Fungible Tokens) on the blockchain, giving players absolute control over them.
      </li>
    </ul>
    <h3>Benefits:</h3>
    <ul>
      <li><strong>True Ownership :</strong> Players can buy, sell, or trade their assets freely on an open network, allowing them to earn transparently, in-game with rewards & achievements.
      </li>
      <li><strong>Cross-Game Compatibility :</strong> Since assets are tokenized, they can potentially be used across different games, creating an interconnected gaming universe.
      </li>
      <li><strong>Independence from Game Developers :</strong> Unlike centralized games where assets are locked within a particular platform, DEX gives players control,  even the game developers can't discontinue or change game rules.
      </li>
    </ul>
   </div>

   <div className="section">
     <h3>3. Transparent Gameplay
     </h3>
    <ul>
      <li><strong className="text-[1.2rem]">Feature :</strong> Every action, transaction, and gameplay element in DEX is recorded on a public blockchain ledger. This ensures that all aspects of the game, including profit, losses, rewards, recognitions, and game outcomes, are visible to everyone, promoting transparency and accountability.
      </li>
    </ul>
    <h3>Benefits:</h3>
    <ul>
      <li><strong>Proven Fairness :</strong> Players can independently verify that game mechanics and outcomes are unbiased and transparent, eliminating concerns about rigged systems.
      </li>
      <li><strong>Auditability :</strong> The public ledger provides a full record of game transactions, which can be audited by players to ensure the integrity of the platform.
      </li>
      <li><strong>Trustless Environment :</strong> Players no longer need to trust game developers or third-party entities, as everything is governed by smart contracts and decentralized protocols.
      Additional Benefits of DEX</li>
      <li><strong>Security :</strong> Blockchain technology inherently secures player data, assets, and transactions, protecting them from hacks, fraud, or manipulation.
      </li>
      <li><strong>Community-Driven Development :</strong> With decentralized governance, players can propose and vote on changes or new features for games, making the platform more democratic and responsive to the needs of its community.
      </li>
      <li><strong>Interoperability :</strong> As part of the larger blockchain ecosystem, DEX can integrate with other decentralized platforms and marketplaces, allowing seamless exchanges of assets and cross-game functionalities.
      </li>
      <li><strong>Rewards for Participation :</strong> Players can earn cryptocurrency or NFTs by participating in games, competing in tournaments, or contributing to the ecosystem, creating real-world value from gaming.
      </li>
    </ul>
   </div>

   <div className="section">
    <h3>Technical Specifications</h3>
    <ul>
      <li><strong>Blockchain Network :</strong> DEX games run on a custom blockchain optimized for gaming, using a Proof-of-Stake (PoS) consensus mechanism to ensure scalability and energy efficiency.
      </li>
      <li><strong>Smart Contracts :</strong> Smart contracts handle all in-game transactions, ensuring automatic, transparent, and tamper-proof execution of gameplay mechanics, asset transfers, and rewards distribution.
      </li>
      <li><strong>Tokenization :</strong> In-game assets and rewards are tokenized as ERC-721 or ERC-1155 NFTs, providing players with complete ownership and control over their digital assets.
      </li>

      <li><strong>Cross-Platform Compatibility :</strong> DEX is designed to work across a variety of devices and platforms, from desktop to mobile, ensuring accessibility for a wide range of gamers.
      </li>
      <li><strong>Expansion of Community Governance :</strong> Introduce community voting mechanisms where players can participate in decision-making processes regarding game rules, updates, and the introduction of new features.
      </li>
    </ul>

    <h3>Conclusion :</h3>
    <p>Join the Future of Gaming
    DEX represents the next frontier of gaming, where players are in full control, ownership is real, and gameplay is transparent and fair. By combining blockchain technology with innovative gameplay mechanics, we are creating an immersive, decentralized gaming experience like no other.</p>
   </div>


    </div>
  </div>




  {/* fourth pop */}
<div className={visiblePopup === 'popup4'?"PopUp_container_wrap":"hidden"}>
  <div className="close_pop"><img src={cancleBTN} alt="close sign"  onClick={closePopup} /></div> 
  <div className="PopUp_container">
    <p className="mb-4">DSMIN (Decentralized Social Media Infrastructure Network) is a groundbreaking technology that aims to reshape how social media platforms operate by transitioning them to decentralized blockchain-based systems. The goal is to eliminate the control of centralized authorities over user data, offering greater privacy, control, and transparency for users.
    </p>
   <h2>Key Features of DSMIN Technology:</h2>
   <p className="mb-4">Decentralized Communication Platforms: DSMIN is creating decentralized versions of popular communication platforms like:
   </p>
   <div className="section">
    <ul>
      <li><strong>Delegram :</strong> A decentralized version of Telegram, offering encrypted messaging with complete control over personal data.
      </li>
      <li><strong>DecentApp :</strong> A decentralized alternative to WhatsApp, where all conversations are stored securely across blockchain nodes without relying on a single server.
      </li>
      <li><strong>Demail :</strong> A blockchain-based email service that secures communications, providing users with a fully encrypted email experience.
      </li>
      <li><strong>Decbook :</strong> A decentralized version of Facebook, where users have complete ownership of their social profiles and posts.
      </li>
      <li><strong>DecTak :</strong> A decentralized TikTok that ensures content creators have full ownership of their videos while being rewarded with tokens for engagement.
      </li>
    </ul>
   </div>


   <div className="section">
     <h3>Enhanced Privacy & Data Control :     </h3>
     <p>Users have full control over their data and communication. DSMIN ensures that no third-party authority has access to private data, preventing surveillance, hacking, or unauthorized data sharing.
        With encrypted messaging and decentralized storage, users’ information is secure and inaccessible to external entities.
     </p>
    <h3>Censorship Resistance :</h3>
    <p>By utilizing blockchain technology, DSMIN ensures that no single entity can censor or block content. Content is distributed across a global network, making it impossible for centralized entities to remove or manipulate information.
      This guarantees freedom of speech, as users can express themselves without fear of content being removed or suppressed.
    </p>
    <h3>Ownership of Data & Content : </h3>
    <p>On DSMIN, users are the owners of their data and content. Unlike traditional platforms where data is stored on centralized servers, here, users have the right to control, delete, or share their data as they choose.
      No third-party company can claim ownership of user-generated content or use it for monetization without explicit consent.
    </p>
    <h3>Tokenized Ecosystem for Engagement : </h3>
    <p>DSMIN introduces a tokenized economy where users are rewarded for their activity, content creation, and engagement. Whether it’s sending messages on Delegram, posting on Dacebook, or sharing videos on DecTak, users will earn tokens.
    These tokens can be used within the ecosystem or traded on crypto exchanges, giving users tangible rewards for their contributions to the platforms.
    </p>
    <h3>Interoperability Across Platforms : </h3>
    <p>DSMIN allows seamless integration and interaction between its decentralized platforms. Users can communicate and share data across Delegram, DecentChat, Demail, and others without needing separate accounts or platforms.
      This interoperability enhances user convenience and creates a unified decentralized social media experience.
    </p>
    <h3>Transparent and Secure Transactions : </h3>
    <p>Blockchain technology ensures that all data transactions, including messaging and content sharing, are transparent, verifiable, and secure.
     Every transaction on DSMIN is recorded on the blockchain, ensuring the authenticity and integrity of data while reducing the risks of fraud and tampering.
    </p>
    <h3>Immutable Content & Data Storage : </h3>
    <p>Content stored on the DSMIN network is immutable, meaning it cannot be altered or deleted by external parties. This ensures data permanence and long-term availability of user-generated content.
    </p>
    <h3>The Future of DSMIN :</h3>
    <p>In the future, users will be able to enjoy all social media via blockchain, from encrypted messaging to sharing on decentralized social platforms. The DSMIN ecosystem promises a future where privacy is paramount, content is user-controlled, and digital engagement is rewarded in a secure, censorship-free environment. </p>
    
   </div>


   <div className="section">
    <h3>DSMIN (Decentralized Social Media Infrastructure Network) </h3>
    <ul>
      <li><strong>Delegram :</strong>  A decentralized version of Telegram,
      </li>
      <li><strong>DecentApp :</strong>  A decentralized alternative to WhatsApp, 
      </li>
      <li><strong>Demail :</strong> A blockchain-based email service
      </li>
      <li><strong>Decbook :</strong> A decentralized version of Facebook, </li>
      <li><strong>DecTak :</strong> A decentralized TikTok  </li>
    </ul>
   </div>


    </div>
  </div>

  


{/* fifth pop */}
<div className={visiblePopup === 'popup5'?"PopUp_container_wrap":"hidden"}>
<div className="close_pop"><img src={cancleBTN} alt="close sign"  onClick={closePopup} /></div> 

<div className="PopUp_container">
  <div className="section">
    <h2>Pera Blockchain Overview</h2>
    <p>
      <strong>Pera Blockchain</strong> is a next-generation decentralized blockchain network designed for scalability, security, and high-speed transactions. It is tailored for seamless integration with various decentralized finance (DeFi) projects, especially catering to crypto exchanges, decentralized applications (dApps), and decentralized autonomous organizations (DAOs).
    </p>
    <ul>
      <li><strong>Scalable Infrastructure:</strong> Pera Blockchain is designed to handle a high volume of transactions with minimal latency, ensuring efficiency and user-friendly experiences even during peak trading hours.</li>
      <li><strong>Advanced Security Protocols:</strong> Equipped with the latest encryption and security algorithms, Pera ensures that all transactions and data on the blockchain are protected against hacks and malicious activities.</li>
      <li><strong>Smart Contract Capability:</strong> The blockchain allows the execution of advanced smart contracts, enabling automated trading and decentralized features such as staking, governance, and token swaps.</li>
    </ul>
  </div>

  <div className="section">
    <h2>Key Features of the Exchange</h2>

    <h3>1. Liquidity Pool for Investors</h3>
    <p>
      Our liquidity pool ensures seamless transactions while offering <em>profit-sharing opportunities</em> for investors. By staking their assets into the liquidity pool, investors can earn a share of transaction fees and rewards, ensuring a steady passive income.
    </p>
    <p>
      The backend integration allows buying the native coin <strong>Jasmy</strong> automatically, further enhancing liquidity and value within the ecosystem.
    </p>

    <h3>2. Node Profit Sharing</h3>
    <p>
      The platform encourages node participation, allowing users to run validator nodes and participate in securing the Pera Blockchain.
    </p>
    <p>
      <strong>Node operators</strong> are rewarded with a percentage of transaction fees and block rewards, creating a decentralized, community-driven network. Profit sharing ensures long-term engagement and financial incentives for those contributing to the blockchain's security and integrity.
    </p>

    <h3>3. Native Coin - Jasmy</h3>
    <p>
      <strong>Jasmy</strong>, our native utility token, powers the entire platform. It is used for paying transaction fees, staking in the liquidity pool, and participating in governance and decision-making on the blockchain.
    </p>
    <p>
      <strong>Jasmy</strong> holders also receive <em>special incentives</em> such as reduced fees, priority access to new features, and enhanced voting power in governance.
    </p>
  </div>

  <div className="section">
    <h2>Benefits for Investors</h2>

    <h3>1. Liquidity Pool Rewards</h3>
    <p>
      Investors who participate in the liquidity pool can expect <em>competitive returns</em> from transaction fees and profit-sharing. This offers a passive income stream without actively managing their investments.
    </p>

    <h3>2. Decentralized and Transparent Ecosystem</h3>
    <p>
      Built on the decentralized architecture of Pera Blockchain, every transaction is securely recorded on a public ledger, ensuring full transparency and accountability. 
    </p>
    <p>
      The decentralized nature eliminates the risks of central authority manipulation, giving investors confidence in their participation.
    </p>

    <h3>3. Future Growth with Jasmy</h3>
    <p>
      Jasmy's integration with Pera Blockchain and the exchange ensures that the value of the token grows with the platform. As more users engage in trading and staking, demand for <strong>Jasmy</strong> increases, providing <em>high-growth potential</em> for early adopters.
    </p>

    <h3>4. Node Participation Incentives</h3>
    <p>
      By running a validator node, investors can actively contribute to the network’s security while earning additional rewards from block generation and transaction validation. This fosters a strong community involvement and drives the platform’s decentralization.
    </p>
  </div>

  <div className="section">
    <h2>Conclusion</h2>
    <p>
      Our Pera Blockchain-based exchange is set to revolutionize the crypto trading landscape. With <strong>AI-powered trading features</strong>, <strong>liquidity pool rewards</strong>, <strong>node profit sharing</strong>, and the native <strong>Jasmy token</strong>, investors have access to a secure, profitable, and decentralized environment that sets the foundation for long-term success.
    </p>
  </div>
</div>
</div>









{/* 
                <div className="useCaseOther">

                    <div data-aos="fade-up-right"  className="cryptoExchange">
                        <div className="infoBox">
                        <img src={robotic} alt="robotics picss" className="robotics_bg"/>
                            <h1>Crypto Exchange With AI and Robotics</h1>
                            <p>We are excited to introduce our cutting-edge crypto exchange, powered by advanced Japanese robotic technology. The platform offers a range of innovative features, including a demo account, real-time trade news, and instant updates on international markets. Integrated with our AI-driven future trading BOT, the platform has over 25+ intelligent trading strategies, designed to optimize your trading experience and provide you with assured profit from market ups and downs.</p>
                        </div>
                    </div>

                     <div data-aos="fade-up-left"  className="cryptoExchange">
                        <div className="infoBox">
                            <img src={gamingPoster} alt="robotics picss" className="robotics_bg"/>
                            <h1>Decentralized Gaming</h1>
                            <p>Introducing our latest suite of 20+ decentralized gaming applications, providing a truly immersive gaming experience with 100% transparency, accuracy, and complete protection from any form of manipulation. These games offer a secure and reliable solution, revolutionizing the gaming world.</p>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="DSMIN_project">
                        <div className="infoBox">
                            <img src={socialMediaPoster} alt="robotics picss" className="robotics_bg"/>
                            <h1>DSMIN Project</h1>
                            <p>DSMIN (Decentralized Social Media Infrastructure Network)  is revolutionizing social media by introducing decentralized platforms like Decegram (Telegram), DecentChat (WhatsApp), Demail (Gmail), Dacebook (Facebook), and DecTak (TikTok). These platforms prioritize enhanced privacy, data ownership, and security. </p>
                            <h2>Key benefits:</h2>
                            <ul>
                                <li><span>Privacy:</span> User data is stored across decentralized nodes, not controlled by a single entity.</li>
                                <li><span>Censorship Resistance:</span> Content is spread across nodes, making it immune to censorship.</li>
                                <li><span>Data Ownership:</span> Users have full control of their data.</li>
                                <li><span>Tokenized Economies:</span> Users earn tokens for engagement.</li>
                                <li><span>Interoperability:</span> Seamless interaction across platforms.</li>
                                <li><span>Transparency & Security:</span> Blockchain ensures secure, verifiable transactions.</li>
                            </ul>
                            <p>These platforms will allow users to communicate, share, and store data securely, without relying on centralized servers, empowering individuals and communities to take control of their digital lives.</p>
                        </div>
                    </div>


                </div> */}

            </div>
        </>
    )
}

export default S3Features
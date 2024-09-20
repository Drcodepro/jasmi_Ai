 
import "../Styles/KeyNote.css"

 
import keyNotePosterMobile from "../assets/KeyNotePage_asset/keyNotePoster_mobile.webp";
import keyNotePoster from "../assets/KeyNotePage_asset/keynotePoster_laptop.webp";
import metasakLogo from "../assets/KeyNotePage_asset/metamaskLogo.png";
import AirdropLogo from "../assets/KeyNotePage_asset/AirDropLogo.png";
import predictionLogo from "../assets/KeyNotePage_asset/predictionLogo.png";
import alert from "../assets/KeyNotePage_asset/alert.png";
import airdropDistrebutionLogo from "../assets/KeyNotePage_asset/airdropDistrebutionLogo.png";
import lockLogo from "../assets/KeyNotePage_asset/lockLogo.png";
import integrationLogo from "../assets/KeyNotePage_asset/integrationLogo.png";
import globLogo from "../assets/KeyNotePage_asset/globLogo.png";


const KeyNote = () => {

    const keynotePointInfo = [
        { heading: "Official Integration with MetaMask", discription: "Jasmy AI is officially supported on MetaMask, allowing users to easily store, send, and receive Jasmy AICoin (Jasmy AI) within the popular binance Smart Chain wallet.", logo: metasakLogo },
        { heading: "Biggest Airdrop in the Era", discription: "Jasmy AI has executed one of the largest airdrops in recent crypto history, distributing tokens to thousands of early adopters and community members.", logo: AirdropLogo },
        { heading: "Prediction for 2025", discription: "Analysts predict Jasmy AICoin could grow 5x to 10x by 2025, driven by its focus on IoT integration and data privacy, making it a promising investment in the evolving crypto space.", logo: predictionLogo },
        { heading: "Ongoing Airdrop Alerts", discription: "Jasmy AI continues to engage its community with regular airdrop alerts, offering new opportunities for both existing and new users to earn free tokens.", logo: alert },
        { heading: "Successful Airdrop Distribution", discription: "Jasmy AI has successfully distributed tokens from its airdrop campaigns, ensuring participants received their tokens in a timely and transparent manner.", logo: airdropDistrebutionLogo },
        { heading: "User-Controlled Data Locker", discription: "Jasmy AI’s data locker feature allows users to securely store and manage their personal data, giving them full control over who can access it.", logo: lockLogo },
        { heading: "IoT Integration", discription: "Jasmy AI focuses on integrating with IoT devices, allowing seamless data management and transactions between connected devices, making it a leader in the IoT and blockchain convergence.", logo: integrationLogo },
        { heading: "Global Adoption Initiatives", discription: "Jasmy AI is actively working on global expansion strategies, aiming to partner with international firms and institutions to broaden the use of its technology.", logo: globLogo },

    ]
  return (
      <>
          <div className='keyNotePage'>
              <img src={keyNotePoster} alt="keyNote Poster" loading='lazy' className='keynotePoster' />
              <img src={keyNotePosterMobile} alt="keynote poster" loading='lazy' className='keynotePoster_mobile' />

              <div className="keyNoteMain">
                  <h1 className='keyNoteHeading'>AREA OF SPECIALIZATION</h1>
                  <div className="keyNotePoint_container">

                      {keynotePointInfo.map((point, index) => (
                          <div className="keyNotePoint" key={index}>
                              <p className='pointHeading'>{point.heading}</p>

                              <div className="pointInfoBox">
                                  <img src={point.logo} alt="Logo" />
                                  <p>{point.discription}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </>
  )
}

export default KeyNote
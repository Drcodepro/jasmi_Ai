import   { useEffect } from 'react'
import "../Styles/Stages.css"
import seedRoundLogo from "../assets/images/seedRoundLogo.png"
import dimondlogo from "../assets/images/dimond.png"

const Stages = () => {
   
  return (
      <>
          <div className='stagePage_container'>
              <h1 className='stagePage_heading'> JASMY AI STAGES</h1>

              <div className='stage_main'>

                  <div className='center_line'></div>

                  <div className='stageBox_outer_box'>
                      <img src={dimondlogo} alt="" className='dimond_img' />
                      <div className='stageBox_inner_box'>
                          <div className='boxHeading_wraper'>
                              <span className='box_heading'>Pre Seed</span>
                              <img src={seedRoundLogo} alt="" className='box_heading_logo' />
                              <span className='box_heading_mini'>Jasmy AI</span>
                          </div>

                          <div className='box_info_wraper'><p className='box_info_heading'>Total Supply</p> <p className='box_info_discription'>100000000</p> </div>
                          <div className='box_info_wraper'><p className='box_info_heading'>Duration</p> <p className='box_info_discription'>10/09/2024 - 25/09/2024</p> </div>
                          <div className='box_info_wraper'><p className='box_info_heading'>Dilute</p> <p className='box_info_discription'>2% Of total supply (1000000000)</p> </div>
                          {/* <div className='box_info_wraper'><p className='box_info_heading'>Seed Round (Price)</p> <p className='box_info_discription'>$0.01</p> </div> */}
                          <div className='box_info_wraper'><p className='box_info_heading'>Pool Amount</p> <p className='box_info_discription'>$150000</p> </div>
                          {/* <div className='box_info_wraper'><p className='box_info_heading'>Live Price</p> <p className='box_info_discription'>$0.05</p> </div> */}
                      </div>
                  </div>


                  {/*  */}

                  <div className='stageBox_outer_box left_outerBox'>
                      <img src={dimondlogo} alt="" className='dimond_img' />
                      <div className='stageBox_inner_box'>
                          <div className='boxHeading_wraper'>
                              <span className='box_heading'>Private Sale</span>
                              <img src={seedRoundLogo} alt="" className='box_heading_logo' />
                              <span className='box_heading_mini'>Jasmy AI</span>
                          </div>

                          <div className='box_info_wraper'><p className='box_info_heading'>Total Supply</p> <p className='box_info_discription'>1500000000</p> </div>
                          <div className='box_info_wraper'><p className='box_info_heading'>Duration</p> <p className='box_info_discription'>1/10/2024 - 15/10/2024</p> </div>
                          <div className='box_info_wraper'><p className='box_info_heading'>Dilute</p> <p className='box_info_discription'> 3% Total Supply (1500000000)</p> </div>
                          {/* <div className='box_info_wraper'><p className='box_info_heading'>Seed Round (Price)</p> <p className='box_info_discription'>$0.01</p> </div> */}
                          <div className='box_info_wraper'><p className='box_info_heading'>Pool Amount</p> <p className='box_info_discription'>$450000</p> </div>
                          {/* <div className='box_info_wraper'><p className='box_info_heading'>Live Price</p> <p className='box_info_discription'>$0.05</p> </div> */}
                      </div>
                  </div>


                  {/*  */}


                  <div className='stageBox_outer_box'>
                      <img src={dimondlogo} alt="" className='dimond_img' />
                      <div className='stageBox_inner_box'>
                          <div className='boxHeading_wraper'>
                              <span className='box_heading'>Publice Sale</span>
                              <img src={seedRoundLogo} alt="" className='box_heading_logo' />
                              <span className='box_heading_mini'>Jasmy AI</span>
                          </div>

                          <div className='box_info_wraper'><p className='box_info_heading'>Total Supply</p> <p className='box_info_discription'>2500000000</p> </div>
                          <div className='box_info_wraper'><p className='box_info_heading'>Duration</p> <p className='box_info_discription'>16/10/2024 to 31/10/2024</p> </div>
                          <div className='box_info_wraper'><p className='box_info_heading'>Dilute</p> <p className='box_info_discription'>5% Of Total Supply (2500000000)</p> </div>
                          {/* <div className='box_info_wraper'><p className='box_info_heading'>Seed Round (Price)</p> <p className='box_info_discription'>$0.01</p> </div> */}
                          <div className='box_info_wraper'><p className='box_info_heading'>Pool Amount</p> <p className='box_info_discription'>$1750000</p> </div>
                          {/* <div className='box_info_wraper'><p className='box_info_heading'>Live Price</p> <p className='box_info_discription'>$0.05</p> </div> */}
                      </div>
                  </div>
                 
              </div>
          </div>
      </>
  )
}

export default Stages
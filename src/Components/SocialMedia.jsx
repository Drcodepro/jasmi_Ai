// import logo from "../assets/logo/logo-main.png"
import youtube from "../assets/socialmedia/YouTube.png"
import twiter from "../assets/socialmedia/Twitter.png"
import Telegram from "../assets/socialmedia/Telegram App.png"
import Instagram from "../assets/socialmedia/Instagram.png"
import Medium from "../assets/socialmedia/Medium.png"
const SocialMedia = () => {
  return (
      <>
          <div className=" z-[99] phone:hidden fixed top-1/2 left-2 transform   -translate-y-1/2">
              <div  className="flex flex-col gap-1" >
                  <a  data-aos="zoom-in" target="blank" href="https://www.youtube.com/@JasmyAi"> <img  className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={youtube} alt="" /> </a>
                  <a  data-aos="zoom-in" target="blank" href="https://x.com/jasmy_ai "> <img  className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={twiter} alt="" /> </a>
                  <a  data-aos="zoom-in" target="blank" href=" https://t.me/jasmyAiadmin"> <img  className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={Telegram} alt="" /> </a>
                  <a  data-aos="zoom-in" target="blank" href=" https://www.instagram.com/jasmy_ai/?hl=en"> <img  className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={Instagram} alt="" /> </a>
                  <a  data-aos="zoom-in" target="blank" href="https://www.facebook.com/profile.php?id=61565207706922"> <img  className="hover:scale-[1.3] transform-scale duration-300 2xl:w-[2.3vw] " src={Medium} alt="" /> </a>

              </div>
          
          </div>
      </>
  )
}

export default SocialMedia
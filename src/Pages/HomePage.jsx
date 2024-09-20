import   { useEffect} from 'react'
import S1Hero from '../Components/HomeSections/S1Hero'
import { useLocation } from 'react-router-dom';
import S2About from '../Components/HomeSections/S2About';
import S3Features from '../Components/HomeSections/S3Features';
import S4Tokenomics from '../Components/HomeSections/S4Tokenomics';
import S5Roadmapmain from '../Components/HomeSections/S5Roadmap';
import Contract from '../Components/HomeSections/Contract';
import S1_5About from '../Components/HomeSections/S1_5About';
 


const HomePage = () => {
    // Function to scroll to the Card element
    const location1 = useLocation(); 
    useEffect(() => {
        const scrollToElement = () => {
            const { search } = location1;
            const params = new URLSearchParams(search);
            const scrollToId = params.get('');

            if (scrollToId) {
                const element = document.getElementById(scrollToId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        scrollToElement();
    }, [location1]);

  return (
       <>
          <S1Hero />
          <S1_5About/>
          <S2About />
          <S3Features />
          <S4Tokenomics />
          {/* <Contract/> */}
          <S5Roadmapmain/>
      </>
  )
}

export default HomePage
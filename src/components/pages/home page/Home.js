import React from 'react';
import HomeSection from '../../home section/HomeSection';
import Pricing from '../../pricing/Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
    return (
        <>
          <HomeSection {...homeObjOne} />  
          <HomeSection {...homeObjThree} />  
          <HomeSection {...homeObjTwo} />  
          <Pricing />
          <HomeSection {...homeObjFour} />  
        </>
    )
}

export default Home;

import React from 'react'
import './Pricing.css';
import { FaFire, FaRupeeSign } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Button } from '../mybutton/Button'
import { IconContext } from 'react-icons/lib';
const Pricing = () => {
    return (
        <IconContext.Provider value={{color:'#fff'}} >

        <div>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>Pricing</h1>
                    <div className='pricing__container'>
                           {/* Card one  */}
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4><FaRupeeSign className="ruppe-sign" />300</h4>
                                <p>Per Month</p>
                                <ul className='pricing__container-features'>
                                    <li>2% cash back</li>
                                    <li><FaRupeeSign  /> 10,000 limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>

                        {/* card two */}
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill /> 
                                </div>
                                <h3>Gold</h3>
                                <h4><FaRupeeSign  className="ruppe-sign"/>1300</h4>
                                <p>Per Month</p>
                                <ul className='pricing__container-features'>
                                    <li>12% cash back</li>
                                    <li><FaRupeeSign /> 1,00,000 limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>Choose Plan</Button>
                            </div>
                        </Link>

                        {/* card three */}
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>Diamond</h3>
                                <h4><FaRupeeSign className="ruppe-sign"/>13000</h4>
                                <p>Per Month</p>
                                <ul className='pricing__container-features'>
                                    <li>30% cash back</li>
                                    <li>Unlimited spending</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>  

    )
}

export default Pricing

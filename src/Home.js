import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />

                <div className="home__row">
                    <Product
                        id={1}
                        title="Kenwood kMix Stand Mixer for the Baking, Stylish"
                        price= {92.4} 
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'/>
                    <Product
                        id={2}
                        title="The Lean setup"
                        price= {992.4} 
                        rating={2}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/>
                </div>
                <div className="home__row">
                    <Product
                        id={3}
                        title="Sumsung LC Curved Led Gaming Monitor"
                        price= {922.4} 
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'/>
                    <Product
                        id={4}
                        title="Amazon Echo 3rd Generation"
                        price= {992.4} 
                        rating={2}
                        image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?#300x400_retinamobilex2$'/>
                    <Product
                        id={5}
                        title="New Apple IPad"
                        price= {992.4} 
                        rating={2}
                        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'/>
                </div>
                <div className="home__row">
                    <Product
                        id={6}
                        title="Samsumg Curved Gaming Monitor"
                        price= {1002.4} 
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'/>
                </div>
            </div>
        </div>
    )
}
export default Home;
import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

import logo from '../../images/Logo.svg';
import {FiArrowRight} from 'react-icons/fi';



const Landing: React.FC = () => {
    return(
            <div id="page-landing">
              <div className="content-wrapper">
                <img src={logo} alt="Happy"/>

                <main>
                    <h1>
                        Lleve felicidad para el mundo
                    </h1>
                    <p>Visitá un orfanato y cambie el día 
                        de muchos chiquelines
                    </p>
                </main>
                
                <div className="location">
                    <strong>Montevideo</strong>
                    <span>Uruguay</span>
                </div>

                <Link to="/orfanatos" className="enter-app">
                    <FiArrowRight  size={26} color="rgba(0, 0, 0, 0.6)"/>
                </Link>
              </div>
            </div>
    );
};

export default Landing;
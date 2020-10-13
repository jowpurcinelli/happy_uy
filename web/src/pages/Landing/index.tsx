import React from 'react';
import './styles.css';

import logo from '../../images/Logo.svg'

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
              </div>
            </div>
    )
}

export default Landing;
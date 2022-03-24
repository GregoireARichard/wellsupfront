import React, { useEffect } from 'react';
import './results.css'

import WellSupRose from '../../img/wellSupPink.svg'

function Results(){
    let url = new URLSearchParams(window.location.href);
    let arrayOfGet = []

    for(let item of url.entries()){
        arrayOfGet.push(item[1])
    }

    console.log(arrayOfGet)

    useEffect(() => {
        for(let i = 0; i <= arrayOfGet.length-1; i++){
            if(i >=0 && i <= 5){
                document.querySelector(`.firstCard  .arg${i+1}`).innerHTML = arrayOfGet[i]
            }
            else if(i >5 && i <= 11){
                document.querySelector(`.subCard2  .arg${i-5}`).innerHTML = arrayOfGet[i]
            }
            else if (i > 11) {
                document.querySelector(`.subCard3  .arg${i-11}`).innerHTML = arrayOfGet[i]
            }
        }    
    });

    return(
        <div className='results-container'>
            <h1>
                <img src={WellSupRose} alt='Le logo de WellSup'/>
            </h1>
            <strong>Attention, cette liste ne sera pas sauvegardée.</strong>
            <p className='p-copie-link'>Copie le lien de ta liste pour pouvoir retourner la voir dès que tu en as besoin !</p>
            <div className='dl-button'>
                <span>Télécharger</span>
            </div>
            <div className="resultCards">
                <div className="firstCard resultcard">
                        <h3 className='arg1'></h3>
                        <div className='infos-icon-container'>
                            <p className="arg2"></p>
                        </div>         
                    <div className="subCard subCard1">   
                        <p className="arg3"></p>
                        <p className="arg4"></p>
                        <p className="arg5"></p>
                        <p className="arg6"></p>

                    </div>

                </div>
                <div className="secondCard resultcard">
                    <div className="subCard subCard2">
                        <h3 className='arg1'></h3>
                        <p className="arg2"></p>
                        <p className="arg3"></p>
                        <p className="arg4"></p>
                        <p className="arg5"></p>
                        <p className="arg6"></p>

                    </div>

                </div>
                <div className="thirdCard resultcard">
                    <div className="subCard subCard3">
                        <h3 className='arg1'></h3>
                        <p className="arg2"></p>
                        <p className="arg3"></p>
                        <p className="arg4"></p>
                        <p className="arg5"></p>
                        <p className="arg6"></p>

                    </div>

                </div>
            </div>
        </div>
    )        
}
export default Results;
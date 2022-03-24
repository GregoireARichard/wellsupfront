import React, { useEffect } from 'react';
import './results.css'

import WellSupRose from '../../img/wellSupPink.svg'
import EcoleCard from './EcoleCard/EcoleCard';

function Results(){
    let url = new URLSearchParams(window.location.href);
    let arrayOfGet = []

    for(let item of url.entries()){
        arrayOfGet.push(item[1])
    }


    const ecolesList = [
        {id:0,ecoleName:arrayOfGet[0],programmeName:arrayOfGet[1],anneeFormation:arrayOfGet[2],formationTheme:arrayOfGet[3],site:arrayOfGet[4],telephone:arrayOfGet[5]},
        {id:1,ecoleName:arrayOfGet[6],programmeName:arrayOfGet[7],anneeFormation:arrayOfGet[8],formationTheme:arrayOfGet[9],site:arrayOfGet[10],telephone:arrayOfGet[11]},
        {id:2,ecoleName:arrayOfGet[12],programmeName:arrayOfGet[13],anneeFormation:arrayOfGet[14],formationTheme:arrayOfGet[15],site:arrayOfGet[16],telephone:arrayOfGet[17]}
    ]

    let ecolesListMap = ecolesList.map(ecole=>(<EcoleCard key={ecole.id} ecole={ecole}/>))

    console.log(ecolesListMap)

    

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
                {ecolesListMap}
            </div>
        </div>
    )        
}
export default Results;
import React, { useState } from 'react'
import './EcoleCard.css'

import infoIcon from '../img/infoIcon.svg'

const EcoleCard = (props) => {

    let [seeMore, setSeeMore] = useState(true)

    let handleSeeMore = ()=>{
        setSeeMore(!seeMore)
    }

    console.log(props)
  return (
    <div className={seeMore ? "seeLess" : "seeMore"}>
        <div className='ecole-info'>
            <h3>{props.ecole.programmeName}</h3>
            <div className='ecole-seemore-infos'>
                <span className='ecole-name'><strong>Ecole : </strong>{props.ecole.ecoleName}</span>
                <span className='annees-formation'><strong>Années de formation : </strong>{props.ecole.anneeFormation}</span>
                <span className='theme-formation'><strong>Thème : </strong>{props.ecole.formationTheme}</span>
                <span className='website-ecole'><strong>Site Web : </strong>{props.ecole.site}</span>
                <span className='tel-ecole'><strong>Téléphone : </strong>{props.ecole.telephone}</span>
            </div>
            <img src={infoIcon} onClick={handleSeeMore}/>
            
        </div>
    </div>
  )
}

export default EcoleCard
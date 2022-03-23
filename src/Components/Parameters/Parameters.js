import React from 'react'
import './Parameters.css'

import Loulou from './img/Loulou.png'
import Greghoe from './img/Greghoe.jpg'
import Pierrot from './img/Pierrot.jpg'
import Lenaze from './img/Lenaze.jpg'
import Patxhoe from './img/Patxhoe.jpg'
import Louloose from './img/Louloose.jpg'
import Flow from './img/Flow.jpg'


import Card from './Card/Card'
import logoPink from '../../img/wellSupPink.svg'

const Parameters = () => {

  const teamMember = [
    {
      id:0,
      name:'Grégoire Richard',
      post:'Développeur Back-End',
      img:Greghoe,
      link:'https://kokorirko.github.io/portfolio-Greg/'
    },
    {
      id:1,
      name:'Louis Cuenot',
      post:'Développeur Front-End',
      img:Loulou,
      link:'https://louiscuenot.com'
    },
    {
      id:2,
      name:'Pierre Clerc',
      post:'Développeur Back-End',
      img:Pierrot,
      link:'https://www.linkedin.com/in/pierre-clrc/'
    },
    {
      id:3,
      name:'Floriane Ryan',
      post:'UI / UX Designer',
      img:Flow,
      link:'https://floriane-ryan.com/'
    },
    {
      id:4,
      name:'Patxi Manzano',
      post:'UI / UX Designer',
      img:Patxhoe,
      link:''
    },
    {
      id:5,
      name:'Léna Vulliez',
      post:'UX Designer',
      img:Lenaze,
      link:''
    },
    {
      id:6,
      name:'Louise Supplisson',
      post:'UX Designer',
      img:Louloose,
      link:''
    },
  ]

  let teamMembersMap = teamMember.map(teamMember=>(<Card key={teamMember.id} teamMember={teamMember}/>))



  return (
    <div className='parameters-container'>
        <h1>
          <img src={logoPink} alt='WellSup'/>
        </h1>
        <div className='parameters-title'>
          <h2>Paramètres</h2>
          <p>Hello ! Merci de venir voir nos belles têtes !Nous sommes une équipe d’étudiants motivés à HETIC, là pour vous aider à trouver votre voie. N’hésitez pas à nous contacter si vous avez des notes positives ou négatives, on apprend encore ❤️</p>
        </div>
        <div className='card-container'>
            {teamMembersMap}
        </div>
        <div className='parameters-ressources'>
          <h2>Nos resources</h2>
          <div>
            <h3>Titre du lien :</h3>
            <a href=''>https://www.40-60studio.com/contactez-nous</a>
            <h3>Titre du lien :</h3>
            <a href=''>https://www.40-60studio.com/contactez-nous</a>
          </div>  
        </div>
        <div className='parameters-mentions'>
            <h2>Mentions légales</h2>
            <p>Nous ne sommes pas une entreprise. Nous n’avons pas de but lucratif. Les données personnelles ne sont pas collectées. Si vous avez plus de questions, n’hésitez pas à nous contacter.</p>
        </div>
        <div className='parameters-conditions'>
            <h2>Conditions d'utilisation</h2>
            <p>Ce site est un site gratuit, il a été créé à des fins d’apprentissage. Les données sont stockées dans une base de données, mais sont anonymes et ne sont pas utilisées.</p>
        </div>
    </div>
  )
}

export default Parameters
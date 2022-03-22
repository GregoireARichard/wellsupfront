import React from 'react'
import './Parameters.css'

import Loulou from './img/Loulou.png'
import Card from './Card/Card'

const Parameters = () => {

  const teamMember = [
    {
      id:0,
      name:'Grégoire Richard',
      post:'Développeur Back-End',
      img:Loulou
    },
    {
      id:1,
      name:'Louis Cuenot',
      post:'Développeur Front-End',
      img:Loulou
    },
    {
      id:2,
      name:'Pierre Clerc',
      post:'Développeur Back-End',
      img:Loulou
    },
    {
      id:3,
      name:'Floriane Ryan',
      post:'UI / UX Designer',
      img:Loulou
    },
    {
      id:4,
      name:'Patxi Manzano',
      post:'UI / UX Designer',
      img:Loulou
    },
    {
      id:5,
      name:'Léna Vulliez',
      post:'UX Designer',
      img:Loulou
    },
    {
      id:6,
      name:'Louise Supplisson',
      post:'UX Designer',
      img:Loulou
    },
  ]

  let teamMembersMap = teamMember.map(teamMember=>(<Card key={teamMember.id} teamMember={teamMember}/>))

  console.log(teamMembersMap)


  return (
    <div className='parameters-container'>
        <h1>
            Logo
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
            <p>Texte des mentions légals Texte des mentions légals Texte des mentions légals Texte des mentions légals Texte des mentions légals Texte des mentions légals</p>
        </div>
        <div className='parameters-conditions'>
            <h2>Conditions d'utilisation</h2>
            <p>Texte des mentions légals Texte des mentions légals Texte des mentions légals Texte des mentions légals Texte des mentions légals Texte des mentions légals</p>
        </div>
    </div>
  )
}

export default Parameters
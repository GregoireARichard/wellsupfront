import React, {useState} from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router'
import {themes, questions, mappedQuestions} from '../Data/Data.js'
import axios from "axios"; 

import ReactSwipe from 'react-swipe'
import './SwipperPage.css'

import cancel from './img/cancel.svg'
import validate from './img/validate.svg'

import logoPink from '../../img/wellSupPink.svg'

const SwipperPage = () => {

  const [chosenThemeString, setThemeChosen] = useState(null)
  const navigate = useNavigate()

    const options = [
      { value: 'Agriculture', label: 'Agriculture' },
      { value: 'Architecture/Urbanisme', label: 'Architecture/Urbanisme' },
      { value: 'Banque/Assurance', label: 'Banque/Assurance' },
      { value: 'Traduction/Interprétation', label: 'Traduction/Interprétation' },
      { value: 'Communication/Journalisme', label: 'Communication/Journalisme' },
      { value: 'Audio visuel/Édition', label: 'Audio visuel/Édition' },
      { value: 'Bâtiments/Travaux publics', label: 'Bâtiments/Travaux publics' },
      { value: 'Droit/Eco/Gestion', label: 'Droit/Eco/Gestion' },
      { value: 'Enseignement', label: 'Enseignement' },
      { value: 'Hôtellerie/Restauration/Tourisme', label: 'Hôtellerie/Restauration/Tourisme' },
      { value: 'Art/Mode', label: 'Art/Mode' },
      { value: 'Industrie/Ingénieur', label: 'Industrie/Ingénieur' },
      { value: 'Informatique/Internet/Web', label: 'Informatique/Internet/Web' },
      { value: 'Commerce/Marketing', label: 'Commerce/Marketing' },
      { value: 'Médical/Social/Sport', label: 'Médical/Social/Sport' }
    ]

    const [sectionActive, setSectionActive] = useState(true)  

    let handleThemeChange = (e) => {
      setThemeChosen(e.value)
      setChosenTheme(themes[chosenThemeString])
    }

    let swapDisplay = () =>{
      if(chosenThemeString != null){
        setSectionActive(!sectionActive)
        setChosenTheme(themes[chosenThemeString])
        setQuestion(themes[chosenThemeString].find(1).value)
        //setQuestion(chosenTheme.find(1).value)
      }
    }

    let reactSwipeEl;
    let indexOnSlide;

    let [userChoice, setUserChoice] = useState([])
    let [currentState, setCurrentState] = useState(0)

    let [chosenTheme, setChosenTheme] = useState();
    let [currentPosition, setCurrentPosition] = useState("1")
    let [question, setQuestion] = useState("")
    let [selectedThemes, setSelectedThemes] = useState([])
    let [dataToSend, setDataToSend] = useState([])

    let handleTaskBar = () => {
      if (selectedThemes.length) // Global questions checked
      {
        if ((dataToSend['location'] === false) || (dataToSend['idf'] === true) || (dataToSend['bigTown'] !== undefined)) { // Send data
          
          setQuestion("Travail terminé !")

          if (dataToSend['idf'] === undefined) {
            dataToSend['idf'] = "null"
          }
          if (dataToSend['bigTown'] === undefined) {
            dataToSend['bigTown'] = "null"
          }

          let route = "http://localhost:4000/request/?"
          for (const [key, value] of Object.entries(dataToSend)) {
            route += `${key}=${value}&`
          }

          //for(let i = 0; i < selectedThemes.length; i++) {
            //console.log(`theme${i+1}
          //}

          for(let i = 0; i < selectedThemes.length; i++){
            route += `theme${i+1}=${selectedThemes[i].replace(/ /g, "%20")}&`
          }

          route = route.slice(0, -1)
          console.log(route)

          window.location.replace(route)

          // axios({
          //   method: 'get',
          //   url: route
          // })   

          // /request/?yoStudy=true&paid=false&alternship=true
          //&stateRecognized=true&location=false&idf=null&bigTown=null
          //&theme1=agriculture&theme2=animaux&theme3=agroalimentaire
        }
        else { // Next question
          setQuestion(questions[mappedQuestions[currentPosition]])
          setCurrentPosition(currentPosition+1)
        }
      }
    }

    let likedQuestion = () =>{
        setUserChoice(array => [...array, true]) 
        setCurrentState(currentState+1)

        if (selectedThemes.length === 0)
        {
          if (!chosenTheme.find(parseInt(currentPosition)).isLeaf) {
            if (Array.isArray(chosenTheme.right(parseInt(currentPosition)).value)) {
              setSelectedThemes(chosenTheme.right(parseInt(currentPosition)).value)
              setCurrentPosition(1)
              dataToSend[mappedQuestions[0]] = true;
              setQuestion(questions[mappedQuestions[0]])
            }
            else if (chosenTheme.find(parseInt(currentPosition+"2")).value === "REDIRECTION")
            {
              navigate("/")
            }
            else {
              setQuestion(chosenTheme.right(parseInt(currentPosition)).value)
              setCurrentPosition(currentPosition+"2")
            }
          }
        }
        else
        {
          dataToSend[mappedQuestions[currentPosition-1]] = true;
        }

        handleTaskBar()
    }

    let dislikedQuestion = () =>{
      setUserChoice(array => [...array, true]) 
      setCurrentState(currentState+1)

      if (selectedThemes.length === 0)
      {
        if (!chosenTheme.find(parseInt(currentPosition)).isLeaf) {
          if (Array.isArray(chosenTheme.left(parseInt(currentPosition)).value)) {
            setSelectedThemes(chosenTheme.left(parseInt(currentPosition)).value)
            setCurrentPosition(1)
            dataToSend[mappedQuestions[0]] = false;
            setQuestion(questions[mappedQuestions[0]])
          }
          else if (chosenTheme.find(parseInt(currentPosition+"1")).value === "REDIRECTION")
          {
            navigate("/")
          }
          else {
            setQuestion(chosenTheme.left(parseInt(currentPosition)).value)
            setCurrentPosition(currentPosition+"1")
          }
        }
      }
      else
      { 
        dataToSend[mappedQuestions[currentPosition-1]] = false;
      }

      handleTaskBar()
  }


    return (
      <div className='swipper-page'>
        <h1>
          <img src={logoPink} alt='WellSup'/>
        </h1>
        <div className={sectionActive ? "isActive" : "notActive"} id='choose-theme-container'>
          <div className='select-container'>
            <label >Choisissez un thème :</label>
            <Select options={options} placeholder='Choisissez un thème' onChange={handleThemeChange} />
          </div>
          <div className='swap-button' onClick={swapDisplay}>
            <span>Valider</span>
          </div>
        </div>
        <ReactSwipe
          className={sectionActive ? "notActive" : "isActive"}
          id='carousel'
          swipeOptions={{
               continuous: true,
               startSlide:1,
               transitionEnd: ()=>{
                indexOnSlide = reactSwipeEl.getPos()
                if(indexOnSlide===0){
                  dislikedQuestion()
                }else if(indexOnSlide===2){
                  likedQuestion()
                }
                
               },
               
            }}
          ref={el => (reactSwipeEl = el)}
        >
          <div className='sossur1'>
            
          </div>
          <div className='question-card-container'>
            <div className='question-card'>
                <h3>{question}</h3>
                <div className='button-container'>
                  
                    <img src={cancel} alt='a dislike button' onClick={dislikedQuestion}/>
                  
                  
                    <img src={validate} alt='a like button' onClick={likedQuestion}/>
                  
              </div>
            </div>
          </div>
          <div className='sossur3'>

          </div>
          
        </ReactSwipe>
      </div>
    );
}

export default SwipperPage
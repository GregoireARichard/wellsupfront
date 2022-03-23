import React from 'react';

function Results(){
    let url = new URLSearchParams(window.location.href);
    let arrayOfGet = []
    for(let item of url.entries()){
        arrayOfGet.push(item[1])
    }
    console.log(arrayOfGet)
    for(let i = 0; i <= arrayOfGet.length-1; i++){
        //document.querySelector(`.arg${i+1}`).innerHTML = arrayOfGet[i]
        if(i >0 && i <= 5){
            console.log(i + " : " + arrayOfGet[i])
        }
        
        else if(i >5){ //secondCard
            //document.querySelector(`.subCard2 > .arg${i}`).innerHTML = arrayOfGet[i]
            console.log(i + " : " + arrayOfGet[i])
        }
        else if (i > 11){//thirdCard
            console.log(i + " : " + arrayOfGet[i])
            document.querySelector(`.subCard3 > .arg${i}`).innerHTML = arrayOfGet[i]
        }
    }
   
    return(
        <div>
            <h1>Résultats</h1>
            <div className="resultCards">
                <div className="firstCard">
                    <h2 className="cardTitle">résultat 1</h2>
                    <div className="subCard subCard1">
                        <p className="arg1"></p>
                        <p className="arg2"></p>
                        <p className="arg3"></p>
                        <p className="arg4"></p>
                        <p className="arg5"></p>
                        <p className="arg6"></p>

                    </div>

                </div>
                <div className="secondCard">
                    <h2 className="cardTitle">résultat 2</h2>
                    <div className="subCard subCard2">
                        <p className="arg1"></p>
                        <p className="arg2"></p>
                        <p className="arg3"></p>
                        <p className="arg4"></p>
                        <p className="arg5"></p>
                        <p className="arg6"></p>

                    </div>

                </div>
                <div className="thirdCard">
                    <h2 className="cardTitle">résultat 3</h2>
                    <div className="subCard subCard3">
                        <p className="arg1"></p>
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
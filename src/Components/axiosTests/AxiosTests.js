import axios from "axios"; 
import React from 'react';


function AxiosTests(){
    let global = {
        yoStudy : true,
        paid : false,
        alternship: true,
        stateRecognized : true,
        location: false,
        idf: null,
        bigTown : null
        }
    let themes = [
        "agriculture",
        "animaux",
        "agroalimentaire"
    ]
    const sendRequest = ()=>{
        const route = "https://h3-proxy.services.quickpipes.io/team1/request"
        let urlPart1 = ""
        let urlPart2 = ""
        for(const [key, value] of Object.entries(global)){
            if(key === "yoStudy"){
                urlPart1 += `?${key}=${value}`
            }
            else{
                urlPart1 += `&${key}=${value}`
            }
        }
        let i = 0
        for(const theme of themes){
            i++
            urlPart2 += `&theme${i}=${theme}`
        }
        axios({
            method: 'get',
            url: route + urlPart1 + urlPart2
        })      
    }
    let url = new URL(window.location.href);
    const parsed = url.search
    console.log(url.search)
    return(
        <div>
            <h1>Test Axios</h1>
            <form>
                <input className="inputGenerate" type="button" value="Send request" onClick={sendRequest}/>
            </form>
        </div>
    )
}
export default AxiosTests;
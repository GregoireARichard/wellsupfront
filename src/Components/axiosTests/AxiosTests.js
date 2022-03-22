import axios from "axios"; 
import React from 'react';


function AxiosTests(){
    let infoArray = [
        "exemple",
        "exemple2",

    ]
    const sendRequest = ()=>{
        const route = "http://localhost:4000/request/"
        axios({
            method: 'get',
            url: route + '?exemple=' + infoArray[0] + '&exemple2=' + infoArray[1]
        })
    }
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
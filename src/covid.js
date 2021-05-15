import React, { useEffect, useState } from "react";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



const Covid = () =>{

    const [ data,setData] = useState([]);

    const getCovidData = async ()=>{
        try{
            const response = await fetch('https://api.covid19india.org/data.json')
            const actualData = await response.json();
            //console.log(actualData)
            console.log(actualData.statewise[0]);  
            setData(actualData.statewise[0]);
        }
        catch(err){
            console.log(err);
        } 
    }

    useEffect(()=>{
        getCovidData();
    }, []);

    

    return(
        <>
            <section className="bcg-section text-center container">
                <h4>🔴 Live</h4>
                <h2>Covid-19 India Tracker</h2>

                <div className="boxes container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="color-box1 col-6 col-md-4">
                                    <h5>our Country</h5>
                                    <h1>India</h1>
                                </div>
                                <div className="color-box2 col-6 col-md-4">
                                    <h5>total Recoverd</h5>
                                    <h1>{data.recovered}</h1>
                                </div>
                                <div className="color-box3 col-6 col-md-4">
                                    <h5>total Confirmed</h5>
                                    <h1>{data.confirmed}</h1>
                                </div>
                                <div className="color-box4 col-6 col-md-4">
                                    <h5>total Deaths</h5>
                                    <h1>{data.deaths}</h1>
                                </div>
                                <div className="color-box5 col-6 col-md-4">
                                    <h5>total Active</h5>
                                    <h1>{data.active}</h1>
                                </div>
                                <div className="color-box6 col-6 col-md-4">
                                    <h5>last Updated</h5>
                                    <h1>{data.lastupdatedtime}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

                <p className="f">Designed by Krutik Patel, built on ReactJs & Sass</p>

            </section>
        </>
    )
}

export default Covid
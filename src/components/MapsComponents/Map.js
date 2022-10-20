import React, { useState,useEffect } from 'react'
import { useJsApiLoader,GoogleMap, Marker } from '@react-google-maps/api';

//sweetalert notification
import { successAlert, failedAlert } from "../../helpers/sweetalerthelper";

// import css styles
import styles from "../../styles/mapStyles/map.module.css";

//import context
import {useAuth} from "../../context/AuthContext";

//api key 
const apiKey ='AIzaSyA8e2MxscEYHjSUKmXGFqV5iGtlkcC6ja8';

//locations
const centerSingapore = {lat: 1.352 , lng:103.820 };

//dummy data for markers of preschools
const preschools = [{"location": {lat: 1.3936324613004758, lng:  103.90174541069825 }, "preschool name":  "Little Footprints Preschool" , rating: "4/5"},
                    {"location": {lat: 1.353028461065668,  lng: 103.94281363921853 , }, "preschool name":  "MindChamps Preschool" , rating: "3/5"},
                    {"location": {lat: 1.327393293186638, lng: 103.93235807110402 }, "preschool name":   "SuperGenius Preschool ", rating: "5/5"},
                    {"location": {lat: 1.3814505095165257, lng: 103.94571206208387 }, "preschool name":   "Learning Adventure Preschool", rating: "4/5"}]

const Map = () => {

    //useContext
    const {userLocation} = useAuth();
    
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: apiKey ,
    })


    if (!isLoaded)
    {
        return (
        <div>
            {/* {failedAlert("Loading of map unsuccessful", "Please refresh and try again")} */}
        </div>)
    }

    return (
        <div style={{height: "100vh", maxWidth: "100vw"}}>
            <GoogleMap center={centerSingapore} zoom={12.5} mapContainerStyle={{width: "100%", height: "100%"}}>
                {preschools.map((preschool,index)=>{
                    return(
                        <div className='preschool' key={index}>
                            <Marker  position={preschool.location} />
                            <div className='preschool-content'>
                                <h2>{preschool['preschool name']}</h2>
                                <p>Rating: {preschool.rating}</p>
                            </div>
                        </div>
                    )
                })}


            </GoogleMap>

        </div>
    )
}

export default Map
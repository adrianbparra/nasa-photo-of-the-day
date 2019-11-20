import React, {useEffect} from "react";
import axios from "axios";

export default function ImageSet() {

    

    const didUpdate = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=PsVAVhFVcMYkBCIbBFzidg1gScBQ94QGkYq8Ig7y")
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error));
    };


    

    return (
        <div>Image Set</div>
    )
}
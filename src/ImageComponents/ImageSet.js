import React, {useEffect, useState} from "react";
import axios from "axios";
import ImageDes from "./ImageDes";


export default function ImageSet() {


//     copyright: "Mauricio Salazar"
// date: "2019-11-19"
// explanation: "Can a lighthouse illuminate a galaxy? No, but in the featured image, gaps in light emanating from the Jose Ignacio Lighthouse in Uruguay appear to match up nicely, although only momentarily and coincidently, with dark dust lanes of our Milky Way Galaxy. The bright dot on the right is the planet Jupiter.  The central band of the Milky Way Galaxy is actually the central spiral disk seen from within the disk. The Milky Way band is not easily visible through city lights but can be quite spectacular to see in dark skies.  The featured picture is actually the addition of ten consecutive images taken by the same camera from the same location.  The images were well planned to exclude direct light from the famous lighthouse."
// hdurl: "https://apod.nasa.gov/apod/image/1911/LighthouseMilkyWay_Salazar_3892.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Milky Way over Uruguayan Lighthouse"
// url: "https://apod.nasa.gov/apod/image/1911/LighthouseMilkyWay_Salazar_960.jpg"

    const [imageData, setImageData] = useState({});
    
    const didUpdate = () => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=PsVAVhFVcMYkBCIbBFzidg1gScBQ94QGkYq8Ig7y")
            .then(response => {
                console.log(response.data);
                setImageData(response.data);
            })
            .catch(error => console.log(error));
    };

    useEffect(didUpdate, []);
    
    console.log(imageData.url)

    return (
        
        <ImageDes imageData={imageData}/>
        
    )
}


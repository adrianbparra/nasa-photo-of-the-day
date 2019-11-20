import React from "react";
// import ImageSet from "./ImageSet";

function ImageDes(props) {

    //     copyright: "Mauricio Salazar"
// date: "2019-11-19"
// explanation: "Can a lighthouse illuminate a galaxy? No, but in the featured image, gaps in light emanating from the Jose Ignacio Lighthouse in Uruguay appear to match up nicely, although only momentarily and coincidently, with dark dust lanes of our Milky Way Galaxy. The bright dot on the right is the planet Jupiter.  The central band of the Milky Way Galaxy is actually the central spiral disk seen from within the disk. The Milky Way band is not easily visible through city lights but can be quite spectacular to see in dark skies.  The featured picture is actually the addition of ten consecutive images taken by the same camera from the same location.  The images were well planned to exclude direct light from the famous lighthouse."
// hdurl: "https://apod.nasa.gov/apod/image/1911/LighthouseMilkyWay_Salazar_3892.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Milky Way over Uruguayan Lighthouse"
// url: "https://apod.nasa.gov/apod/image/1911/LighthouseMilkyWay_Salazar_960.jpg"
    

console.log(props.imageInfo)

    return (

        <div>
            <img src={`${props.imageData.hdurl}`} alt={`${props.imageData.title}`}/>
            <h2>{props.imageData.title}</h2>
            <span>{props.imageData.copyright}</span>
            <p>{props.imageData.explanation}</p>
        </div>
    )


}

export default ImageDes;
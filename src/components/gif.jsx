import { GiphyFetch } from '@giphy/js-fetch-api'
import React from "react"
let url = "test";
function GetGif(props) {

    (async () => {
    const gf = new GiphyFetch('48JLIVrKAOVeib8qaUSLRpHuqeYqrPSb');
    const {data: gif} = await  gf.random({ tag: props.name, type: 'stickers' });
    console.log(gif.images.fixed_height_downsampled.url)
    url = gif.images.fixed_height_downsampled.url

    })();
    
    return (
        <img src={url} alt="Not Found Gif"></img>
        )
}

export default GetGif
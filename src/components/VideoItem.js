import React from 'react'
import './videoitem.css'

// const selectedVideo = () =>{
//     return props.onVideoSelect(props.videos.title)
// }
const VideoItem = (props) =>{
    console.log('pip',props)
    return(
        <div className = 'item video-item' onClick={()=>props.onVideoSelect(props.videos)}>
            <img  className="ui image"  src = {props.videos.snippet.thumbnails.medium.url}  ></img>
            <div className="content">
                <div className="header" >          
                    {props.videos.snippet.title}
                </div>
            </div>
        </div>
    )
}


export default VideoItem
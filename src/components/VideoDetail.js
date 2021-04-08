import React from 'react'
import VideoItem from './VideoItem'

const VideoDetail = (props) =>{
    console.log('5',props);
    if(!props.selectedVideo){
        return(<div>Loading..</div>)
    }
    let script_path = "https://www.youtube.com/embed/"+props.selectedVideo.id.videoId
    return(
        <div>
            <div className="ui embed">
                <iframe title="myvideo" src={script_path}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{props.selectedVideo.snippet.title}</h4>
                <p>{props.selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDetail
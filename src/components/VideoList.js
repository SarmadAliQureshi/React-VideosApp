import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) =>{
    const renderedList = videos.map((item)=>{
     console.log('item',item);
     return <VideoItem onVideoSelect = {onVideoSelect} videos = {item}/>
    })
    console.log('pro');
    return(


      <div class="ui relaxed divided list">
            {/* Video List : {videos.length} */}
            {renderedList}
        </div>

    )
}

export default VideoList;
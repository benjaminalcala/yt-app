import React from 'react';
import VideoDetail from './VideoDetail';

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map(video => {
        return <VideoDetail onVideoSelect={onVideoSelect} id={video.id.videoId} video={video}/>
    })
    return(
        <div className='ui relaxed divided list'> 
            {renderedList}
        </div>
    );

}

export default VideoList;
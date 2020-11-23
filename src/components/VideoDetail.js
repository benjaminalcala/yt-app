import './VideoDetail.css';
import React from 'react';


const VideoDetail = ({video, onVideoSelect}) => {
    const {thumbnails, description, title} = video.snippet
    return(
        <div onClick={()=> onVideoSelect(video)} className="video-detail item">
            <img className="ui image" src={thumbnails.high.url} alt={description}/>
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
}
export default VideoDetail;
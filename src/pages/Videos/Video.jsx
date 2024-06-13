import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

    const {videoId,categoryId} = useParams();

    return(
        <div className='play-container'>
            <div className='videoContainer'>
            <PlayVideo videoId={videoId}/>
            </div>
            <div>
            <Recommended categoryId={categoryId}/>
            </div>
            
        </div>
    )
}

export default Video

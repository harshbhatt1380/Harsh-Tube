import React, { useState, useEffect } from'react'
import './PlayVideo.css'
import video1 from '../../assets/video1.MP4'
import like from '../../assets/like.jpg'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.jpg'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/profilep.png'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

    const {videoId} = useParams();

   const[apiData,setApiData] = useState(null)

   const[channelData,setChannelData]= useState(null)

   const[commentData,setCommentData]= useState([]);

   const [isSubscribe,setIsSubscribe]=useState('Subscribe')

   console.log(apiData)
   console.log("commetn data :",commentData)

   const handleSubscribeButton=()=>{
    isSubscribe==="Subscribe"?setIsSubscribe("Unsubscribe"):setIsSubscribe("Subscribe")
   }

   const fetchVideoData = async() =>{
    // Fetching Video Data
    const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]));  
}

 const fetchOtherData = async() =>{
    // Fetching Channel Data
     const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId?.snippet?.channelId}&key=${API_KEY}`;
     console.log("channel data: ",channelData_url)
     await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

    //Fetching Comment Data

    console.log("video key : ",videoId)
    console.log("api key : ",API_KEY)

    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`


    console.log('commetn url is : ',comment_url)
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));

 }

useEffect(()=>{
 fetchVideoData();
},[videoId])

useEffect(()=>{
    fetchOtherData();
},[apiData])

    return(
        <div className='play-video'>
            {/*<video src={video1} controls autoPlay muted></video>*/}
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <p>
                    {apiData?value_converter(apiData.statistics.viewCount):"16k"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}
                </p>
                <div>
                    <span><img src={like} alt=""/>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
                    <span><img src={dislike} alt=""/>2</span>
                    <span><img src={share} alt=""/>Share</span>
                    <span><img src={save} alt=""/>Save</span>
                </div>
            </div>
            <hr/>
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:""}</p>
                    <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
                </div>
                <button className={`subscribe-btn ${isSubscribe === 'Subscribe' ? 'subscribe' : 'unsubscribe'}`}
                    onClick={handleSubscribeButton}>{isSubscribe}</button>
            </div>
            <div className="vid-description">
                <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
                <p>Subscribe for more content</p>
                <hr/>
                <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
                {commentData.map((item,index)=>{
                    
                    return(
                        <div key={index} className="comments">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                               <img src={value_converter(item.snippet.topLevelComment.snippet.likeCount)} alt="" />
                               <span>244</span>
                               <img src={dislike} alt="" />
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                    )
                })}
               
            </div>
        </div>
    )
}

export default PlayVideo
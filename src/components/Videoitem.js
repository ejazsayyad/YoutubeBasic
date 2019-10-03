import React from "react";
import vvideoitem from "./videoitem.css";
const Videoitem=({video,onvideoselect})=>{
    return(
    <div onClick={()=>onvideoselect(video)} className="video-item item">
        <img className="ui image" alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
        
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
        
        </div>);
};
export default Videoitem;
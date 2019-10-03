import React from "react";
import Videoitem from "./Videoitem";

//rendering list of items using map where video(plural) is argument 
//and what we did is we used map function of JS 
const Videolist=( {videos, onvideoselect} )=> {
    const renderedlist = videos.map(video=>{
       return <Videoitem key={video.id.videoId} onvideoselect={onvideoselect} video={video}/>;//for each video in videos array we are rendering videoitem
    });

    //below return gives JSX
    return(

    <div className="ui relaxed divided list">
        {renderedlist}  
    </div>  
        
    );
}
//console.log(props);

export default Videolist;
//<div>no of videos {props.videos.length}</div>
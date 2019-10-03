import React from "react";
import Searchbar from "./Searchbar";// ./ means same directory
import youtubeapi from "../apis/youtubeapi";
import Videolist from "./videolist";
import Videodetail from "./videodetail";

//all imports
const KEY = "AIzaSyCWYaEGmlPu7Y-vyK1BJYEfwdRcg1P5LhY";

//class extends react.compo then { inside this there is render function() { inside return(jsx);}}
class App extends React.Component{

    state={videos:[],selectedvideo:null}//state of my app



    //component mount
    //for default purpose
    componentDidMount(){
        this.onTermsubmit('alan walker');
    }

    //onvideoselct function
    onvideoselect=(video)=>{
        //console.log("video fetched", video);//just for check
        this.setState({ selectedvideo: video ,});        
    }



    //we are taking term from searchbar (children to parent props exchange)
    onTermsubmit= async term=>{
        //console.log(term);
       const response = await youtubeapi.get("/search",
        {
            params:{
            q: term,
            //added later
            part:'snippet',
            maxResults:5,
            key:KEY
            }
        }
        );

        //taking response out of request
        //console.log(response);
        this.setState(
            {videos:response.data.items,
        selectedvideo:response.data.items[0]}
        );
    };

    render()
    {
        return(
            <div>
                <div className="ui segment">
                <Searchbar onFMsubmit={this.onTermsubmit}/>
                </div>  
             
                <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <Videodetail video={this.state.selectedvideo}/>
                    </div>
                    <div className="five wide column">
                        <Videolist onvideoselect={this.onvideoselect} videos={this.state.videos}/>
                    </div>
                    
                </div>             
                </div>
            </div>
          );
    }

}


export default App; 
//export statement (we are exporting that component)



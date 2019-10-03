import React from "react";
import logo from "../youtubeiconblack.png"
class Searchbar extends React.Component 
{
    state={term:""};
    

    // here we dont have const or var for this function as ut resembles to the class 
    
    // also we are passing event 
    // in setState({ term: event.target.value } ) 
    oninputechange=(event)=>{
        this.setState({term:event.target.value});
    };

    //onformsubmit
    //you can name it anything 
    //but event.preventDeafault(); is used for preventing default enter to submit (refresh) behaviour  
    onformsubmit=(event)=>{
            event.preventDefault();
         /* did below part later */
         this.props.onFMsubmit(this.state.term);

    };


    render()
    {
        
        return(
            <div>
        <br />
        <form onSubmit={this.onformsubmit} className="ui form">
            
            <img src={logo} height="40" width="60" align="left" hspace="60" alt="Youtube"/> 
            <div className="ui icon input">
               <input type="text" value={this.state.term} onChange={this.oninputechange}/>
               <i className="inverted circular search link icon"></i>
               <br />
               <br />
            </div>
        </form>
    </div>
    );
    }
}

export default Searchbar; 
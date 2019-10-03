import axios from "axios";
// importing axios

//this is my unique youtube api v3 key for accessing yt api 
const KEY = "AIzaSyCWYaEGmlPu7Y-vyK1BJYEfwdRcg1P5LhY";
 
//export this function axios.create({queryobject});
//queryobject contains baseURL,param object
//param object depends on each api
export default axios.create({
     baseURL:"https://www.googleapis.com/youtube/v3",
     params:{
         part:'snippet',
         maxResults:5,
         key:KEY
     }
 });
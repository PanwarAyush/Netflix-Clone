import React ,{useState,useEffect} from 'react'
import instance from './axios';
import axios from "axios";
export default function ({title,fetchUrl}){

const [movies,setMovies]=useState([]);
   
  useEffect(()=>{
      const getdata=async ()=>{
      const request=await instance.get(fetchUrl);
      //const data=await axios.get(`https://api.themoviedb.org/3${fetchUrl}`);
      //console.log(fetchUrl);
      //const data=await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c3fd22e823430a980e0cfb95e356d7d7");
      
      const temp=request.data.results;
      //console.log(temp);
      //setMovies(temp);
      //movies.push(temp);
      return temp;
      }
      getdata()
      .then(data=>{
        setMovies(data);
       
        console.log(movies);
      })
      .catch(error=>{
        console.log(error);
      });
      //console.log(movies);
      
  },[fetchUrl]);

  return (
    <div>
       <h1>{title}</h1>
    </div>
  )
}

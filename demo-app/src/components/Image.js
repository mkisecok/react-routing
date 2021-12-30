import { useParams }from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'


import React from 'react'

function Image() {
    const { id }=useParams();
    const [image,setImage]=useState({});
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/photos?albumId=1/${id}`)
        .then((res)=>setImage(res.data))
    },[id])
    return (
        <div>
            <h2> My Photo </h2>
            <div>{image}</div>
        </div>
    )
}

export default Image

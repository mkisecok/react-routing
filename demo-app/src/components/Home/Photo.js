import React from 'react'
import { useParams }from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import './Photo.css'
function Photo() {
    const { id } = useParams();
    const [photo, setPhoto] = useState({});
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((res)=>setPhoto(res.data))
    },[id])
    return (
        <div>
           <h2>Photo Details</h2>
           <div className='photo-detail'>{JSON.stringify(photo)}</div>
        </div>
    )
}

export default Photo

import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { Radar } from 'react-loading-icons'

function Photos() {
    
    const [photos,setPhotos]=useState([]);
    const [isLoading,setLoading]=useState(true);
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(res=>setPhotos(res.data))
        .finally(()=>setLoading(false))
    },[])
    return (
        <div>
            <h1>Album Photos</h1>
            {isLoading && <Radar/>}
            <div className='photos-div'>
                <div className='photo-div'>
                    {photos.map((photo)=>(
                        <li key={photo.id}>
                       <Link to={`/image/${photo.id}`}>{photo.title}</Link>
                       </li>
                    ))}
                </div>
            </div>
            
           
        </div>
    )
}

export default Photos

import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { BallTriangle } from 'react-loading-icons'
import axios from 'axios'
import './Home.css'
function Home() {
const [photos, setPhotos] = useState([]);
const [isLoading,setLoading]=useState(true)
useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(res=>setPhotos(res.data))
    .finally(()=> setLoading(false))
    
},[]);


    return (
        
        <div className='Home'>
            <div className='icon'>{ isLoading && <BallTriangle />}</div>
            
                <div className='photos'>
                {photos.map((photo)=>(
                    <div key={photo.id} className='container'>
                    <img  src={photo.url} alt={photo.title}/>
                    <br/>
                    {/*use same color with link and img through slice methode */}
                    <Link to={`/photo/${photo.id}`} style={{color:`#${photo.url.slice(-6)}`}} className='photo-link'> Details of photo ({photo.id})</Link>
                    </div>
                       
                ))}
                </div>
            
        </div>
    )
}

export default Home

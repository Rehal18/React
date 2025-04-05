import {useEffect,useState} from 'react'
import './WeatherApp.css'
//weatherkey- 9ae5b70709bd5a4034f691d21294bd31

import searchIcon from '../assets/weather/search.png'
import sunIcon from '../assets/weather/sun.jpeg'
import humitityIcon from '../assets/weather/humitity.png'
import windIcon from '../assets/weather/wind.png'
import rainIcon from '../assets/weather/rain.png'
import clearIcon from '../assets/weather/clearcloud.png'
import drizzleIcon from '../assets/weather/drizzle.png'
import snowIcon from '../assets/weather/snow.png'
import cloudIcon from '../assets/weather/cloud.png'

const WeatherDetails=({icon,temp,city,country,latitude,longitude,wind,humitity})=>{
    return ( <>
    <div className="image">
        <img src={icon} alt="image"/>
    </div>
    <div className="temp">{temp}°C</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
        <div>
        <span className='latitude'>Latitude</span>
        <span>{latitude}</span>
        </div>
        <div>
        <span className='longitude'>Longitude</span>
        <span>{longitude}</span>
        </div>    
    </div>
    <div className="data-container">
        <div className="element">
        <img src={humitityIcon} alt='humitity'/>
       
        <div className="data">
            <div className="humitity">{humitity}%</div>
            <div className="text">Humitity</div>
        </div>
        </div>

        <div className="element">
        <img src={windIcon} alt='wind'/>
       
        <div className="data">
            <div className="wind">{wind} Km/hr</div>
            <div className="text">Wind Speed</div>
        </div>
        </div>
    </div>
    </>
    )
}


export const WeatherApp = () => {

    let api_key="9ae5b70709bd5a4034f691d21294bd31"


    const [icon,setIcon]=useState(sunIcon)
    const [temp,setTemp]=useState(0)
    const [city,setCity]=useState("")
    const [country,setCountry]=useState("")
    const [latitude,setLatitude]=useState(0)
    const [longitude,setLongitude]=useState(0)
    const [humitity,setHumitity]=useState(0)
    const [wind,setWind]=useState(0)

    const[text,setText] =useState("selam")
    const[cityNotFound,setcityNotFound]=useState(false)
    const[loading,setloading]=useState(false)
    const[error,setError]=useState(null)

    const weatherIconMap = {
        "01d": sunIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": sunIcon,
        "03n": drizzleIcon,
        "04d": drizzleIcon,
        "04n": drizzleIcon,
        "09d": sunIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon,
      };
      

    const search =async ()=>{
        setloading(true)
        
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`
        try{
            let res=await fetch(url)
            let data=await res.json()

            if(data.cod === "404"){
                console.log("City Not Found")
                setcityNotFound(true)
                setloading(false)
                return
            }
            setHumitity(data.main.humidity)
            setWind(data.wind.speed)
            setTemp(Math.floor(data.main.temp))
            setCity(data.name)
            setCountry(data.sys.country)
            setLatitude(data.coord.lat)
            setLongitude(data.coord.lon)
            const weatherIconCode =data.weather[0].icon
            setIcon(weatherIconMap[weatherIconCode] || sunIcon)
            setcityNotFound(false)

        }catch(error){
            console.error("An Error Occured:",error.message)
            setError("Error in Featching Weather Data")
        }finally{
            setloading(false)

        }
    }

    const handelCity =(e)=>{
        setText(e.target.value)
    }

    const handelKeyDown =(e)=>{
        if(e.key === "Enter" )
            search()
    }

    useEffect(function(){
        search()  
    },[])
  return (
  <div className="container">
    <div className="input-container">
        <input type="text" className='cityInput' placeholder='Search City'  value={text}
        onChange={handelCity}
        onKeyDown={handelKeyDown}/>
        <div className="search-icon" onClick={()=>search()} >
            <img src={searchIcon}/>
        </div>
        
    </div>
    {!cityNotFound && !loading && <WeatherDetails icon={icon} temp={temp} city={city}country={country}latitude={latitude}longitude={longitude}humitity={humitity}wind={wind}/>}
   {loading &&<div className="loading-message">Loading...</div>}
  { error && <div className="error-message"></div>}
  {cityNotFound && <div className="city-Not-Found">City Not Found</div>}
   
   
    <p className="copy-right">
       Designed By <span>Rehal@18</span>
    </p>

  </div>
  )
}

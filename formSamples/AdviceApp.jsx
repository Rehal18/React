import {useEffect,useState} from 'react'
import './Advice.css'

// https://api.adviceslip.com/advice
export const AdviceApp = () => {

    const[advice,setAdvice]=useState("Please Click Button To Get Advice")
    const[count,setCount]=useState(0)
    async function getAdvice(){
        const res=await fetch("https://api.adviceslip.com/advice")
        // console.log(res)
        const data=await res.json()
        // console.log(data)
        setAdvice(data.slip.advice)
        setCount((c)=>c+1)

    }
    useEffect(function(){
        getAdvice()

    },[])
  return (
    <div>
    <h3>{advice}</h3>
    <button onClick={getAdvice}>Get Advice</button>
    <Counter count={count}/>
    </div>
  )
  function Counter(props){
    return(
        <p>you have Read <b>{props.count}</b> Pieces of Advice</p>
    )
  }
}

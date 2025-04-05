import {useEffect,useState} from 'react'
import './BmiApp.css'

export const BmiApp = () => {
    const[height,setHeight]=useState("")
    const[weight,setWeight]=useState("")
    const[bmi,setBmi]=useState(null)
    const[bmiStatus,setBmiStatus]=useState(null)
    const[errorMsg,setErrorMsg]=useState("")

    const calculateBmi =()=>{
        const isValidHeight = /^\d+$/.test(height)
        const isValidWeight = /^\d+$/.test(weight)

        if(isValidHeight && isValidWeight ){
            const heightinMeter = height/100
            const bmiValue = weight/(heightinMeter*heightinMeter)
            setBmi(bmiValue.toFixed(2))
            if(bmiValue < 18.5){
                setBmiStatus("UnderWeight")
            }
           else if(bmiValue >= 18.5 && bmiValue < 24.9){
                setBmiStatus("Normal Weight")
            }
           else if(bmiValue >= 25 && bmiValue < 29.9){
                setBmiStatus("Over Weight")
            } else{
                setBmiStatus("Obese")
            }
            setErrorMsg("")
        }else{
            setBmi(null)
            setBmiStatus("")
            setErrorMsg("Please Enter Valid Numeric Value for Height and Weight")

        }
    }
    const clearAll =()=>{
        setHeight("")
        setWeight("")
        setBmi(null)
        setBmiStatus("")

    }
  return (
   <div className="bmi-calculator">
    <div className="box"></div>
        <div className="data">
            <h1>BMI Calculator</h1>
            {errorMsg && <p className='error'>{errorMsg}</p>}
            <div className="input-container">
            <label htmlFor='height'>Height(cm)</label>
            <input type='text' id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="input-container">
            <label htmlFor='weight'>Weight(kg)</label>
            <input type='text' id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearAll}>clearAll</button>
           { bmi !==null &&(<div className="result">
                <p>Your BMI is : {bmi}</p>
                <p>BMI  Status:{bmiStatus}</p>
            </div>)}
    </div>
   </div>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Currency } from './currencyconverter/Currency'
// import { BmiApp } from './bmiCalculator/BmiApp'
// import { WeatherApp } from './weather/weatherapp'
// import { AdviceApp } from './formSamples/AdviceApp'
// import { RegFrm } from './formSamples/RegFrm'
// import './formSamples/RegFrm.css'
// import { UserDetails } from './formSamples/UserDetails'
// import { Cart } from './formSamples/cart'
// import './index.css'
// import './Qrcode.css'
// import { Qrcode } from './Qrcode'
// import { UserCard } from './UserCard.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 
    <App />
    <UserCard />
    <Qrcode />  
     <Cart/>
     <UserDetails/>
     <RegFrm/>
     <AdviceApp/>
        <WeatherApp/>
        <BmiApp/>
    */}
<Currency/>

  </StrictMode>,
)

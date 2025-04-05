import { useState } from "react"

export const Qrcode = () => {
   const[img,setImg] = useState("")
   const[loading,setloading] = useState(false)
   const[qrData,setqrData] = useState("https://mmr.cyberbahntas.com/")
   const[qrSize,setqrSize] = useState("50")
   function generateQR()
    {
        setloading(true)
        try{

            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}*${qrSize}&data=${encodeURIComponent(qrData) }`
            setImg(url)
        }catch (error){
            console.error("Error in Generating QRcode",error)

        }finally{
            setloading(false)
        }
    }
   function downloadQR()
    {
fetch(img)
.then((response)=>response.blob())
.then((blob)=>{
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download= "Qrcode.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

})
.catch(error)
{
    console.error("Error in Generating QRcode",error)
}
        
    }
  return (
    <div className="app-container">
        <h1> QRCODE GENERATER</h1>
        {loading && <p>Please Wait .....</p>}
         {img && <img className="Qrimage" src={img} />}
        <div>
           
            <label htmlFor="dataInput" className="input-lable">Data For Qrcode:</label>
            <input type="text" id="dataInput" placeholder='Enter Data For Qrcode' value={qrData} onChange={(e)=>setqrData(e.target.value)}></input>
            <label htmlFor="sizeInput" className="input-lable">Image Size(eg.,150):</label>
            <input type="text" id="sizeInput" placeholder='Enter Image Size' value={qrSize} onChange={(e)=>setqrSize(e.target.value)}></input>
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QrCode</button>
            <button className="download-button" onClick={downloadQR}>Dowload QrCode</button>
             

        </div>
        <p className="footer">Desinged By Rehal</p>

    </div>
  )
}

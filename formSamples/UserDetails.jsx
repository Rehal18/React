import {useState} from 'react'

export const UserDetails = () => {
    // const[UserName,setUserName]=useState("Rehal")
    // const[UserAge,setUserAge]=useState(27)
    const[user,setuser]=useState({name:"Rehal",age:27})
    // const updateUserName=()=>{
    //     setUserName("King Kholi 18")
    //     UserName =="Rehal"? setUserName("King Kholi 18"):setUserName("Rehal")
    //     setuser({...user,name:"King Kholi 18"})
        
    // }
    // const updateUserAge=()=>{
    //     setUserAge(35)
    //     UserAge==27? setUserAge(35): setUserAge(27)
    //     setuser({...user,age:35})

    // }
    // function changeName(e){
    //     // const newStateObject={...user}
    //     // newStateObject.name=e.target.value
    //     // setuser(newStateObject)
    //     setuser((oldState)=>{
    //         return{...oldState,name:e.target.value}
    //     })

        
    // }
    // function changeAge(e){
    //     setuser((oldState)=>{
    //         return{...oldState,age:e.target.value}
    //     })

    // }

    function changeHandler(e){    
        setuser({...user,[e.target.name]: e.target.value})
    }
  return (
    <>
    {/* <h3>User Details</h3>
    <h4>{user.name}</h4>
    <h4>{user.age}</h4>
    <button onClick={updateUserName}>Update UserName</button>
    <button onClick={updateUserAge}>Update UserAge</button> */}
    <h2>{user.name}, {user.age}</h2>
    <form>
        {/* <input type="text" name="username" placeholder='Enter UserName' onChange={changeName} value={user.name}/>
        <input type="text" name="userage" placeholder='Enter UserAge' onChange={changeAge} value={user.age}/> */}
        <input type="text" name="name" placeholder='Enter UserName' onChange={changeHandler} value={user.name}/>
        <input type="text" name="age" placeholder='Enter UserAge' onChange={changeHandler} value={user.age}/>
    </form>
    </>
  )
}

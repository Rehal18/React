import {useState} from 'react'

export const RegFrm = () => {
    const[user,setUser]=useState({
        Name:"Rehal@18",
        Age:28,
        Gender:"Male",
        isMarried:true,
        country:"India",
        message:"Write About Userself",

    })

    function changeHandler(e){
        const name=e.target.name;
       const value=e.target.type ==="checkbox"? e.target.Checked:e.target.value
       setUser({...user,[name]:value})
    }
  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.Name}</td>
                </tr>
                <tr>
                <td>Age</td>
                <td>{user.Age}</td>
                </tr>
                <tr>
                <td>Gender</td>
                <td>{user.Gender}</td>
                </tr>
                <tr>
                <td>Marital Status</td>
                <td>{user.isMarried ? "Married":"Not Married"}</td>
            </tr>
                <tr>
                <td>Country</td>
                <td>{user.country }</td>
            </tr>
                <tr>
                <td>Message</td>
                <td>{user.message }</td>
            </tr>
        </tbody>
        </table>
        <form>
            <input type="text" placeholder='Full Name' name='Name' value={user.Name} onChange={changeHandler}/>
            <input type="text" placeholder='Age' name='Age' value={user.Age} onChange={changeHandler}/>
            <div className="gender">
                <label htmlFor='male'>
                    <input type='radio' name='Gender' id="male" checked={user.Gender == "Male"} value="Male" onChange={changeHandler}/>Male
                </label>
                <label htmlFor='female'>
                    <input type='radio' name='Gender' id="female" checked={user.Gender == "Female"} value="Female" onChange={changeHandler}/>Female
                </label>
            </div>
            <label htmlFor='isMarried'>
                <input type="checkbox" id="isMarried" name="isMarried" checked={user.isMarried} onChange={changeHandler} />
                Married
            </label>
            <div className="select-div">
                <select name="country" value={user.country} onChange={changeHandler}>
                    <option>India</option>
                    <option>USA</option>
                    <option>Germany</option>
                </select>
                <textarea name="message" cols="30" rows="5" value={user.message} onChange={changeHandler} />
            </div>
        </form>


    </>
  )
}

import PropTypes from "prop-types";
const UserData = [
    {
    name:"Rehal1",
     city:"Madurai",
      description:"Front-End Developer",
       skills:["HTML","CSS","JavaScript","Jquery","ReactJs","NodeJs"],
       profileimage:"images/image1.png",
        online:false,
},
    {
    name:"Rehal2",
     city:"Usilampatti",
      description:"Front-End Developer",
       skills:["HTML","CSS","JavaScript","Jquery","ReactJs","NodeJs"],
       profileimage:"images/image2.jpeg",
        online:false,
},
    {
    name:"Rehal3",
     city:"Theni",
      description:"Front-End Developer",
       skills:["HTML","CSS","JavaScript","Jquery","ReactJs","NodeJs"],
       profileimage:"images/image3.jpg",
        online:true,
},
];

function User(props){
    return (
    <div className="card-container">
        <span className={props.online ? "pro online" :"pro offline"}>
        {props.online ? "ONLINE" :"OFFLINE"}</span>
        <img src={props.profileimage} className="img" alt="user"/>
        <h3>{props.name}</h3>
        <h4>{props.city}</h4>
        <p>{props.description}</p>
        <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h5>Skills</h5>
            <ul>
            {props.skills.map((skill,index)=>
            <li key={index}>{skill}</li>)}
            </ul>
        </div>
        
    </div>
    );
}
export const UserCard = () => {
  return (
  <>
  {UserData.map((user,index)=>
<User key={index} name={user.name} city={user.city} description={user.description} profileimage={user.profileimage}
online={user.online} skills={user.skills}/>

)}
  </>


  )
//   <User name="Rehal" city="Madurai" description="Front-End Developer"
// skills={["HTML","CSS","JavaScript","Jquery","ReactJs","NodeJs"]}
// profileimage="images/image3.jpg" online={true}/>
}

User.propTypes={

    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profileimage:PropTypes.string.isRequired,
    
}

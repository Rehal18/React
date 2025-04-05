
import PropTypes from 'prop-types';
 export const Students = ({ Name = "No Name", Age = 0, isMarried = false }) => {
  return (
    <div className="student">
    <table>
      <tbody>
        <tr>
            <th>Name</th>
            <td>{Name}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>{Age}</td>
        </tr>
        <tr>
            <th>isMarried</th>
            <td>{isMarried ? "Yes":"No"}</td>
        </tr>
        </tbody>
    </table>   
    
    </div>
  )
}


Students.propTypes={

  Name:PropTypes.string,
  Age:PropTypes.number,
  isMarried:PropTypes.bool,

}



// export default Students;


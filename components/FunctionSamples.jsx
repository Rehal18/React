
import PropTypes from "prop-types";

export const FunctionSamples = (props) => {

    const {handelclick,name}= props;
    
  return (
    <div>
        <p>This the Function Compntent.-{name}</p>
        <button onClick={handelclick}>Click Me!</button>
    </div>
  )
}

FunctionSamples.propTypes={
  
  handelclick:PropTypes.func.isRequired,
}


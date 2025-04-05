import PropTypes from "prop-types";

export const SampleOne = (props) => {
    const{color} =props;
  return (
    <div style={{background: color,padding:"20px",color:"white" }}>
        <p>By implementing these changes, the fb_report value should persist correctly in the session, 
            and the select element in the blade will reflect the stored value upon subsequent page loads.</p>
    </div>
  )
}

SampleOne.propTypes={
  
    color:PropTypes.oneOf(["Green","Red","Blue"]).isRequired,
}

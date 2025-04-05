import PropTypes from "prop-types";


export const ChildComponents = (props) => {
  return (
    <div>{props.children}</div>
  )
 
}

ChildComponents.propTypes={
  
    children:PropTypes.array,
}

import PropTypes from "prop-types";

export const ArraySamples = (props) => {
    const {item}=props;
  return (
    <div>
        <h2>Array list</h2>
        <ul>
   {item.map((item=>(
    <li key={item.id}>{item.name}</li>
)))}
        </ul>
    </div>
  )
}

ArraySamples.propTypes={
  
    item:PropTypes.arrayOf(
        PropTypes. shape({
            id:PropTypes.number. isRequired,
            name:PropTypes.string.isRequired,

        })


    ).isRequired,
}

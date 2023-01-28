import React from "react";
import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <div className="col-md-3 py-3 my-3 px-3">
    
    <div className="card">
      <img src={props.urlimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
        
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    
    </div>
    
  );
};
Card.propTypes = {
  title: PropTypes.string,
  btnDescription: PropTypes.string,
  urlimg: PropTypes.string,
  text: PropTypes.string
}
Card.defaultProps = {
  title: "Card Title",
  btnDescription: "Find Out More!",
  urlimg: "http://via.placeholder.com/500x325",
  text: "Some quick example text to build on the card title and make up the bulk of the cards content."
};

export default Card







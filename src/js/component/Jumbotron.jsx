import React from "react";
import PropTypes from "prop-types";
const Jumbotron = (props) => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{props.title}</h1>
        <p className="col-md-8 fs-4">{props.text}</p>
        <button className="btn btn-primary btn-lg" type="button">{props.buttonText}</button>
      </div>
    </div>
    
  );
};
Jumbotron.propTypes = {
  title: PropTypes.string,
  btnDescription: PropTypes.string,
  urlimg: PropTypes.string,
}
Jumbotron.defaultProps = {
  title: "Jumbotron",
  text: "Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.",
  buttonText: "Example Button"
};

export default Jumbotron
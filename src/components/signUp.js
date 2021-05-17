import {useRef, useState} from "react";
import{connect} from "react-redux";
import PropTypes from 'prop-types';
import {signUp, showSignUpModal} from "../redux/actions/signUp";
import {validateEmail} from "../helpers";
import Input from "./input";
import Button from "./button";

import Image from "../assets/images/signup.png";

import "../styles/components/signUp.scss";

const SignUp = ({signUp, showSignUpModal, showSignUp}) => {
  const signUpModal = useRef();

  const [emailInput, setEmailInput] = useState();
  const [nameInput, setNameInput] = useState();
  const [inputErrors, setInputsErrors] = useState(null);

  const handleCloseModal = () => {
    showSignUpModal(false);
  }

  const handleSignUp = (event, email, name) => {
    event.preventDefault();
    if ( email && name ) {
      signUp({email, name}); // Send action for save the session
      showSignUpModal(false);
    } else {
      setInputsErrors({
        email: !validateEmail(email)  && "Please enter a valid email.",
        name: !name && "Please enter your name."
      })
    }
  }

  return (
    <div className={`signUp ${showSignUp ? "signUp--show" : ""}`} ref={signUpModal}>
      <div className="signUp__modal">
        <span className="modal__close" onClick={() => handleCloseModal()}>x</span>
        <div className="modal__col modal__col--image">
          <figure className="modal__image">
            <img src={Image} alt="Smiling women"/>
          </figure>
        </div>
        <div className="modal__col modal__col--form">
          <h2 className="modal__title">
            Sign Up
          </h2>
          <h5 className="modal__subtitle">
            Simplify your reading in minutes.
          </h5>
          <form className="modal__form">
            <Input
              type="email"
              placeholder="Your email"
              isRequired={true}
              cssClass="w-100"
              handleKeyUp={(e) => setEmailInput(e.target.value)}
              error={inputErrors?.email}
            />
            <Input
              placeholder="Full Name"
              isRequired={true}
              cssClass="w-100"
              handleKeyUp={(e) => setNameInput(e.target.value)}
              error={inputErrors?.name}
            />
            <Button
              text="Sign Up"
              cssClasses="button--primary w-100"
              handleClick={(event) => handleSignUp(event, emailInput, nameInput)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signUpSession: state.signUpReducer.signUpSession,
    showSignUp: state.signUpReducer.showSignUp
  }
};

SignUp.propTypes = {
  signUp: PropTypes.func,
  showSignUpModal: PropTypes.func,
  showSignUp: PropTypes.bool
}

export default connect(mapStateToProps, {signUp, showSignUpModal})(SignUp);

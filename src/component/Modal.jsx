import React from 'react';
import { CSSTransition } from 'react-transition-group'
import mailIcon from '../assets/images/mail.svg'
import githubIcon from '../assets/images/github.svg'

function Modal(props) {
  return (
    <CSSTransition 
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}  
    >
      <div className={`modal ${props.show? 'show' : ''}`}onClick={props.onClose}>
        <div  className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Get in Touch</h4>
          </div>
          <div className="modal-body">
            <p>Feel free to contact me anytime! I'll get back to you as soon as possible. </p>
              <p className="text-contact"> 
                <img src={mailIcon} alt="Mail Icon" className="body-icon" />
                fadhilnigo@gmail.com
              </p>
              <p>Know more about my code by looking around my github!</p>
              <a href="https://github.com/fadhilnigo" className="text-contact" target="_blank" rel="noreferrer noopener">
                <img src={githubIcon} alt="Github Icon" className="body-icon" />
                https://github.com/fadhilnigo
              </a>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">Close</button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;

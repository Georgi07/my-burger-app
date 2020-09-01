import React from "react";
import  './Modal.css';
import Aux from './../../../hoc/Auks';
import Backdrop from './../Backdop/Backdrop';
const modal = (props) => (
     <Aux>
         <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className="Modal"
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-1000vh)',
        opacity: props.show ? '1' : '0'
    }}>
        {props.children}
    </div>
     </Aux>
);
export default modal;
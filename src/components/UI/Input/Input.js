import React from "react";
import './Input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case ('input'): inputElement = <input className="InputElement" {...props.elementConfig}
                                              value={props.value}  onChange={props.change}/>;
         break;
        case ('textarea'): inputElement = <textarea className="InputElement" {...props.elementConfig}
                                                    value={props.value}  onChange={props.change}/>;
        break;
        case ('select'): inputElement = <select className="InputElement"  onChange={props.change} value={props.value}>
            {props.elementConfig.options.map(option => (
                <option value={option.value}> {option.displayValue} key={option.value} onChange={}></option>
            ))}
        </select>;
            break;
        default: inputElement = <input {...props.elementConfig} value={props.value}/>;
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
};


export default input;
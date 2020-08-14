import React from "react";
import  './NavigationItem.css'
import Active from './NavigationItem.css';

const navigationItem = (props) => (
    <div className={"NavigationItem"}>
        <li><a href={props.link}
        className={props.active ? Active : null}>{props.children}</a></li>
    </div>
);
export default navigationItem;
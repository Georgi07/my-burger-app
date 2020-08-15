import React from "react";
import  './NavigationItem.css'
import active from './NavigationItem.css';

const navigationItem = (props) => (
    <div className={"NavigationItem"}>
        <li><a href={props.link}
        className={props.active ? active : null}>{props.children}</a></li>
    </div>
);
export default navigationItem;
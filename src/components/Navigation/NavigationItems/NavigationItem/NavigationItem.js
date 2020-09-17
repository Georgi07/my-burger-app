import React from "react";
import  './NavigationItem.css'

import {NavLink} from 'react-router-dom';

const navigationItem = (props) => (
    <div className={"NavigationItem"}>
        <li><NavLink exact={props.exact} to={props.link}
        activeClassName="active">{props.children}</NavLink></li>
    </div>
);
export default navigationItem;
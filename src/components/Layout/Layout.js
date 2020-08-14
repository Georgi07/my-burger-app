import React from "react";
import Aux from '../../hoc/Auks';
import './Layout.css';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from './../SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Aux>
      <Toolbar/>
        <SideDrawer/>
        <main className={"Content"}>
          {props.children}
        </main>
    </Aux>
);
export default layout;
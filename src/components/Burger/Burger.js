import React from "react";
import BurgerIngredient from "./BurgerIngridient/BurgerIngredient";
import './Burger.css'

const burger = (props) => {
    let transformeredIngridients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {return <BurgerIngredient key={igKey + i} type={igKey}/>})
        })
    .reduce((arr, el) => { return arr.concat(el)}, []);
    if(transformeredIngridients.length ===0){
        transformeredIngridients = <p>Please start adding elements :)</p>
    }
    return (
        <div className={"Burger"}>
            <BurgerIngredient type="bread-top"/>
            {transformeredIngridients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
export default burger;
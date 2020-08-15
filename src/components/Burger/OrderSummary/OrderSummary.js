import React, {Component} from "react";
import Aux from './../../../hoc/Auks';
import Button from './../../UI/Button/Button';
import './../../UI/Button/Button.css';

class OrderSummary extends Component{
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.totalPrice.toFixed(2)} $</strong></p>
                <p>Continue to checkout?</p>
                <Button className="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button className="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}
export default OrderSummary;
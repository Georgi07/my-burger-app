import React, {Component} from 'react';
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
// import {Route, Switch} from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
class Checkout extends Component {
    state= {
        ingredients: null,
        price: 0,
        checkedOut: false,
    };
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if(param[0] === 'price') {
               price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };
    checkoutContinuedHandler = () => {
        this.props.history.push('/checkout/contact-data');
    };
    render() {
        return(
            <div>
                <CheckoutSummary
                    checkoutCancelled={()=>this.checkoutCancelledHandler}
                    checkoutContinued={()=>this.setState({checkedOut: true})}
                    ingredients={this.state.ingredients}/>
                {this.state.checkedOut ? <ContactData ingredients={this.state.ingredients} /> : ''}
            </div>
        );
    }
}
export default Checkout;
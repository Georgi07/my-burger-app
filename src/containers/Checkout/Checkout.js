import React, {Component} from 'react';
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary';
// import {Route, Switch} from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import { connect } from 'react-redux';
class Checkout extends Component {

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
                    ingredients={this.props.ings}/>
                {this.state.checkedOut ? <ContactData ingredients={this.props.ings} /> : ''}
            </div>
        );
    }
}
const mapStateToProps = state => {
  return {
      ings: state.ingredients,
      price: state.totalPrice
  }
};
export default connect(mapStateToProps)(Checkout);
import React, {Component} from "react";
import  Button from './../../../components/UI/Button/Button';
import Input from './../../../components/UI/Input/Input';
import axios from './../../../axios-orders';
import  Spinner from './../../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP'
                },
                value: '',
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                   options: [
                       {value: 'fastest', displayValue: 'Fastest'},
                       {value: 'cheapest', displayValue: 'Cheapest'},
                       ]},
                value: '',
            }
        },
        loading: false
    };
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ings,
            price: this.props.totalPrice,
        };
        axios.post('/orders.json', order)
            .then(response =>{
                this.setState({loading: false});
                this.props.history.push('/');
                })
            .catch(error => this.setState({loading: false}));
        const queryParams = [];
        queryParams.push('price=' + this.state.totalPrice);
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };
    inputChangedHandler = (event, inputIdentifier) => {
       const updatedOrderForm = {
           ...this.state.orderForm
       };
       const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
       updatedFormElement.value = event.target.value;
       updatedOrderForm[inputIdentifier] = updatedFormElement;
       this.setState({orderForm: updatedOrderForm})
    };
    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (  <form>
            <Input elementType="..." elementConfig="..." value="..."/>
            {formElementArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
            ))}
            <Button clicked={this.orderHandler}>ORDER NOW</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return(
            <div>
                <h4>Enter your Contact Data</h4>
                {form}
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
export default connect(mapStateToProps)(ContactData);
import React, {Component} from "react";
import  Button from './../../../components/UI/Button/Button';
import './ContactData.css';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };
    render() {
        return(
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Enter your name"/>
                    <input type="email" name="email" placeholder="Enter your email"/>
                    <input type="text" name="street" placeholder="Enter your street"/>
                    <input type="text" name="postalCode" placeholder="Enter your postal code"/>
                </form>
                <Button>ORDER NOW</Button>
            </div>
        );
    }
}
export default ContactData;
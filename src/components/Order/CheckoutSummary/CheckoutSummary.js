import React from "react";
import Burger from './../../Burger/Burger';
import  Button from './../../UI/Button/Button';
import './CheckoutSummary.css';
// import ContactData from "../../../containers/Checkout/ContactData/ContactData";


// class CheckoutSummary extends Component {
//     state = {
//       contactDataShow: null
//     };
//     checkoutContinued = () => {
//         this.setState({
//             contactDataShow : <ContactData/>,
//         })
//     };
//     render() {
//         return (
//             <div className="CheckoutSummary">
//                 <h1 style={{marginTop: '100px'}}>We hope its tasty!</h1>
//                 <div style={{width: '300px', marginLeft: '70'}}>
//                     <Burger/>
//                 </div>
//                 <div className="Buttons" style={{marginTop: '100px'}}>
//                     <Button clicked={props.checkoutCancelled}>CANCEL</Button>
//                     <Button clicked={props.checkoutContinued}>CONTINUE</Button>
//                     <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
//                 </div>
//
//             </div>)
//     }
// }

const  CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1 style={{marginTop: '100px'}}>We hope its tasty!</h1>
            <div style={{width: '300px', marginLeft: '70'}}>
               <Burger ingredients={props.ingredients}/>
            </div>
            <div className="Buttons" style={{marginTop: '100px'}}>
                <Button clicked={props.checkoutCancelled}>CANCEL</Button>
                <Button clicked={props.checkoutContinued}>CONTINUE</Button>
            </div>

        </div>

    );
};
export default CheckoutSummary;
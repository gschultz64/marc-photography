import * as tslib_1 from "tslib";
import React from 'react';
// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
var amount = 2500;
var cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '3rem',
    boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
    backgroundColor: '#fff',
    borderRadius: '6px',
    maxWidth: '400px',
};
var buttonStyles = {
    fontSize: '13px',
    textAlign: 'center',
    color: '#fff',
    outline: 'none',
    padding: '12px 60px',
    boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
    backgroundColor: 'rgb(255, 178, 56)',
    borderRadius: '6px',
    letterSpacing: '1.5px',
};
// Below is where the checkout component is defined.
// It has several functions, and some default state variables.
var Checkout = /** @class */ (function (_super) {
    tslib_1.__extends(class_1, _super);
    function class_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            disabled: false,
            buttonText: 'BUY NOW',
            paymentMessage: '',
        };
        return _this;
    }
    class_1.prototype.resetButton = function () {
        this.setState({ disabled: false, buttonText: 'BUY NOW' });
    };
    class_1.prototype.componentDidMount = function () {
        var _this = this;
        this.stripeHandler = window.StripeCheckout.configure({
            // Development Test Key (public)
            key: 'pk_test_gzR7GGsqA6KtTBRSWimc493D',
            closed: function () {
                _this.resetButton();
            },
        });
    };
    class_1.prototype.openStripeCheckout = function (event) {
        var _this = this;
        event.preventDefault();
        this.setState({ disabled: true, buttonText: 'WAITING...' });
        this.stripeHandler.open({
            name: 'Demo Product',
            amount: amount,
            description: 'A product well worth your time',
            token: function (token) {
                fetch("https://sbrbp1n557.execute-api.us-east-1.amazonaws.com/dev/checkout", {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token,
                        amount: amount,
                    }),
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                })
                    .then(function (res) {
                    console.log('Transaction processed successfully');
                    _this.resetButton();
                    _this.setState({ paymentMessage: 'Payment Successful!' });
                    return res.json();
                })
                    .catch(function (error) {
                    console.error('Error:', error);
                    _this.setState({ paymentMessage: 'Payment Failed' });
                });
            },
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: cardStyles },
            React.createElement("h4", null, "Spend your Money!"),
            React.createElement("p", null, "Use any email, 4242 4242 4242 4242 as the credit card number, any 3 digit number, and any future date of expiration."),
            React.createElement("button", { style: buttonStyles, onClick: function (event) { return _this.openStripeCheckout(event); }, disabled: this.state.disabled }, this.state.buttonText),
            this.state.paymentMessage));
    };
    return class_1;
}(React.Component));
export default Checkout;
//# sourceMappingURL=checkout.js.map
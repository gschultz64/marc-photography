import * as React from 'react';
import { Link } from 'gatsby';
import Checkout from '../components/checkout';
import Layout from '../components/layout';
var Store = function () { return (React.createElement(Layout, null,
    React.createElement("h1", null, "Hi from the store page"),
    React.createElement(Checkout, null),
    React.createElement(Link, { to: "/" }, " Go back to the homepage "))); };
export default Store;
//# sourceMappingURL=store.js.map
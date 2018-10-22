import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
var IndexPage = function () { return (React.createElement(Layout, null,
    React.createElement(Link, { to: "/about/" }, "Go to About Page"),
    React.createElement("br", null),
    React.createElement(Link, { to: "/store/" }, "Go to Store Page"))); };
export default IndexPage;
//# sourceMappingURL=index.js.map
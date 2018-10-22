import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
var About = function () { return (React.createElement(Layout, null,
    React.createElement("h1", null, "Hi from the about page"),
    React.createElement("p", null),
    React.createElement(Link, { to: "/" }, "Go back to the homepage"))); };
export default About;
//# sourceMappingURL=about.js.map
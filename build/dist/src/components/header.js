import React from 'react';
import { Link } from 'gatsby';
var Header = function (_a) {
    var siteTitle = _a.siteTitle;
    return (React.createElement("div", { style: {
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        } },
        React.createElement("div", { style: {
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            } },
            React.createElement("h1", { style: { margin: 0 } },
                React.createElement(Link, { to: "/", style: {
                        color: 'white',
                        textDecoration: 'none',
                    } }, siteTitle)))));
};
export default Header;
//# sourceMappingURL=header.js.map
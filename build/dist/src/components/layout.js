import * as tslib_1 from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(StaticQuery, { query: graphql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      query SiteTitleQuery {\n        site {\n          siteMetadata {\n            title\n          }\n        }\n      }\n    "], ["\n      query SiteTitleQuery {\n        site {\n          siteMetadata {\n            title\n          }\n        }\n      }\n    "]))), render: function (data) { return (React.createElement(React.Fragment, null,
            React.createElement(Helmet, { title: data.site.siteMetadata.title, meta: [
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ] },
                React.createElement("html", { lang: "en" })),
            React.createElement(Header, { siteTitle: data.site.siteMetadata.title }),
            React.createElement("div", { style: {
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                } }, children))); } }));
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Layout;
var templateObject_1;
//# sourceMappingURL=layout.js.map
"use strict";
module.exports = {
    siteMetadata: {
        title: 'Marc Schultz Photography',
    },
    plugins: [
        "gatsby-plugin-typescript",
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-stripe-checkout',
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
            },
        },
        'gatsby-plugin-offline',
    ],
};
//# sourceMappingURL=gatsby-config.js.map
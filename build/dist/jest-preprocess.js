"use strict";
var babelOptions = {
    presets: ["@babel/react", "@babel/env"],
    plugins: [
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-class-properties",
    ],
};
module.exports = require("babel-jest").createTransformer(babelOptions);
//# sourceMappingURL=jest-preprocess.js.map
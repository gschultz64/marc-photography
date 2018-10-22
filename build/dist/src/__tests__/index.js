import React from "react";
import renderer from "react-test-renderer";
import BlogIndex from "../pages/index";
describe("BlogIndex", function () {
    return it("renders correctly", function () {
        var location = {
            pathname: "/",
        };
        var tree = renderer.create(React.createElement(BlogIndex, { location: location })).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.js.map
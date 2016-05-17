/* Jest Tests for validating the React Pagination. The View component of the Redux
 * unidirectional flow */

jest.dontMock('../../src/js/components/Pagination').default;
import consts from '../../src/js/lib/constants';

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The Pagination", () => {
    it("should display comment", () => {
        let Pagination = require('../../src/js/components/Pagination').default;
        let PaginationComponent = TestUtils.renderIntoDocument(
            <Pagination page={4} pages={6} onClick={()=>{}}  />
        );
        let PaginationElement = TestUtils.findRenderedDOMComponentWithClass(PaginationComponent, 'pagination');

        expect(PaginationElement).toBeDefined();
        expect(TestUtils.isDOMComponent(PaginationElement)).toBe(true);
    })
});

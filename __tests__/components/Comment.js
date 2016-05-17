/* Jest Tests for validating the React Comment. The View component of the Redux
 * unidirectional flow */

jest.dontMock('../../src/js/components/Comment').default;
import consts from '../../src/js/lib/constants';

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The Comment", () => {
    it("should display comment", () => {
        let Comment = require('../../src/js/components/Comment').default;
        let comment = {user: {avatar_url: 'url', login: 'username'}, body: '@jose is here'};

        let CommentComponent = TestUtils.renderIntoDocument(
            <Comment comment={comment} transformHtml={()=>{ return ["one", "two"]}}/>
        );
        let componentElement = TestUtils.findRenderedDOMComponentWithClass(CommentComponent, 'comment');

        expect(componentElement).toBeDefined();
        expect(TestUtils.isDOMComponent(componentElement)).toBe(true);
    })
});

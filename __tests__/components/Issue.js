/* Jest Tests for validating the React Issue. The View component of the Redux
 * unidirectional flow */

jest.dontMock('../../src/js/components/Issue').default;
import consts from '../../src/js/lib/constants';

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The Issue", () => {
    it("should display comment", () => {
        let Issue = require('../../src/js/components/TemplateComponent').default;
        let issue = {user: {avatar_url: 'url', login: 'username'}, body: '@jose is here'};

        let IssueComponent = TestUtils.renderIntoDocument(
            <Issue transformHtml={() => { return []}} truncateDescription={() => { return []}}
        issue={
        {
            body: 'body',
            number: '233333',
            user: {
            avatar_url: 'url',
                login: 'user'
            },
            title: 'title',
                labels: []}}
                     onClick={() => { return []}} />
        );
        let IssueElement = TestUtils.findRenderedDOMComponentWithClass(IssueComponent, 'issue-row');

        expect(IssueElement).toBeDefined();
        expect(TestUtils.isDOMComponent(IssueElement)).toBe(true);
    })
});

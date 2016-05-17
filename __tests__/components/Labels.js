/* Jest Tests for validating the React Labels. The View component of the Redux
 * unidirectional flow */

jest.dontMock('../../src/js/components/Labels').default;
import consts from '../../src/js/lib/constants';

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("The Labels", () => {
    it("should display comment", () => {
        let Labels = require('../../src/js/components/Labels').default;
        let labels = [{name: 'inprogress', color: 'Green'}, {name: 'windows', color: 'Black'}];

        let LabelsComponent = TestUtils.renderIntoDocument(
            <Labels labels={labels} />
        );
        let LabelsElement = TestUtils.findRenderedDOMComponentWithClass(LabelsComponent, 'labels');

        expect(LabelsElement).toBeDefined();
        expect(TestUtils.isDOMComponent(LabelsElement)).toBe(true);
    })
});

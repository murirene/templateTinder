/* Jest Tests for validating the reducer component of the Redux
 * unidirectional flow */
jest.dontMock('../../src/js/reducers/app.js').default;
jest.dontMock('../../src/js/actions/actions').default;
jest.dontMock('../../src/js/actions/actionTypes.js').default;

var TestUtils = require('react-addons-test-utils');
var React = require('react');
import consts from '../../src/js/lib/constants';

describe("The Reducer", () => {
    it("should maintain the state of the application.", () => {
        let actionCreator = require('../../src/js/actions/actions');
        let reducer = require('../../src/js/reducers/app.js').default;
        let state;

        state = reducer(state, actionCreator.requestIssues());
        expect(state.loading).toEqual(true);

        state = reducer(state, actionCreator.requestIssue());
        expect(state.loading).toEqual(true);

        state = reducer(state, actionCreator.requestComments());
        expect(state.comments).toEqual([]);

        state = reducer(state, actionCreator.receivedComments([{}]));
        expect(state.comments).toEqual([{}]);

        state = reducer(state, actionCreator.receivedIssue('issue'));
        expect(state.issue).toEqual('issue');

        state = reducer(state, actionCreator.receivedIssues('issues'));
        expect(state.issues).toEqual('issues');

        state = reducer(state, actionCreator.showList());
        expect(state.view).toEqual(consts.VIEWS.LIST);

        state = reducer(state, actionCreator.saveLinks('<https://api.github.com/repositories/321278/issues?page=6&client_id=1dac84680e79cc1b9b1b&client_secret=811c2556aa4f95bed83761e38e7ab0dc2aadd851>; rel="next", <https://api.github.com/repositories/321278/issues?page=78&client_id=1dac84680e79cc1b9b1b&client_secret=811c2556aa4f95bed83761e38e7ab0dc2aadd851>; rel="last", <https://api.github.com/repositories/321278/issues?page=1&client_id=1dac84680e79cc1b9b1b&client_secret=811c2556aa4f95bed83761e38e7ab0dc2aadd851>; rel="first", <https://api.github.com/repositories/321278/issues?page=4&client_id=1dac84680e79cc1b9b1b&client_secret=811c2556aa4f95bed83761e38e7ab0dc2aadd851>; rel="prev"'));
        expect(state.links).toEqual(undefined);

    })
});

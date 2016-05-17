/* Jest Tests for validating the Actions component of the Redux
 * unidirectional flow */
'use strict';
jest.dontMock('../../src/js/actions/actions').default;
jest.dontMock('../../src/js/actions/actionTypes').default;
import consts from '../../src/js/lib/constants';

import { ACTION_TYPES } from '../../src/js/actions/actionTypes'

describe('Actions', () => {
    it('should changes the game state.', () => {
        let actionCreator = require('../../src/js/actions/actions');
        expect(actionCreator.requestIssues().type).toEqual(ACTION_TYPES.REQ_ISSUES);
        expect(actionCreator.requestIssue().type).toEqual(ACTION_TYPES.REQ_ISSUE);
        expect(actionCreator.requestComments().type).toEqual(ACTION_TYPES.REQ_COMMENTS);
        expect(actionCreator.receivedComments().type).toEqual(ACTION_TYPES.REC_COMMENTS);
        expect(actionCreator.receivedIssue().type).toEqual(ACTION_TYPES.REC_ISSUE);
        expect(actionCreator.receivedIssues().type).toEqual(ACTION_TYPES.REC_ISSUES);
        expect(actionCreator.showList().type).toEqual(ACTION_TYPES.SHOW_LIST);
        expect(actionCreator.saveLinks().type).toEqual(ACTION_TYPES.SAVE_LINKS);
        expect(actionCreator.nextPage(3)).toBeTruthy();
        expect(actionCreator.fetchIssue(3)).toBeTruthy();
        expect(actionCreator.fetchComment(3)).toBeTruthy();
        expect(actionCreator.fetchIssues(3)).toBeTruthy();
    });
});

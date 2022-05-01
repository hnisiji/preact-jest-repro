/**
 * @jest-environment jsdom
 */
/** @jsx h */
import '@testing-library/jest-dom';

import {h} from 'preact';
import {render, queryByText} from '@testing-library/preact';

describe('jsdom env + testing-library', () => {
    test('fail', () => {
        const {queryByText} = render(<p>test</p>);
        expect(queryByText('test')).not.toBeNull()
    });
});

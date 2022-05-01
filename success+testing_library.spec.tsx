/**
 * @jest-environment ./custom-env
 */
/** @jsx h */
import '@testing-library/jest-dom';

import {h} from 'preact';
import {render, queryByText} from '@testing-library/preact';

describe('custom env + testing-library', () => {
    test('success', () => {
        const {queryByText} = render(<p>test</p>);
        expect(queryByText('test')).not.toBeNull()
    });
});

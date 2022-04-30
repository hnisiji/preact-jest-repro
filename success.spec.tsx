/** @jsx h */
import { h } from 'preact';
import render from 'preact-render-to-string';

describe('default env', () => {
    test('success', () => {
        expect(render(<p>test</p>)).toBe('<p>test</p>');
    });
});

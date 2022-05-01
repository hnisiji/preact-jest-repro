/**
 * @jest-environment jsdom
 */
/** @jsx h */
import { h } from 'preact';
import render from 'preact-render-to-string';

describe('jsdom env', () => {
    test('fail', () => {
        expect(render(<p>test</p>)).toBe('<p>test</p>');
    });
});

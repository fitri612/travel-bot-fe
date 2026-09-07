// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill global TextEncoder & TextDecoder untuk Jest JSDOM
if (typeof global.TextEncoder === 'undefined') {
	global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
	// @ts-expect-error Polyfill for Node environment in tests
	global.TextDecoder = TextDecoder;
}

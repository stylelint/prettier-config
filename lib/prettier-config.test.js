'use strict';

const isPlainObj = require('is-plain-obj');
const prettierConfig = require('../.prettierrc.js');

describe('prettier config tests', () => {
	describe('prettier config object', () => {
		test('should be an object', () => {
			expect(isPlainObj(prettierConfig)).toBe(true);
		});
	});
});

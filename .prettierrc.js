'use strict';

module.exports = {
	arrowParens: 'always',
	endOfLine: 'lf',
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['*.md'],
			options: {
				printWidth: 80,
				singleQuote: false,
				tabWidth: 2,
				trailingComma: 'none',
				useTabs: false,
			},
		},
	],
};

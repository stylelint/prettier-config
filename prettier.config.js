/** @type {import("prettier").Options} */
const config = {
	arrowParens: 'always',
	endOfLine: 'lf',
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['package.json', 'package-lock.json', '*.md'],
			options: {
				printWidth: 80,
				singleQuote: false,
				tabWidth: 2,
				trailingComma: 'none',
				useTabs: false,
			},
		},
	],
	plugins: ['prettier-plugin-packagejson'],
};

export default config;

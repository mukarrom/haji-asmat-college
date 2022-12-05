module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		// 0 = "off"
		// 1 = "warn"
		// 2 = "error"
		'react/jsx-filename-extension': 0,
		'no-unused-vars': 1,
		'react/react-in-jsx-scope': 0,
		'react/prop-types': 0,
		'jsx-a11y/anchor-is-valid': 1,
		'jsx-a11y/label-has-associated-control': 0,
		'react/button-has-type': 1,
		'jsx-a11y/alt-text': 1,
		'jsx-a11y/no-noninteractive-tabindex': 0,
		'global-require': 1,
		'react/no-unescaped-entities': 1,
		'max-len': 0,
		'linebreak-style': 0,
		'react/jsx-props-no-spreading': 1,
		'no-tabs': 0,
		indent: 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-wrap-multilines': 0,
		'arrow-parens': 0,
		'react/jsx-one-expression-per-line': 0,
		'operator-linebreak': 0,
		'react/jsx-first-prop-new-line': 0,
		'react/jsx-max-props-per-line': 0,
	},
};

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ['standard', 'eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: ['prettier'],
	rules: {
		semi: ['error', 'always'],
	},
};

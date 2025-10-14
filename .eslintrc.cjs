module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: { jsx: true },
		project: "./tsconfig.json"
	},
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	settings: {
		react: { version: "detect" }
	},
	plugins: ["@typescript-eslint", "prettier", "unused-imports", "react"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"next/core-web-vitals" // ✅ Importante para Next.js
	],
	rules: {
		/* React */
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-react": "off",

		/* Limpieza */
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
		],
		"unused-imports/no-unused-imports": "error",

		/* Types */
		"@typescript-eslint/no-explicit-any": "warn",

		/* Prettier */
		"prettier/prettier": ["error"]
	},
	ignorePatterns: [".next", "node_modules", "dist", "public", "eslint.config.*", "next-env.d.ts"]
};

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    ignorePatterns: [
        '.eslintrc.js',
        '.prettierrc.js',
        'tailwind.config.js',
        'webpack.config.js'
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
        'promise'
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        "plugin:react-hooks/recommended",
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: true }],
        'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }]
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            }
        }
    },
}

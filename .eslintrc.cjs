module.exports = {
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['node_modules/*', '.eslintrc.cjs'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { 'argsIgnorePattern': '^_' },
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'react-refresh/only-export-components': [
            'warn',
            { 'allowConstantExport': true },
        ],
        'prettier/prettier': 'error'
    },
    env: {
        browser: true,
        node: true,
        jest: true,
        es2020: true,
    }
};

import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                // Browser globals
                document: 'readonly',
                window: 'readonly',
                requestAnimationFrame: 'readonly',
                cancelAnimationFrame: 'readonly',
                clearTimeout: 'readonly',
                setTimeout: 'readonly',
                // Test globals
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                jest: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
            prettier,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-undef': 'off',
            'no-unused-vars': 'off', // TypeScript handles this
            'prefer-const': 'warn',
            'prettier/prettier': ['error', { endOfLine: 'lf' }],
        },
        settings: {
            react: { version: 'detect' },
        },
    },
    {
        files: ['test/**/*.{ts,tsx}'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                jest: 'readonly',
            },
        },
    },
    {
        files: ['example/**/*.{ts,tsx}'],
        languageOptions: {
            globals: {
                document: 'readonly',
                window: 'readonly',
                requestAnimationFrame: 'readonly',
                cancelAnimationFrame: 'readonly',
                clearTimeout: 'readonly',
                setTimeout: 'readonly',
            },
        },
    },
    {
        ignores: [
            'dist/',
            'node_modules/',
            '*.config.js',
            '*.config.ts',
            'coverage/',
        ],
    },
]; 
import globals from 'globals'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parser: parserTs,
        }
    },
    {
        files: ['src/**/*.js', 'src/**/*.ts', '**/*.js'],
        ignores: [
            'dist/**/*'
        ],
        plugins: {
            '@stylistic/js': stylisticJs,
            '@stylistic/ts': stylisticTs
        },
        rules: {
            '@stylistic/js/indent': ['error', 4],
            '@stylistic/js/quotes': ['error', 'single'],
            '@stylistic/js/no-extra-semi': 'error',
            '@stylistic/js/semi': ['error', 'never'],
        }
    },
]

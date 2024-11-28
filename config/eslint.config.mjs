import globals from 'globals';
import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.test.js'], // Apply to test files
    plugins: { jest: jestPlugin }, // Add Jest plugin
    languageOptions: { globals: globals.jest }, // Jest globals
    rules: {
      ...jestPlugin.configs.recommended.rules, // Use Jest recommended rules
    },
  },
];

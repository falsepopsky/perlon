import eslint from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';
// @ts-expect-error: types doesn't exist
import pluginPromise from 'eslint-plugin-promise';
import tseslint from 'typescript-eslint';

// TODO: ADD eslint-plugin-vitest when version >= 0.6.0 hits

export default tseslint.config(
  eslint.configs.recommended,
  nodePlugin.configs['flat/recommended-module'],
  pluginPromise.configs['flat/recommended'],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2023,
      },
    },
    ignores: ['**/dist/'],
  },
  {
    rules: {
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          enums: false,
          variables: false,
          typedefs: false,
        },
      ],
      '@typescript-eslint/return-await': ['error', 'always'],
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
      ],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: false, ignoreVoidOperator: false },
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  }
);

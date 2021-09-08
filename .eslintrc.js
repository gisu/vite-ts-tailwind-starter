module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multiline-html-element-content-newline': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/no-mutating-props': 'off',
    'vue/no-v-html': 'off',
    'no-case-declarations': 'off',
    'no-undef': 'off',
    camelcase: 'off',
    curly: 0,
    'dot-notation': 0,
    'vue/max-attributes-per-line': ['warn', {
      singleline: 2,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }]
  }
}

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-case-declarations': 'off',
    'comma-dangle': 0,
    'space-before-function-paren': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'eol-last': 'off',
    semi: 0,
    quotes: ['warn', 'single'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}

module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    'linebreak-style': ['off', 'unix'], // enforce unix linebreaks
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
    'no-trailing-spaces': [2, { skipBlankLines: true, ignoreComments: true }],
  },
};

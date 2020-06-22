module.exports = {
    ignoreFiles: ['**/*.js'],
    extends: [
        'stylelint-config-sass-guidelines',
        'stylelint-prettier/recommended',
    ],
    plugins: ['stylelint-prettier'],
    rules: {
        'scss/at-function-pattern': null,
        'prettier/prettier': true,
    },
};

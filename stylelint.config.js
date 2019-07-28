module.exports = {
    ignoreFiles: ['**/*.js'],
    extends: [
        'stylelint-config-sass-guidelines',
        'stylelint-prettier/recommended'
    ],
    plugins: ['stylelint-prettier'],
    rules: {
        'scss/at-function-pattern': null,
        'prettier/prettier': true,
        // 'order/order': [
        //     {
        //         type: 'at-rule',
        //         hasBlock: false
        //     }
        // ]
        // 'max-nesting-depth': 5,
        // 'color-named': ['never', { ignore: ['inside-function'] }],
        // 'property-no-unknown': [true, { ignoreProperties: ['error', 'warn'] }],
        // 'scss/dollar-variable-pattern': ['^cudl', { ignore: 'local' }],
        // 'selector-class-pattern': null,
        // 'scss/selector-no-redundant-nesting-selector': true,
        // 'length-zero-no-unit': null
    }
};

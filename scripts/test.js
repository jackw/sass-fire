const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

describe('Sass Fire', () => {
    const sassTestFiles = glob.sync(
        path.resolve(process.cwd(), 'test/*.spec.scss')
    );

    sassTestFiles.forEach((file) =>
        sassTrue.runSass({ file }, { describe, it })
    );
});

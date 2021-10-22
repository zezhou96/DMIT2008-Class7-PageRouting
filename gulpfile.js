// Using Node. Node uses common JS modules
// Browser uses ES modules
// Framework uses ES modules

const {src, dest} = require('gulp')

const static = function(cb){
    // task
    return src('src/static/data/*.*')
    .pipe(dest('dist/data'))

    // call the callback
    // temporal dead zone
    cb()
}

exports.default = static
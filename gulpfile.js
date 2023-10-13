//########## HEXEL.JS ##########
const { css_purge_safe_list, css_files, css_purge_content, css_build_file_name, css_export_dir, js_files, js_build_file_name, js_export_dir } = require('./hexel-config');
const { src, dest } = require('gulp');
const minifyJs = require('gulp-uglify');
const concatJs = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const concatCss = require('gulp-concat-css');
const minifyCss = require('gulp-clean-css');

const hexel_js = () => {
    return src( js_files )
        .pipe(minifyJs())
        .pipe(concatJs( js_build_file_name ))
        .pipe(dest( js_export_dir ))
}

const hexel_css = () => {
    return src( css_files )
        .pipe(purgecss({
            content: css_purge_content,
            extractors: [
                {
                    extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                    extensions: ['js', 'php']
                }
            ],
            safelist: css_purge_safe_list
        }))
        .pipe(concatCss( css_build_file_name ))
        .pipe(minifyCss())
        .pipe(dest( css_export_dir ))
}

exports.hexel_build_js = hexel_js;
exports.hexel_build_css = hexel_css;
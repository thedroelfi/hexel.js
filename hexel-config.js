//########## HEXEL.JS CONFIG ##########


//css setting
const css_purge_safe_list = [
    "page-header",
    "menu",
    "menu-item"
];
const css_files = [
    "./css/styles.css"
];
const css_purge_content = [
    "**/*.js",
    "**/*.php",
    "**/*.html"
];
const css_build_file_name = "hexel.min.css";
const css_export_dir = "./hexel/";


//js settings
const js_files = [
    "./js/app.js"
];
const js_build_file_name = "hexel.min.js";
const js_export_dir = "./hexel/";


module.exports = { css_purge_safe_list, css_files, css_purge_content, css_build_file_name, css_export_dir, js_files, js_build_file_name, js_export_dir }
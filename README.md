# hexel.js
### Scripts for package.json
```JavaScript
"scripts": {
    "prehexel_install": "curl -o gulpfile.js https://raw.githubusercontent.com/thedroelfi/hexel.js/main/gulpfile.js",
    "hexel_install": "npm i --save-dev gulp gulp-uglify gulp-concat gulp-purgecss gulp-concat-css gulp-clean-css",
    "hexel_uninstall": "npm uninstall gulp gulp-uglify gulp-concat gulp-purgecss gulp-concat-css gulp-clean-css",
    "posthexel_uninstall": "rm -r gulpfile.js",
    "hexel_config": "curl -o hexel-config.js https://raw.githubusercontent.com/thedroelfi/hexel.js/main/hexel-config.js",
    "prehexel_js": "npm run hexel_install",
    "hexel_js": "gulp hexel_build_js",
    "posthexel_js": "npm run hexel_uninstall",
    "prehexel_css": "npm run hexel_install",
    "hexel_css": "gulp hexel_build_css",
    "posthexel_css": "npm run hexel_uninstall"
  },
```


### Get the hexel config file
```JavaScript
npm run hexel_config
```
### Build the CSS
```JavaScript
npm run hexel_css
```
### Build the JS
```JavaScript
npm run hexel_js
```

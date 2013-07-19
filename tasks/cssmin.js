'use strict';

/*
 * Combine CSS include's instructions into one file
 *
 * Grunt task example:

 'css-include-combine': {
  
    'libs': {
        relativeDir: 'path',
        main: 'file.css',
        out: 'out.css'
    }

 }


 */

module.exports = function(grunt) {
  
  var cleanCSS = require('clean-css'),
      _ = require("lodash");


  grunt.registerMultiTask('css-include-combine', 'Minify and Combine CSS files', function() {
    
    var defaults = {
      relativeDir: process.cwd,
      main: "",
      out: ""
    };

    var options = _.extend({}, defaults, this.data);

    if (!grunt.file.exists(options.main)) {
      grunt.log.warn('Source file "' + options.main + '" not found.');
      return false;
    }

    if (!options.out) {
      grunt.log.warn('Please specify out file!');
      return false;
    }


    var cssContent = grunt.file.read(options.main);
    var cssOptions = {
      relativeTo: options.relativeDir,
      keepSpecialComments: 0
    };

    cssContent = cleanCSS.process(cssContent, cssOptions);
    grunt.file.write(options.out, cssContent);

    grunt.log.writeln("CSS file written ", options.out);

  });

};

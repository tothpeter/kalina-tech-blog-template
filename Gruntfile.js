module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      styles: {
        files: ['css/styles.scss'],
        tasks: ['sass:dist'],
        options: {
          spawn: false,
        },
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
          cacheLocation: 'tmp/.sass-cache'
        },
        files: {
          'tmp/styles.css': 'css/styles.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};

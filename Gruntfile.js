module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      styles: {
        files: ['css/styles.scss', 'template/main.xml'],
        tasks: ['sass:dist', 'htmlbuild:dist'],
        options: {
          spawn: false,
        },
      }
    },

    htmlbuild: {
      dist: {
        src: 'template/main.xml',
        dest: 'tmp/generated-template.xml',
        options: {
          sections: {
            styles: 'tmp/styles.css'
          }
        }
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

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-html-build');
};

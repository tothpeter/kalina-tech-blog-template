module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      styles: {
        files: ['css/*', 'template/*'],
        tasks: ['sass:dist', 'sassUnicode', 'htmlbuild:dist'],
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
    },

    sassUnicode: {
      dist: {
        files: {
          './tmp/styles.css': './tmp/styles.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-sass-unicode');

  grunt.registerTask('default', ['sass', 'sassUnicode']);
};

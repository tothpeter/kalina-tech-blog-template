module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      styles: {
        files: ['css/**/*', 'theme/**/*'],
        tasks: ['compile'],
        options: {
          spawn: false,
        },
      }
    },

    htmlbuild: {
      dist: {
        src: 'theme/main.xml',
        dest: 'theme-final.xml',
        options: {
          sections: {
            normalize: 'css/normalize.css',
            default_template_skin: 'css/default_template_skin.css',
            default_styles: 'css/default_template.css',
            styles: 'tmp/styles.css',
            variables: 'theme/variables.xml'
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

  grunt.registerTask('compile', ['sass:dist', 'sassUnicode:dist', 'htmlbuild:dist']);
  grunt.registerTask('default', 'compile');
};

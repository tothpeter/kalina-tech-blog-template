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
          // beautify: true,
          sections: {
            normalize: 'css/normalize.css',
            default_template_skin: 'css/default_template_skin.css',
            default_styles: 'css/default_template.css',
            styles: 'tmp/styles.css',
            variables: 'theme/variables.xml',

            section: {
              top_bar: {
                main: 'theme/sections/top_bar/main.xml',
                nav: 'theme/sections/top_bar/nav.xml',
                social: 'theme/sections/top_bar/social.xml',
              },
              header: 'theme/sections/header.xml',
              search_top: 'theme/sections/search_top.xml',
              featured_post: 'theme/sections/featured_post.xml',
              // Display place is unknown
              page_list_top: 'theme/sections/page_list_top.xml',
              subscription: 'theme/sections/subscription.xml',
              vertical_ad_container: 'theme/sections/vertical_ad_container.xml',
              sidebar_feed: 'theme/sections/sidebar_feed.xml',
              sidebar_item: 'theme/sections/sidebar_item.xml',
              main: 'theme/sections/main.xml',
              footer: 'theme/sections/footer.xml',
            }
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

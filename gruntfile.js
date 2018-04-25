module.exports = function(grunt) {
  
    grunt.initConfig({
      postcss: {
        options: {
          map: true, // inline sourcemaps
  
          processors: [
            require('pixrem')(), // add fallbacks for rem units 
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
            require('cssnano')() // minify the result 
          ]
        },
        dist: {
          src: 'css/main.css'
        }
      },
      svgstore: {
        options: {
          svg: {
            style: "display:none;"
          }
        },
        default : {
          files: {
            '_includes/dest.svg': ['assets/svg/*.svg'],
          }
        }
      },
      sass: {
        dist: {
          files: {
                'css/main.css': 'sass/main.scss'
              }
        }
      },
      watch: {
        sass: {
          files: ['sass/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: 8080,
          }
        }
      }
    });
  
  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-svgstore');
  };
module.exports = function(grunt) {
  
  require('jit-grunt')(grunt);

  grunt.initConfig({
    postcss: {
      prod: {
        options: {
          processors: [
            require("pixrem")(), // add fallbacks for rem units
            require("autoprefixer"),
            require("cssnano")() // minify the result
          ]
        },
        src: "_site/assets/css/style.css",
        dest: "_site/assets/css/style.css"
      }
    },
    sass: {
      options: {
        style: "expanded"
      },
      files: {
        src: "assets/css/main.scss",
        dest: "_site/assets/css/style.css"
      }
    },

    svgstore: {
      options: {
        prefix: "icon-",
        includedemo: true
      },
      default: {
        files: {
          "assets/svg/icons.svg": ["assets/svg/input/*.svg"]
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["_site/*.html", "_site/*.css"]
        },
        options: {
          watchTask: true,
          proxy: "localhost:4000"
        }
      }
    },
    watch: {
      css: {
        files: ["assets/css/**/*.scss"],
        tasks: ["sass"]
      }
    }
  });

  grunt.registerTask("dev", ["browserSync", "watch"]);
  grunt.registerTask("svg", ["svgstore"]);
};
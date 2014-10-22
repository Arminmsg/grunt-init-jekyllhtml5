// Gruntfile.js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            }
        },
        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              '_site/css/alter.css': 'css/main.scss',
            }
          }
        },
        watch: {
            options: {
                livereload: true,
                interrupt: true,
                atBegin: true,
              
            },
            html: {
                files: [
                    "_includes/*.html",
                    "_layouts/*.html",
                    "_posts/*.markdown",
                    "_config.yml",
                    "index.html"
                ], 
                tasks: ["shell:jekyllBuild"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");

    grunt.registerTask("default", ["shell"]);
};
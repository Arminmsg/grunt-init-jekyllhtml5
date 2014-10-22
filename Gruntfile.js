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
              '_site/css/main.css': '_sass/main.scss',
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
                tasks: ["shell:jekyllBuild", "sass"]
            },
            css: {
                files: [
                    "_sass/*.scss",
                    "_sass/**/*.scss"
                ],
                tasks: ["sass"]
            }
        },
        connect:{
            server: {
                options: {
                    livereload: true,
                    base: "_site/",
                    port: 9000

                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("serve", ["connect:server", "watch"]);
};
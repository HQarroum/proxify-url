module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Timing the build tasks.
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            dist: 'dist/'
        },
        jshint: {
            dist: {
                src: ['Gruntfile.js', 'lib/*.js']
            }
        },
        uglify: {
            dist: {
                src: 'lib/index.js',
                dest: 'dist/proxify-url.min.js'
            }
        }
    });

    // Registering the tasks.
    grunt.registerTask('default', ['clean', 'jshint', 'uglify']);
};
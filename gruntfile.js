module.exports = function(grunt) {

    grunt.initConfig({
        run: {
            server: {
                args: ['./server.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('grunt-run');
   
    grunt.registerTask('server', ['run:server']);
};
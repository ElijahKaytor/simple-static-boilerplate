
// Grunt configuration
module.exports = function(grunt) {
    
    // Load dependencies
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // Initialize the config
    grunt.initConfig({
        
        // Configure the watch task
        watch: {
            
            // Compile the js files when there is a change
            scripts: {
                files: ['www/static/js/**/*.js'],
                tasks: ['uglify'],
            },
            
            // Compile the stylesheets when there is a change
            styles: {
                files: ['www/static/sass/**/*.sass', 'www/tatic/sass/**/*.scss'],
                tasks: ['sass'],
            },
            
            // Reload grunt when the config changes
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['compile-all'],
            },
        },
        
        // Configure the style compilation
        sass: {
            
            options: {
                
                // Uncomment to use the compass framework
                compass: true,
                
                // Minify output
                style: 'compressed',
                
            },
            
            // Set the files to compile
            index: {
                
                // Compile all files in www/static/sass/*.sass
                //  to  www/static/sass/*.sass.css
                files: [{
                    expand: true,
                    cwd: 'www/static/sass',
                    src: ['*.sass'],
                    dest: 'www/static/sass',
                    ext: '.sass.css',
                }],
                
            },
        },
        
        // Configure the js compilation
        uglify: {
            
            options: {
                
                // Mangle variable names for the sake of compression
                mangle: true,
                
                // Remove whitespace, comments, etc
                compress: true,
                
                // Include sourcemaps
                sourceMap: true,
                
                // Output stats on saved size
                report: 'min',
                
            },
            
            // Combine all source files into www/static/js/min/compiled.min.js
            'compiled.min.js': {
                
                // Include a banner at the top of the file
                options: { banner: '/*! File: compiled.min.js */', },
                
                // Define which files will go in the compiled code
                files: {
                    'www/static/js/min/compiled.min.js': [
                        
                        // Libraries
                        'lib/jquery.min',
                        
                        // Main JS file
                        'index',
                        
                    ].map(function(path) {
                        
                        // Add the static directory path
                        return 'www/static/js/' + path + '.js';
                        
                    }),
                },
            },
        },
    });
    
    // Register the tasks
    grunt.registerTask('compile-all', ['sass', 'uglify']);
    grunt.registerTask('default', ['compile-all', 'watch']);
    
};

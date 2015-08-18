/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      target: {
        tasks: [
          'watch',
          'nodemon'
        ],
        options: {logConcurrentOutput: true}
      }
    },
    nodemon: {
      dev: {
        script: 'public/server.js'
      }
    },
    concat: {
      app: {
        src: [
          'app/app.module.js',
          'app/app.routes.js',
          'app/components/**/*.js',
          'app/shared/**/*.js'
        ],
        dest: 'public/app.min.js'
      },
      actions: {
        src: 'assets/js/*.js',
        dest: 'public/js/main.min.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      app: {
        src: 'public/app.min.js',
        dest: 'public/app.min.js'
      },
      actions: {
        src: 'public/js/main.min.js',
        dest: 'public/js/main.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: {
          'public/css/style.css': 'assets/scss/main.scss'
        }
      }
    },
    copy: {
      app: {
        files: [
          {
            expand: true,
            src: [
              'app/components/**/*.html',
              'app/shared/**/*.html'
            ],
            dest: 'public/views',
            flatten: true
          }, {
            expand: true,
            src: 'app/index.html',
            dest: 'public/',
            flatten: true
          }, {
            expand: true,
            cwd: 'assets/img/',
            src: '**',
            dest: 'public/img/',
            flatten: false
          }, {
            expand: true,
            cwd: 'bower_components/',
            src: '**',
            dest: 'public/vendor/'
          }, {
            src: 'server.js',
            dest: 'public/'
          }, {
            expand: true,
            cwd: 'node_modules/',
            src: 'express/**',
            dest: 'public/dependencies/'
          }
        ]
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'app/*.js',
        'app/**/*.js',
        'assets/js/*.js'
      ]
    },
    watch: {
      options: {
        livereload: true
      },
      app: {
        files: [
          'Gruntfile.js',
          'server.js'
        ]
      },
      sass: {
        options: {
          livereload: false
        },
        files: ['assets/scss/main.css'],
        tasks: ['sass']
      },
      angular: {
        files: [
          'app/app.module.js',
          'app/app.routes.js',
          'app/components/**/*.js',
          'app/shared/**/*.js'
        ],
        tasks: [
          'concat',
          'uglify',
          'jshint'
        ]
      },
      actions: {
        files: [
          'assets/js/*.js'
        ],
        tasks: [
          'concat'
        ]
      },
      html: {
        files: [
          'app/components/**/*.html',
          'app/shared/**/*.html',
          'app/index.html'
        ],
        tasks: ['copy']
      },
      css: {
        files: 'public/css/style.css',
        tasks: []
      }
    },
    auto_install: {
      local: {}
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // Register tasks
  grunt.registerTask('build', [
    'concat',
    'uglify',
    'sass',
    'copy'
  ]);

  grunt.registerTask('default', ['build', 'concurrent:target']);

  grunt.registerTask('install', 'auto_install');

};

/*global module:false*/
module.exports = function(grunt) {

  // Grunt parameters
  var env = grunt.option('env') || 'dev';

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
        script: 'server.js'
      }
    },
    concat: {
      app: {
        src: [
          'app/app.module.prod.js',
          'app/app.routes.js',
          'app/components/**/*.js',
          'app/shared/**/*.js'
        ],
        dest: 'dist/app.min.js'
      },
      actions: {
        src: 'assets/js/*.js',
        dest: 'dist/js/main.min.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      app: {
        src: 'dist/app.min.js',
        dest: 'dist/app.min.js'
      },
      actions: {
        src: 'dist/js/main.min.js',
        dest: 'dist/js/main.min.js'
      }
    },
    sass: {
      prod: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: {
          'dist/css/style.css': 'assets/scss/main.scss'
        }
      },
      stage: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: {
          'dist/css/style.css': 'assets/scss/main.scss'
        }
      },
      dev: {
        options: {
          noCache: true
        },
        files: {
          'assets/scss/style.css': 'assets/scss/main.scss'
        }
      }
    },
    copy: {
      prod: {
        files: [
          {
            expand: true,
            src: [
              'app/components/**/*.html',
              'app/shared/**/*.html'
            ],
            dest: 'dist/views',
            flatten: true
          }, {
            src: 'app/index.prod.html',
            dest: 'dist/index.html'
          }, {
            expand: true,
            cwd: 'assets/img/',
            src: '**',
            dest: 'dist/img/',
            flatten: false
          }, {
            expand: true,
            cwd: 'bower_components/',
            src: '**',
            dest: 'dist/vendor/'
          }, {
            src: 'server.js',
            dest: 'dist/'
          }, {
            expand: true,
            cwd: 'node_modules/',
            src: 'express/**',
            dest: 'dist/dependencies/'
          }, {
            src: 'config/config.prod.js',
            dest: 'dist/config/config.js'
          }
        ]
      },
      stage: {
        files: [
          {
            expand: true,
            src: [
              'app/components/**/*.html',
              'app/shared/**/*.html'
            ],
            dest: 'dist/views',
            flatten: true
          }, {
            src: 'app/index.prod.html',
            dest: 'dist/index.html'
          }, {
            expand: true,
            cwd: 'assets/img/',
            src: '**',
            dest: 'dist/img/',
            flatten: false
          }, {
            expand: true,
            cwd: 'bower_components/',
            src: '**',
            dest: 'dist/vendor/'
          }, {
            src: 'server.js',
            dest: 'dist/'
          }, {
            expand: true,
            cwd: 'node_modules/',
            src: 'express/**',
            dest: 'dist/dependencies/'
          }, {
            src: 'config/config.staging.js',
            dest: 'dist/config/config.js'
          }
        ]
      }
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
        tasks: ['sass:dev']
      },
      angular: {
        files: [
          'app/app.module.js',
          'app/app.routes.js',
          'app/components/**/*.js',
          'app/shared/**/*.js'
        ],
        tasks: []
      },
      actions: {
        files: [
          'assets/js/*.js'
        ],
        tasks: []
      },
      html: {
        files: [
          'app/components/**/*.html',
          'app/shared/**/*.html',
          'index.html'
        ],
        tasks: []
      },
      css: {
        files: 'dist/css/style.css',
        tasks: []
      }
    },
    clean: ['dist']

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register tasks
  grunt.registerTask('build', [
    'clean',
    'concat',
    'uglify',
    'sass:' + env,
    'copy:' + env
  ]);

  grunt.registerTask('default', ['concurrent']);

};

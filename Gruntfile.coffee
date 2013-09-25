config =

  jshint:
    all: [
      'index.js'
    ],
    options:
      jshintrc: '.jshintrc'

  mochaSelenium:
    options:
      timeout: 30e3
      usePromises: true
    all:
      src: ['test/index.js']

module.exports = (grunt) ->

  grunt.initConfig(config)

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-mocha-selenium')

  grunt.registerTask('test', ['mochaSelenium'])

  grunt.registerTask('default', ['jshint', 'test'])

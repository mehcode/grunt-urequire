module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    urequire: { // using the old DEPRECATED v0.1.x format
      AMD: {
        bundlePath: "lib/",
        outputPath: "amdLib/"
      },
      options: {
        scanAllow: true,
        allNodeRequires: true,
        noExports: true,
        verbose: true,
        Continue: false,
        webRootMap: "lib/"
      }
    }
  });

  // Load task.
  grunt.loadTasks("../../tasks");

  // Default task.
  grunt.registerTask("default", "urequire");

};

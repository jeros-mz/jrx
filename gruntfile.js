module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
				stripBanners: true,
      			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			dist : {
				src: [
					'<%= pkg.path.jrx %>/jrx.base.js',
					'<%= pkg.path.jrx %>/jrx.extend.js',
					'<%= pkg.path.jrx %>/jrx.init.js'
				],
				dest: '<%= pkg.path.dist %>/jrx.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				report: 'min'
			},
			jrx: {
				options:{
					sourceMap : true,
					sourceMapName:'<%= pkg.path.dist %>/jrx.min.map'
				},
				files : {
					'<%= pkg.path.dist %>/jrx.min.js' : [
						'<%= pkg.path.dist %>/jrx.js'
					]
				}
			}
		},
		jsdoc : {
			dist : {
				src : ['<%= pkg.path.jrx %>/jrx.js'],
				// src : ['<%= pkg.path.plugin %>/jquery.plugin.sample.js', 'scripts/jquery/jquery.utils.js'],
				options : {destination : 'doc'}
			}
		}
	});
	
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify', 'jsdoc']);
	
	grunt.registerTask('doc', ['jsdoc']);
	
	grunt.registerTask('min', ['concat', 'uglify']);
	
	// grunt.registerTask('concat', ['concat']);
	
	// grunt.registerTask('less', ['less']);
};
# grunt-css-include-combine 
> Fork of grunt-css-include-combine meant to:

> . Compress CSS files.

> . Combine files via @include

> . npm install grunt-css-include-combine -l



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-cssmin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-cssmin');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-cssmin/tree/grunt-0.3-stable).*



## Combine and Minimize CSS files

Create a main CSS file with your include's instructions, like:

```css


@include("jquery-mobile/jquery-mobile.css");
@include("bootstrap/bootstrap.css");

```

Then, on your Gruntfile:

```js

grunt.initConfig({

	'css-include-combine': {
  
	    'libs': {

	    	// include's on CSS will use this PATH as it's relative 
	    	// path. This also is applied to resources url's.
	        relativeDir: 'path',

	        // your main file (see example above)
	        main: 'libsDependencies.css',

	        // the generated file
	        out: '3rdPartyLibs.css'

	    }

 	}	

});


grunt.loadNpmTasks('grunt-css-include-combine');


```

By typing on command line the following will generate the 3rd party libs minified file. If you want to add 
more file just edit the CSS main file and run Grunt!

```js
grunt "css-include-combine:libs"

```





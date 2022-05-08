let mix = require('laravel-mix')

require('./nova.mix')

// NOTE: stop .LICENSE FILES
// REF: https://github.com/laravel-mix/laravel-mix/issues/2738
mix.options({
	terser: {
		extractComments: false,
		terserOptions: {
			output: {
				comments: false,
			},
		},
	},
});

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .nova('dniccum/phone-number')

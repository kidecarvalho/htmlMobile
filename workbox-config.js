module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,png,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
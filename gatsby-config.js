module.exports = {
	siteMetadata: {
		title: 'krebeDev',
		author: {
			name: 'Solomon Ekrebe',
			jobTitle: 'Frontend Developer',
		},
		siteUrl: 'https://www.krebe.dev',
		description:
			'Frontend Developer based in Abuja, Nigeria. This is my portfolio website.',
		twitterUserName: '@krebeDev',
		image: './src/images/me.jpg', // change
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-mdx',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
	],
}

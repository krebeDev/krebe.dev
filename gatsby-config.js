module.exports = {
	siteMetadata: {
		title: 'krebeDev',
		author: {
			name: 'Solomon Ekrebe',
			jobTitle: 'Frontend Developer',
			bio: "I'm passionate about clean UI/UX, accessiblity and scalabity. I write to learn.",
			socialProfiles: {
				twitter: 'https://twitter.com/krebedev',
				linkedIn: 'https://linkedin.com/krebedev',
				github: 'https://github.com/krebedev',
			},
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
		'gatsby-plugin-fontawesome-css',

		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/contents/blog`,
			},
		},

		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `projects`,
				path: `${__dirname}/contents/projects`,
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
			},
		},

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'krebeDev',
				short_name: 'krebeDev',
				start_url: '/',
				background_color: '#12141c',
				theme_color: '#ffa621',
				display: 'standalone',
				icon: 'src/images/favicon.png',
				crossOrigin: `use-credentials`,
			},
		},
	],
}

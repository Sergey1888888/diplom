const CracoLessPlugin = require("craco-less");

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							"@primary-color": "#00b0ff",
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};

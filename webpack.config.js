const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, args) => {
    const isProduction = !args.mode || args.mode === 'production';

    return {
        module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              },
              {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
              }
            ]
        },
        entry: './src/js/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },

        devServer: {
          historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
          before(app){
            app.use((req,res,next) => {
			  if(req.url === '/'){
				req.url = '/';
			  }
              next();
            });
          }
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: "./src/index.html"
                }
            )
        ]
    };
};
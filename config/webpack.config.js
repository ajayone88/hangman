import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config = {
    entry:['webpack-hot-middleware/client?reload=true', './src/index.js'],
    output:{
        filename:'[name]-bundle.js',
        path:path.resolve(__dirname, '../dist'),
        publicPath:'/'
    },
    mode:'production',
    devServer:{
        contentBase:'dist',
        hot:true,
        overlay:true,
        stats:{
            colors:true
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader'
                    },
                ],
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options:{
                            attributes:{
                                list:[
                                    {
                                        tag:'img',
                                        attribute:'src',
                                        type:'src'
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'./images/[name]-[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html",
            filename:'index.html'
        })
    ]
};

export default config;
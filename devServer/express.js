import express from 'express';
import chalk from 'chalk';
import path from 'path';
import webpack from 'webpack';
import config from '../config/webpack.config';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddlerware from 'webpack-hot-middleware';

const app = express();
const port = process.env.PORT;

// Dev Middleware 
const compiler = webpack(config);
const devInstance  = devMiddleware(compiler, config.devServer);
app.use(devInstance);

// Hot Middleware
const hotInstance = hotMiddlerware(compiler);
app.use(hotInstance);

// Static content 
const staticContent = express.static(path.resolve(__dirname, '../dist'));
app.use(staticContent); 

app.listen(port, ()=>{
    console.log(chalk.green.bold(`Application is up and running on port ${port}`));
});

import { merge } from 'webpack-merge';
import path from 'path';
import NodemonPlugin from 'nodemon-webpack-plugin';
import commonConfig from './webpack.common';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new NodemonPlugin({
      watch: [path.resolve(__dirname, 'dist/bundle.js')],
      verbose: true,
      ext: 'js,json,ts',
      nodeArgs: ['--inspect'],
    }),
  ],
});

export default devConfig;

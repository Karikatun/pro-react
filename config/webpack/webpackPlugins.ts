import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack'

import { WebpackBuildOptions } from './types/config';

// Конфиг плагинов вебпака
export function webpackPlugins({ paths }: WebpackBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
  ]
}

import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { WebpackBuildOptions } from './types/config';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Конфиг плагинов вебпака
export function webpackPlugins({ paths, isDev }: WebpackBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
      IS_DEV: process.env.MODE === 'development'
    }),
    new CopyPlugin({
      patterns: [
        // Copy client translation files to build folder
        { from: 'public/locales', to: 'locales' }
      ]
    }),
    // new BundleAnalyzerPlugin(),
    ...(isDev ? [new ReactRefreshWebpackPlugin()] : [])
  ];
}

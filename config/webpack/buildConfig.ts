import webpack from 'webpack';

import { webpackDevServer } from './devServer';

import { WebpackBuildOptions } from './types/config';

import { webpackLoaders } from './webpackLoaders';
import { webpackPlugins } from './webpackPlugins';
import { webpackResolvers } from './webpackResolvers';

export function buildWebpackConfig(options: WebpackBuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    cache: !isDev,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: webpackPlugins(options),
    module: { rules: webpackLoaders(options) },
    resolve: webpackResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? webpackDevServer(options) : undefined
  };
}

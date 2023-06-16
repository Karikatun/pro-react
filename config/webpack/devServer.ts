import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { WebpackBuildOptions } from './types/config';

export function webpackDevServer(options: WebpackBuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: options.isDev
  };
}

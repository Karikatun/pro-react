import { WebpackBuildOptions } from './types/config';

import { Configuration as DevServerConfiguration} from 'webpack-dev-server';

export function webpackDevServer(options: WebpackBuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true
  }
}

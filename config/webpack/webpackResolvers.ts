import { ResolveOptions } from 'webpack';

import { WebpackBuildOptions } from './types/config';

// Конфиг резолверов вебпака
export function webpackResolvers(options: WebpackBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  };
}

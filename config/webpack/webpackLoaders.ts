import webpack from 'webpack';

// Конфиг лоадеров вебпака
export function webpackLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [ typescriptLoader ]
}

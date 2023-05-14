import { WebpackBuildEnv, WebpackBuildPath } from './config/webpack/types/config';
import webpack from 'webpack';
import { buildWebpackConfig } from "./config/webpack/buildConfig";
import path from 'path';

export default (env: WebpackBuildEnv) => {
  const paths: WebpackBuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  };
  
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev: mode === 'development',
    port: PORT
  });

  return config;
}

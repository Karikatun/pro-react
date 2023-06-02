import webpack from 'webpack';
import path from 'path';
import { config as dotenvConfig } from 'dotenv';

import { WebpackBuildPath, WebpackBuildEnv } from './config/webpack/types/config';
import { buildWebpackConfig } from "./config/webpack/buildConfig";

export default (env: WebpackBuildEnv) => {
  dotenvConfig({ path: './.env' })

  const paths: WebpackBuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };
  
  const mode = env.mode || 'development';
  const PORT = process.env.PORT || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev: process.env.MODE === 'development',
    port: +PORT
  });

  return config;
}

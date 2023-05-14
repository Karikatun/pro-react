
export type WebpackBuildMode = 'production' | 'development';

export interface WebpackBuildPath {
  entry: string,
  build: string,
  html: string
}

export interface WebpackBuildEnv {
  mode: WebpackBuildMode,
  port: number
}

export interface WebpackBuildOptions {
  mode: WebpackBuildMode,
  paths: WebpackBuildPath,
  isDev: boolean,
  port: number
}
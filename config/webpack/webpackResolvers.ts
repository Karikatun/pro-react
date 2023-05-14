import { ResolveOptions } from "webpack";

// Конфиг резолверов вебпака
export function webpackResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}

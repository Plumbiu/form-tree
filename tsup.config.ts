import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  format: ['esm', 'cjs'],
  clean: true,
  sourcemap: true,
  bundle: true,
  minify: true,
  dts: true,
})

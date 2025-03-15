import * as esbuild from 'esbuild';

await esbuild
  .build({
    entryPoints: ['./plugins/**/*.ts'], // Process all TypeScript files
    bundle: true, // Don't bundle files together
    outdir: './dist/prod', // Output directory instead of a single file
    platform: 'browser', // Target platform
    format: 'iife', // Generate IIFE output format
    sourcemap: true, // Enable source maps
    minify: true, // Minify the output (set to true for production)
    target: ['esnext'], // JavaScript language target
    outExtension: { '.js': '.js' }, // Keep .js extension for output files
  })
  .catch(() => process.exit(1));

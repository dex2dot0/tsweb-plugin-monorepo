# tsweb-plugin-monorepo

An opinionated typescript based monorepo for web plugins

## Pre-requisites

- [PNPM](https://pnpm.io/installation) - this is a monorepo based on pnpm workspaces so PNPM is required

## Setup

1. Clone the repository
2. Run `pnpm install` to install all dependencies
3. Run `pnpm build` to build all packages

## Project Structure

### Plugins

All plugins are located in the `plugins` directory.

### Utils

All shared utilities are located in the `utils` directory. This would include common helper functions, classes, etc.

### Core

The `core` directory contains libraries that are shared across multiple plugins.

### Types

The `types` directory contains shared types that are used across multiple plugins.

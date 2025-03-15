# tsweb-plugin-monorepo

An opinionated typescript based monorepo for web plugins

## Pre-requisites

- [PNPM](https://pnpm.io/installation) - this is a monorepo based on pnpm workspaces so PNPM is required

## Setup

1. Clone the repository
2. Run `pnpm install` to install all dependencies
3. Run `pnpm build` to build all packages

Knowledge of [pnpm workspaces](https://pnpm.io/workspaces) is highly recommended as that is what this project implements. This is a monorepo architecture that allows for shared dependencies across multiple plugins. You could achieve the same thing with something like [Lerna](https://lerna.js.org/) or [yarn](https://yarnpkg.com/features/workspaces) and others but I personally prefer pnpm workspaces.

The general idea of a monorepo for a project like this is to avoid the need to publish packages to npm to share them across multiple projects. How you choose to approach things is a personal preference and this is simply an example of how things can be structured.

## Project Structure

### Plugins

All plugins are located in the `plugins` directory.

### Utils

All shared utilities are located in the `utils` directory. This would include common helper functions, classes, etc.

### Core

The `core` directory contains libraries that are shared across multiple plugins.

### Types

The `types` directory contains shared types that are used across multiple plugins. This functions very similar to the `core` directory.

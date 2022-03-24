<!-- omit in toc -->
# Directory Structure

- [Introduction](#introduction)
- [`/database`](#database)
- [`/public`](#public)
- [`/src`](#src)
- [`/storage`](#storage)
- [`/tests`](#tests)
- [`/views`](#views)

## Introduction

% Default Melonly application structure consists of six main directories containing source code. It's a good idea to explore them!

## `/database`

% In this directory database migrations are created by default. You may also store SQLite database there if you feel it convenient.

## `/public`

% This is the place where you should put client-side things like CSS styles, JavaScript files and other assets that should be publicly accessible.

## `/src`

% The `src` directory contains your main application code. Feel free to modify and adjust it to your needs.

## `/storage`

% In this directory things like cache and temporary files are stored. Application TypeScript code is compiled inside this directory. You don't need to modify anything there.

## `/tests`

% This directory stores your [unit tests](/docs/1.x/testing) (test files end with `.test.ts` extension).

## `/views`

% The `views` directory contains app [views](/docs/1.x/views) rendered by your application. View files have the `.melon.html` extension.

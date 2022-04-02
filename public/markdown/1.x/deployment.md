<!-- omit in toc -->
# Deployment

- [Introduction](#introduction)
- [Server Requirements](#server-requirements)
- [Configuration](#configuration)

## Introduction

% When your app is ready for production, it may be a time to deploy it on the server. You only have to set few things before you release the app.

## Server Requirements

% To run your application on server, it has to satisfy Node version requirements:

- Node.js v15+

## Configuration

% The most important thing you must change in confugiration is `APP_DEBUG` option in `.env` file. By default, this option is set to `true`. It's responsible for displaying useful error messages during development.

```
APP_DEBUG=false
```

!!!
On production, this option should *always* be set to `false`. Otherwise, some information about your code may leak.
!!!

% After changing the configuration, your app can be safely deployed on the web.

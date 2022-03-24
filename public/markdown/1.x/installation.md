<!-- omit in toc -->
# Installation

- [Getting Started](#getting-started)
- [Requirements](#requirements)
- [Creating Project](#creating-project)
- [Running Application](#running-application)

## Getting Started

% To create new Melonly project you can use the CLI installer. You only have to install `@melonly/cli` package:

```
<span class="select-none mr-2">$</span>npm install -g @melonly/cli
```

## Requirements

% In order to use Melonly, your environment has to satisfy these requirements:

- Node.js 15+
- [`npm`](https://nodejs.org/en/download/) installed

## Creating Project

% After installing, you can check the Melonly CLI version if it has been properly installed:

```
<span class="select-none mr-2">$</span>melon -v
```

% Then you'll be able to run `melon` commands.
% To create new project run the `new` command in your directory:

```
<span class="select-none mr-2">$</span>melon new &lt;project-name&gt;
```

## Running Application

% Once your project has been created you can start it on the local server using `npm start`:

```
<span class="select-none mr-2">$</span>cd &lt;project-name&gt;
<span class="select-none mr-2">$</span>npm start
```

% Your application will be available on `localhost:3000` by default. You can change the port in `.env` configuration file.

???
If you don't want to open the browser automatically, use the `npm run start:dev` command.
???

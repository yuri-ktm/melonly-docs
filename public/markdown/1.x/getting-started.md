<!-- omit in toc -->
# Getting Started

- [Melonly Node.js Framework](#melonly-nodejs-framework)
- [Requirements](#requirements)
- [Installation](#installation)
- [Creating Project](#creating-project)
- [Running the Application](#running-the-application)

## Melonly Node.js Framework

% Melonly is a fast and modern web development framework for Node.js. It makes it easy to create secure and fast web applications with awesome developer experience.

## Requirements

% In order to use Melonly, your environment has to met few requirements:

- Node.js v15+
- [`npm`](https://nodejs.org/en/download/) and [`git`](https://git-scm.com) installed

## Installation

% First, you only have to install `@melonly/cli` package before creating your first project:

```
<span class="select-none mr-2">$</span>npm install -g @melonly/cli
```

% You can check the Melonly CLI version when it has been properly installed and you'll be able to run `melon` commands.

```
<span class="select-none mr-2">$</span>melon -v
```

## Creating Project

% To create new Melonly project you can use the CLI. Just run the `new` command in your directory:

```
<span class="select-none mr-2">$</span>melon new &lt;project-name&gt;
```

## Running the Application

% Once your project has been created you can start it on the local server using `npm start`:

```
<span class="select-none mr-2">$</span>cd &lt;project-name&gt;
<span class="select-none mr-2">$</span>npm start
```

% Your application will be available on `localhost:3000` by default. You can change the port in `.env` configuration file.

???
If you don't want to open the browser automatically, use the `npm run start:dev` command.
???

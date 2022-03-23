<!-- omit in toc -->
# Configuration

- [Introduction](#introduction)
- [Obtaining Variables](#obtaining-variables)

## Introduction

% All app configuration is stored in `.env` file. This is where database credentials and environment-specific settings should be stored. Melonly automatically reads all `.env` variables to `process.env` object available in your code.

% The default `.env` file looks like this:

```
APP_DEBUG=true
APP_PORT=3000
APP_KEY=

DB_CONNECTION=mysql
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=melonly

MAIL_ADDRESS=example@mail.com
MAIL_SERVICE=gmail
MAIL_HOST=localhost
MAIL_PASSWORD=
```

## Obtaining Variables

% You can get variable values using `process.env` object:

```
console.log(process.env.DB_HOST)
```

<!-- omit in toc -->
# Configuration

- [Introduction](#introduction)
- [Obtaining Variables](#obtaining-variables)
- [Example `.env` File](#example-env-file)

## Introduction

% App configuration in Melonly is stored in the `.env` file. This is the place where database credentials and environment-specific settings should be stored. Melonly automatically assigns all `.env` variables to `process.env` object available in the code.

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

!!!
Remember that `.env` file should always be ignored by version control systems like Git. It contains your app credentials that shouldn't be stored in a public repository.
!!!

## Obtaining Variables

% You can get variable values using `process.env` object:

```
console.log(process.env.DB_HOST)
```

## Example `.env` File

Developers often use version control systems to work in teams. We should remember not to store any files like `.env` in repositories for security reasons (it contains database passwords and things like that). That's why we should exclude these files from version control and only publish an example `.env.example` file synced with the original one.

<!-- omit in toc -->
# Configuration

% All app configuration is stored in `.env` file. This is where database credentials and environment-specific settings should be stored. Melonly automatically reads all `.env` variables to `process.env` object available in your code.

```
DB_CONNECTION=mysql
DB_HOST=localhost
```

% You can obtain these variables with `process.env`:

```
console.log(process.env.DB_HOST)
```

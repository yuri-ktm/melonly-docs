<!-- omit in toc -->
# HTTP

- [Introduction](#introduction)
- [Requests and Responses](#requests-and-responses)
  - [Route Parameters](#route-parameters)
  - [Form Input Data](#form-input-data)
  - [Redirects](#redirects)
  - [Headers](#headers)
  - [Cookies](#cookies)
  - [Browser Language](#browser-language)
- [Session](#session)

## Introduction

% Melonly provides a fluent API for dealing with web requests and responses which are respresented as objects.

## Requests and Responses

% Supported HTTP methods for requests are: `GET`, `POST`, `PUT`, `PATCH` and `DELETE`. Each web request is represented by `Request` object.

% You can inject `Request` and `Response` objects to a controller by type-hintng:

```
import { Request, Response } from '@melonly/core'

// Controller's constructor
constructor(private request: Request, private response: Response) {}
```

### Route Parameters

% You can get matched route URL parameters:

```
@Get('/users/:id')
public show(): string {
  const { id } = this.request.params

  return @`User id: ${id}`
}
```

% You can also get URL query string entries:

```
// Route: /search?name=user1
const { name } = this.request.query // 'user1'
```

### Form Input Data

% To retrieve and process incoming form data, use the `request.data` getter:

```
import { Post } from '@melonly/core'

@Post('/users')
public create(): RedirectResponse {
  const { username, password } = this.request.data

  this.userService.saveToDatabase(username, password)

  ...
}
```

% Input data can be sent by HTML form or AJAX for example:

```
&lt;input type="text" name="username"&gt;
&lt;input type="password" name="password"&gt;
```

```
import axios from 'axios'

axios.post('/users', data)
axios.delete('/users', data)
```

### Redirects

% Example redirect response using the `redirect` method:

```
import { RedirectResponse } from '@melonly/core'

@Get('/')
public index(): RedirectResponse {
  return this.response.redirect('/login')
}
```

### Headers

% You can also write response headers:

```
this.response.header('x-custom-header', 'content')
```

### Cookies

% You may want to get cookies sent by the user. Framework makes is super easy:

```
const { sessionId } = this.request.cookies
```

### Browser Language

% Melonly lets you to easly get user browser's language:

```
// 'pl', 'en', etc.
const language = this.request.lang()
```

% Read more about localization [here](/docs/1.x/localization).

## Session

% Melonly provides a powerful built-in session system. Read more in [session docs](/docs/1.x/session).

<!-- omit in toc -->
# HTTP

- [Requests and Responses](#requests-and-responses)
- [Form Input Data](#form-input-data)
- [Redirects](#redirects)
- [Headers](#headers)

<br>

Melonly provides a fluent API for dealing with web requests and responses which are respresented as objects.

## Requests and Responses

% You can inject `Request` and `Response` objects to a controller by type-hintng to use them:

```
import { Request, Response } from '@melonly/core'

// In controller's constructor
constructor(private request: Request, private response: Response) {}
```

% You can get matched URL parameters:

```
@Get('/users/:id')
public show(): string {
    const { id } = this.request.params

    return `User id: ${id}`
}
```

% You can also get URL query string entries:

```
// Route: /search?query=user1
const { query } = this.request.query // 'user1'
```


## Form Input Data

% To retrieve and process incoming form data, use the `request.data` getter:

```
import { Post } from '@melonly/core'

@Post('/users')
public create(): RedirectResponse {
    const { username, password } = this.request.data

    this.userService.saveToDatabase(username, password)

    // ...
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
```


## Redirects

% Example redirect response using the `redirect` method:

```
import { RedirectResponse } from '@melonly/core'

@Get('/')
public index(): RedirectResponse {
    return this.response.redirect('/login')
}
```


## Headers

% You can also write response headers:

```
this.response.header('X-Custom-Header', 'content')
```

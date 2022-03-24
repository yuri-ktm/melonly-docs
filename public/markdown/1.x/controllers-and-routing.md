<!-- omit in toc -->
# Controllers and Routing

- [Introduction](#introduction)
- [Creating Controllers](#creating-controllers)
- [Registering Controllers](#registering-controllers)
- [Route Patterns](#route-patterns)

## Introduction

% Most of web applications follow a concept of *routes* - URLs with some assigned action. Routing system in Melonly is based on controller classes. Framework already ships with one controller in `src/app/app.controller.ts` file by default:

```
import { Controller, Get, Request, Response, ViewResponse } from '@melonly/core'

@Controller()
export class AppController {
  constructor(private request: Request, private response: Response) {}

  @Get('/')
  public index(): ViewResponse {
    return this.response.render('home', {
      message: 'Hello World',
    })
  }
}
```

% Basically, a controller is just a class with some methods which handles incoming web requests. Each controller should contain decorated methods which register app routes. In the controller above we have one registered route `/`. When the user enters `/` URL, the request will be passed to the `index` method which returns a view with passed variable.

% Controller methods should always return some value. Melonly automatically sends proper headers based on returned content. In case of object / array the response will have JSON type. When returned value is text, it will be rendered as HTML.

## Creating Controllers

% You may create controllers with CLI:

```
<span class="select-none mr-2">$</span>melon make controller post
```


## Registering Controllers

% The main application entry is located in `src/main.ts` file. This is the place where controllers, middleware and channels are registered. Every time you create new controller, you have to register it:

```
app.registerControllers([
  AppController,
  // Other controllers registration...
])
```


## Route Patterns

% Route patterns are dynamic. Just use `:paramName` syntax to create variable URL:

```
@Get('/users/:id')
```

% To make the paramater optional use the question mark:

```
@Get('/users/:id?')
```

% The above route will match both `/users` and `/users/327` URLs.

???
Note that controllers should be as short as possible - they are only responsible of handling web requests and returning a response. For more logic use [services](/docs/1.x/services).
???

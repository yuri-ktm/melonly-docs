<!-- omit in toc -->
# Controllers and Routing

- [Introduction](#introduction)
- [Controllers](#controllers)
  - [Creating new Controllers](#creating-new-controllers)
  - [Registering Controllers](#registering-controllers)
- [Routes](#routes)
  - [Route URL Patterns](#route-url-patterns)

## Introduction

% Typically, web applications are based on a concept of *routes* - URLs with assigned actions called when user requests for URL. Since Melonly follows the MVC pattern, routing system in the framework is based on controllers.

## Controllers

% Basically, a controller is just a class with some methods which handles incoming web requests. Each controller should contain decorated methods which register app routes. In the controller above we have one registered route `/`. When the user enters `/` URL, the request will be passed to the `index` method which returns a view with passed variable.

% Framework already ships with one controller in `src/modules/app/app.controller.ts` file by default:

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

% Controller methods should always return some value. Melonly automatically sends proper headers based on returned content. In case of object / array the response will have JSON type. When returned value is text, it will be rendered as HTML.

### Creating new Controllers

% You may generate new controllers with CLI:

```
<span class="select-none mr-2">$</span>melon make controller post
```

### Registering Controllers

% The main application entry is located in `src/main.ts` file. This is the place where controllers, middleware and channels are registered. Every time you create new controller, you have to register it:

```
import { AppController } from './modules/app/app.controller'

app.registerControllers([
  AppController,
  ...
])
```

## Routes

% You may declare your application routes by creating controller methods and decorating them with the proper HTTP method decorator:

```
import { Get, Post, Delete } from '@melonly/core'

@Get('/users')
public index(): any {
  ...
}

@Post('/users')
public store(): any {
  ...
}

@Delete('/users/:id')
public index(): any {
  ...
}
```

% The decorator accepts URL pattern as argument. Melonly supports all common HTTP methods so you can use `@Get`, `@Post`, `@Put`, `@Patch` and `@Delete` decorators.

???
Note that controllers should be as short as possible - they are only responsible for handling web requests and returning a response. For more logic you can familiarize yourself with [services](/docs/1.x/services).
???

### Route URL Patterns

% Melonly's routes are dynamic. You may use the `/path/:paramName` syntax to create variable URL that accepts multiple values:

```
// Match /users/327 URL
@Get('/users/:id')
```

% To make the paramater optional use the question mark:

```
@Get('/users/:id?')
```

% The above route will match both `/users` and `/users/327` URLs.

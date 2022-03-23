<!-- omit in toc -->
# Services

- [Introduction](#introduction)
- [Creating Services](#creating-services)
- [Using Services](#using-services)

## Introduction

% Melonly strongly encourages you to write clean code separated into small parts. We believe that controllers should be only responsible for request and response handling. All other buisness logic should be located in service classes. Service class is an injectable class with methods responsible for transforming some data.

## Creating Services

% To create new service run the following command:

```
<span class="select-none mr-2">$</span>melon make service user
```

% `user` is just a name for the generated class. The path will look like `src/user/user.service.ts` It will contain the following code:

```
import { Injectable } from '@melonly/core'

@Injectable()
export class UserService {
  public getMessage(): string {
    return 'Hello World!'
  }
}
```

## Using Services

% Since the class has been declared as injectable, we can type-hint the controller constructor to get injected services:

```
import { UserService } from './user.service'

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  ...
}
```

% Injected services will be automatically available in the controller:

```
@Get('/users')
public index(): string {
  return this.userService.getMessage()
}
```

<!-- omit in toc -->
# Dependency Injection

- [Class Bindings](#class-bindings)
- [Singletons](#singletons)

<br>

% Backend applications often use object-oriented programming to manage the codebase. Melonly utilizes common *service container* and *dependency injection* patterns.

## Class Bindings

% Let's say that you need to create a new [service](/docs/1.x/services) class. 

```
<span class="select-none mr-2">$</span>melon make service post
```

% One idea for dividing logic into services is to handle them using `static` methods. But it may be more convinient to create new service class instance and call its methods. But there's a problem - *where* should you create instances? That's why Melonly provides the `@Injectable` interface for managing class dependencies.

% You only have to type-hint the constructor of class which uses the injected service. Then mark both classes with `@Injectable` decorator:

```
import { Injectable } from '@melonly/core'

@Injectable()
export class PostService {
    ...
}
```

```
import { PostService } from './post.service'

@Injectable()
export class OtherService {
    constructor(private postService: PostService) {}
    ...
}
```

Melonly will automatically resolve type-hinted dependencies and pass them to your class.

Note that controllers decorated with `@Controller` are automatically injectable.

## Singletons

Normally hinted dependencies are resolved independently each time they are needed. But sometimes you may need to have only one object instance throughout the request (a *singleton*). You can register classes which are intended to be singletons in the `src/main.ts` file:

```
app.bindSingletons([
    MyClass,
])
```

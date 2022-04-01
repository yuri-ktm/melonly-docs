<!-- omit in toc -->
# Session

- [Introduction](#introduction)
- [Storing Data](#storing-data)
- [Obtaining Data](#obtaining-data)
- [Deleting Data](#deleting-data)
- [Destroying Session](#destroying-session)

## Introduction

% Since HTTP protocol is stateless we cannot store data between requests. On backend there is a term called *session* - a mechanism which can save user information so we can access it on multiple requests. Melonly provides a built-in session management module so you don't have to install any additional dependencies.

## Storing Data

% To start using session just import it and inject from the [Container](/docs/1.x/dependency-injection):

```
import { Session } from '@melonly/core'

// In controller's constructor
constructor(private session: Session) {}
```

% Then you'll be able to use the session object in your controller.

% To save some variable to session, use the `set` method:

```
const email = 'user@email.com'

this.session.set('email', email)
```

## Obtaining Data

% For getting saved session data you have a `session.data` object:

```
const sessionEmail = this.session.data.email
```

## Deleting Data

% You can also remove items from the session:

```
this.session.delete('email')
```

## Destroying Session

% Sometimes you need to clear all session entries and completely unset the session, for example for logging out the user. Melonly makes it super easy:

```
this.session.clear()
```

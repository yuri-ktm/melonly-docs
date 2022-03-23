<!-- omit in toc -->
# Testing

- [Introduction](#introduction)
- [Generating Tests](#generating-tests)

## Introduction

% Testing your application is very important. Melonly ships with [Jest testing package](https://jestjs.io) installed by default. Test files are placed in `/tests` directory. Run `npm test command` to see test results:

```
<span class="select-none mr-2">$</span>npm test

PASS  tests/app.controller.test.ts
  √ asserts response is truthy (1 ms)

Test Suites: 1 passed, 1 total
```

## Generating Tests

You may generate test files using the CLI:

```
<span class="select-none mr-2">$</span>melon make test post
```

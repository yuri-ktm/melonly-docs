<!-- omit in toc -->
# Command Line Interface

- [Introduction](#introduction)
- [Useful Commands](#useful-commands)

## Introduction

Melonly ships with the [official CLI](https://github.com/Doc077/melonly-cli) - a powerful terminal tool which makes it easy to create and manage your application files. If you don't have it installed yet, use the `npm` command:

```
<span class="select-none mr-2">$</span>npm install -g @melonly/cli
```

## Useful Commands

The most useful commands are so-called *generators* - commands which create files with content for you.

```
<span class="select-none mr-2">$</span>melon make controller user
```

```
<span class="select-none mr-2">$</span>melon make service post
```

```
<span class="select-none mr-2">$</span>melon make email welcome
```

You can display available commands list:

```
<span class="select-none mr-2">$</span>melon commands
```

Or you may get the installed CLI version:

```
<span class="select-none mr-2">$</span>melon --version
```

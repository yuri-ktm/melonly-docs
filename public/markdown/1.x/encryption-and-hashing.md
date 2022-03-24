<!-- omit in toc -->
# Encryption and Hashing

- [Introduction](#introduction)
- [Configuration](#configuration)
- [Encryption and Decryption](#encryption-and-decryption)
- [Hashing](#hashing)

## Introduction

% Secure web apps require good encryption and hashing algorithms. Melonly provides a simple two-way encryption interface.

## Configuration

% To provide best security, your app should have unique key for encrypting data. The `APP_KEY` is stored in `.env` file and it's generated automatically when you're creating new project. You can regenerate it when moving to production server.

## Encryption and Decryption

% To encrypt a string, use the `Crypt` methods:

```
import { Crypt } from '@melonly/core'

const text = 'Hello world'

const cipher = Crypt.encrypt(text)
```

To decrypt this cipher back, use `Crypt.decrypt`:

```
const decrypted = Crypt.decrypt(cipher.content, cipher.iv)
```

## Hashing

Hashing is an another way to encrypt data (in one-way). For example, it is useful for storing passwords in database.

```
import { Hash } from '@melonly/core'

const passwordHash = Hash.make(password)
```

Note that you can only compare two hashes without the ability to decrypt hashed strings. To check if supplied string (password for example) is the same as hash, use the `compare` method:

```
// true or false
const passwordCorrect = Hash.compare(password, passwordHash)
```

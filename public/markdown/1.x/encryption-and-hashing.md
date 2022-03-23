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

To decrypt this cipher back, use `Cipher.decrypt`:

```
const decrypted = Crypt.decrypt(cipher.content, cipher.iv)
```

## Hashing

Hashing is an another way to encrypt data (one-way). For example, it is useful for storing passwords in database for security reasons.

```
import { Crypt } from '@melonly/core'

const passwordHash = Crypt.hash(password)
```

Note that we can only compare two hashes without ability to decrypt hashed strings.

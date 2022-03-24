<!-- omit in toc -->
# Mail

- [Introduction](#introduction)
- [Configuration](#configuration)
- [Sending Text Emails](#sending-text-emails)
- [Email Classes](#email-classes)

## Introduction

% Melonly provides a fluent interface for sending emails from your application. We provide two ways for managing emails with classes.

## Configuration

% All configuration needed for mailing is stored in the `.env` variables:

```
MAIL_ADDRESS=example@mail.com
MAIL_SERVICE=gmail
MAIL_PASSWORD=
```

## Sending Text Emails

% After providing your mail service credentials you'll be able to create and send your first email. The most basic form is writing raw text message from `Mail.send` method:

```
import { Email } from '@melonly/core'

Email.send('recipient@mail.com', 'Test Email', 'This is the test email sent from Melonly application.')
```

## Email Classes

% Though the above way is simple and convinient for small-sized applications, we recommend the more object-oriented approach with separate email classes. It allows us to make emails with HTML templates. To generate a new email file use the CLI command:

```
<span class="select-none mr-2">$</span>melon make email welcome
```

% This command will create a new `mail/welcome.email.ts` file. It will look like this:

```
import { Email } from '@melonly/core'

export class WelcomeEmail extends Email {
  public subject(): string {
    return 'Welcome'
  }

  public build(): string {
    return this.fromTemplate('mail.welcome')
  }
}
```

% The above email will render `views/mail.welcome.melon.html` template. You can pass any variables to the template like we done it in view rendering.

% Sending emails using this method is very similar. Instead of passing content as a string, you can create email instance:

```
import { WelcomeEmail } from '../mail/welcome.email'

Email.send('recipient@mail.com', new WelcomeEmail())
```

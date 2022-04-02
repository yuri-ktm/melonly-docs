<!-- omit in toc -->
# Localization

- [Introduction](#introduction)
- [Setting App Language](#setting-app-language)
- [Translations](#translations)
- [View Translations](#view-translations)

## Introduction

% Web applications are often multi-language. Melonly has built-in localization features so you can easly support multiple languages without any additional libraries.

## Setting App Language

% You can set the default app language in `src/config/config.ts` file:

```
language: 'en',
```

% To change app locale during the request, use the `Lang` interface:

```
import { Lang } from '@melonly/core'

const browserLanguage = this.request.lang()

// Set language from list of supported ones
if (['de', 'fr ,'pl'].includes(browserLanguage)) {
  Lang.set(browserLanguage)
}
```

## Translations

% Translations are stored in `.json` files inside `/lang` directory. It does not exist by default, but you can create it if you're using localization features.

% For example, if your app supports Polish language with English as default, just create a new `lang/pl.json` file with translations. To get translated contents, import `trans` function and pass the default text to it:

```
import { trans } from '@melonly/core'

const message = trans('Hello World')
```

```
// lang/pl.json
{
  "Hello World": "Witaj Świecie"
}
```

## View Translations

% You can also display translated text directly in view templates using `trans` function:

```
&lt;h1&gt;{{ trans('Hello World') }}&lt;/h1&gt;
```

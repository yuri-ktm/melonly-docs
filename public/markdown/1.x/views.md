<!-- omit in toc -->
# Views

- [Templates](#templates)
- [Rendering a View](#rendering-a-view)
- [Custom Error Pages](#custom-error-pages)

## Templates

% Melonly includes a built-in view template engine. Views are placed in `/views` directory and have the `.melon.html` extension.

% Melonly's template engine allows you to create loops, conditionals and variable interpolation.

% The example template with conditional rendering block looks like this:

```
&lt;h1&gt;{{ title }}&lt;/h1&gt;

&lt;menu&gt;
  [if logged]
    &lt;a href="/logout"&gt;Log out&lt;/a&gt;
  [/if]
&lt;/menu&gt;
```

% All directives like foreach loops use the square brackets and slash syntax:

```
[each item in [1, 2, 3]]
  &lt;div&gt;{{ item }}&lt;/div&gt;
[/each]
```

% For displaying passed variables use `{{ variable }}` syntax. Variables are automatically escaped from HTML to prevent XSS attacks.

% Some frontend frameworks like Vue use the same bracket syntax for displaying data. To render raw brackets put `@` sign before them:

```
@{{ value }}
```

## Rendering a View

% Rendering views is done using the 'dot' syntax for nested folders:

```
// Render views/pages/welcome.melon.html template
return this.response.render('pages.welcome')
```

!!!
View file names should not contain dot signs as they are interpreted as subdirectories.
!!!

## Custom Error Pages

% You can also customize the default 404 page. All you have to do is to create `views/errors/404.melon.html` file with your custom template. When this file exists, Melonly will serve it as the 404 error page. Otherwise, the default one will be displayed.

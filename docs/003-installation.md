# Chapter 2 - How To Install Frozencss

When it comes to installing frozencss, you have two options:

1. Installing with npm
2. CDN link

## Installing Frozencss using npm

To install frozencss using npm, you can run the following command:

```bash
npm install frozencss
```

This will install the frozencss file in your <code>node_modules</code> folder. You can reference the main css file by using the following code:

```javascript
// If you use CommonJS Syntax:
require("node_modules/frozencss/dist/css/main.css");
// If you use ES6 Syntax:
import "node_modules/frozencss/dist/css/main.css";
```

## Using Frozencss using CDN link

You can use our CDN link to use the frozencss library in your project. simply include this particular piece of html code into your <code>head</code> tag:

```html
<link
  rel="stylesheet"
  href="
https://cdn.jsdelivr.net/npm/frozencss@1.1.2/dist/css/main.css"
/>
```


### Important Note!
Using the CDN link may look rewarding but in the production, it is not preffered.

###### Next: [Chapter 3 - Getting Started](003-getting-started.md)
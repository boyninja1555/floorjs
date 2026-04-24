<div align="center">
    <img src="LOGO.svg" height="200" />
</div>

## Overview

Tons of web devs use raw JavaScript everyday. Because who needs Vite or Webpack for everything? I, Floor, have made **FloorJS**, which contains small JavaScripts that do repetitive steps for you through CDN or script download.

Each directory in this repository contains a `.js` file for the original JavaScript, a `.min.js` file for the (almost unreadable) optimized JavaScript, a `.d.ts` file for optional types (TypeScript), and a small documentation snippet inside the `.md` file.

Types are not actually there for TypeScript itself. A lot of IDEs search your open directory for `.d.ts` files to autocomplete better.

## Importing

Can't use this beautiful service if the scripts aren't accessible! It's totally fine to download whatever you need, but I always appreciate a credit giver. Plus there's an [MIT license](LICENSE.md) so you kind of have to. A safer option is to use FloorJS scripts as a CDN of sorts like below:

```html
<script src="https://boyninja1555.github.io/floorjs/darklight/darklight.min.js"></script>
<script src="/mycode.js"></script>
```

> **Note:** If you want better autocompletions and real documentation, follow the steps below. `.d.ts` files provide "types" and better descriptions if your IDE supports them. These do not work with CDNs most of the time.

But of course the `.d.ts` files are important. While most users won't be using TypeScript, it's always good to know what you're writing. Download the first `.d.ts` file you see next to your chosen script and place in a directory named `types` for example. You will be referencing where the file is (relative) in your JavaScripts like this:

```javascript
/// <reference path="./types/darklight.d.ts" />
```

## Available scripts

| Name                    | Documentation                               | Status |
|-------------------------|---------------------------------------------|--------|
| Dark/Light Mode Handler | [darklight.md](./darklight/darklight.md)    | Stable |
| Floorquery              | [floorquery.md](./floorquery/floorquery.md) | Beta   |

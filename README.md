# SolidJs example

This example shows how to run [Vite](https://vitejs.dev) and SolidJs with
vite-deno-plugin.

To start this example, run:

```bash
$ deno task dev
```

Refer to the [`./deno.json`](./deno.json) for the other tasks.

## Available tasks

- `deno task dev`: start dev server
- `deno task build`: build for production
- `deno task preview`: preview production build

## How to add a dependency

Just add the dependency to imports field in `deno.json`.

```json
{
  "imports": {
    "@solidjs/router": "https://esm.sh/@solidjs/router@0.13.1"
  }
}
```

And import it.

```tsx
import { Route, Routes } from "@solidjs/router";
```

Or you can import from URL directly.

```tsx
import { Route, Routes } from "https://esm.sh/@solidjs/router@0.13.1";
```

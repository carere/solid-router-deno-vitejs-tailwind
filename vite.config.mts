import { defineConfig } from "npm:vite";
import deno from "https://deno.land/x/vite_deno_plugin@v0.9.4/mod.ts";
import { dirname } from "https://deno.land/std@0.220.1/path/mod.ts";
import tailwindcss from "npm:tailwindcss";
import autoprefixer from "npm:autoprefixer";
import solid from "npm:vite-plugin-solid";

const __dirname = dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [
    solid(),
    deno({ importMapFilename: __dirname + "/deno.json" }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});

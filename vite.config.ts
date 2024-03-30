import { defineConfig, PluginOption } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postCssImport from "postcss-import";
import cssNano from "cssnano";
import solid from "vite-plugin-solid";
import deno from "https://deno.land/x/vite_deno_plugin@v0.9.4/mod.ts";

export default defineConfig(({ mode }) => {
  const plugins = [
    tailwindcss(),
    autoprefixer(),
    postCssImport(),
  ];
  if (mode === "production") plugins.push(cssNano());

  return {
    plugins: [
      solid() as PluginOption,
      deno({ importMapFilename: "deno.jsonc" }) as PluginOption,
    ],
    css: { postcss: { plugins } },
  };
});

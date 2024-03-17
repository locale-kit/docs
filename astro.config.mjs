import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://locale-kit.github.io",
  base: "/docs/",
  integrations: [
    svelte(),
    starlight({
      title: "LocaleKit",
      social: {
        github: "https://github.com/locale-kit/locale-kit",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Getting Started",
              items: [
                {
                  label: "Installation",
                  link: "/guides/getting-started/installation/",
                },
                {
                  label: "Basic Usage",
                  link: "/guides/getting-started/basic-usage/",
                },
              ],
            },
          ],
        },
        {
          label: "Usage",
          autogenerate: { directory: "usage" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          items: [
            {
              label: "Parameter Types",
              autogenerate: { directory: "/reference/param-types" },
            },
          ],
        },
      ],
    }),
  ],
});

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://locale-kit.github.io",
  base: "/docs/",
  integrations: [
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
                  label: "Configuration",
                  link: "/guides/getting-started/configuration/",
                },
              ],
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});

import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    default: "White",
    values: [
      {
        name: "Overlay-header",
        value: "#908d86",
      },
      {
        name: "Menu-header",
        value: "#2f2740",
      },
      {
        name: "White",
        value: "#ffffff",
      },
    ],
  },
};

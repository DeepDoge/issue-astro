// @ts-check

import { createIndependentModules } from "eslint-plugin-project-structure";

const app = ["src/*", "src/pages/**"];
const shared = ["src/shared/*/**"];
const features = ["src/features/*/**"];

export const independentModules = createIndependentModules({
    debugMode: true,
    extensions: [".astro"],
    pathAliases: {
        baseUrl: "./",
        paths: {
            "~/*": ["src/*"],
            "node:*": ["*"],
        },
    },
    modules: [
        {
            name: "App",
            pattern: app,
            allowImportsFrom: [...shared, ...features, ...app],
        },
        {
            name: "Other Features",
            pattern: features,
            allowImportsFrom: [...shared, "{family_3}/**"],
        },
        {
            name: "Shared",
            pattern: shared,
            allowImportsFrom: [...shared],
        },
        {
            name: "Unknown",
            pattern: "src/**",
            allowImportsFrom: [],
            allowExternalImports: false,
        },
    ],
});

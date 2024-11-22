import eslint from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import projectStructurePlugin from "eslint-plugin-project-structure";
import tseslint from "typescript-eslint";
import { independentModules } from "./independentModules.mjs";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: { "@typescript-eslint": typescriptPlugin },
        rules: {
            "@typescript-eslint/triple-slash-reference": "off"
        }
    },
    {
        plugins: { "project-structure": projectStructurePlugin },
        rules: {
            "project-structure/independent-modules": ["error", independentModules],
        },
    },
);

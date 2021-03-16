module.exports = {
    extends: ["airbnb-typescript", "prettier"],
    plugins: ["prettier"],
    parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {jsx: true}
    },
    env: {
        browser: true,
    },
    rules: {
        "prettier/prettier": ["error"],
        "import/no-cycle": "off"
    },
};

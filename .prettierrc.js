module.exports = {
  plugins: [require.resolve("prettier-plugin-go-template")],
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
    {
      files: ["*.md"],
      options: {
        proseWrap: "always",
      },
    },
  ],
  tabWidth: 2,
  singleQuote: false,
};

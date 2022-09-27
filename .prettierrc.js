module.exports = {
  plugins: [require.resolve("prettier-plugin-go-template")],
  proseWrap: "always",
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
  tabWidth: 2,
  singleQuote: false,
};

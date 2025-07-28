module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 80,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        proseWrap: 'always',
      },
    },
    {
      files: ['src/content/**/*'],
      options: {
        parser: 'markdown',
        proseWrap: 'preserve',
      },
    },
    {
      files: ['Analytics.astro'],
      options: {
        requirePragma: true,
      },
    },
  ],
};

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const { tailwindConfiguration } = require('../tailwind-configuration/src');
const { join } = require('path');

console.log(tailwindConfiguration);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '../**/src/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    ...tailwindConfiguration.theme,
    extend: {
      ...tailwindConfiguration.theme.extend
    },
  },
  plugins: [...tailwindConfiguration.plugins],
};

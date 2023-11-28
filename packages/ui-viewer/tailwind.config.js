const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const { lgcTailwindPlugin } = require('../tailwind-configuration/src');
const { join } = require('path');

console.log(lgcTailwindPlugin);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '../**/src/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [lgcTailwindPlugin],
};

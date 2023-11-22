import { tailwindConfiguration } from './tailwind-configuration';

describe('tailwindConfiguration', () => {
  it('should work', () => {
    expect(tailwindConfiguration()).toEqual('tailwind-configuration');
  });
});

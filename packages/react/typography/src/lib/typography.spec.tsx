import { render } from '@testing-library/react';

import Typography from './typography';
import React from 'react';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Typography />);
    expect(baseElement).toBeTruthy();
  });
});

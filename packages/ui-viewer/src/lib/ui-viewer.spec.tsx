import { render } from '@testing-library/react';

import UiViewer from './ui-viewer';

describe('UiViewer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiViewer />);
    expect(baseElement).toBeTruthy();
  });
});

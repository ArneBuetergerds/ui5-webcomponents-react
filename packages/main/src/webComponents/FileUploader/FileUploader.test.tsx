import { render } from '@shared/tests';
import { FileUploader } from '@ui5/webcomponents-react/dist/FileUploader';
import React from 'react';

describe('FileUploader', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FileUploader />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@shared/tests';
import { Select } from '@ui5/webcomponents-react/dist/Select';
import React from 'react';

describe('Select', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Select />);
    expect(asFragment()).toMatchSnapshot();
  });
});

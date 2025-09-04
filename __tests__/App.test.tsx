/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {

    ReactTestRenderer.create(<App />);
  });
});

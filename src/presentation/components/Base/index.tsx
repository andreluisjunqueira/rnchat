import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import {
  createBox,
  createText,
} from '@shopify/restyle';

import { Theme } from '../../../theme';

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
type ExtraProps = {
  children: React.ReactNode;
}

export const BaseButton = createBox<Theme, TouchableOpacityProps & ExtraProps>(TouchableOpacity);
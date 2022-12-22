import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        backgroundColor: '$blue500',
      },
    },
  },
  {},
  config
);

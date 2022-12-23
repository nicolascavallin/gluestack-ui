import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$muted700',
        p: '$2',
        rounded: '$sm',
        // shadow: 1
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        flexDirection: 'row',
        //@ts-ignore web only
        pointerEvents: 'box-none',
        mb: '$2',
      },

      descendants: {},
    },
    defaultProps: {
      //@ts-ignore
      space: 'md',
    },
  },
  {},
  config
);
